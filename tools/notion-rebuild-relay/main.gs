// Notionのwebhookアクション(ボディ形式が固定)とGitHubのrepository_dispatch API
// (event_typeボディが必須)の橋渡しをするGAS Web App。
// デプロイ手順・設定値は同ディレクトリのREADME.mdを参照。

const GITHUB_REPO = 'cloudnativedaysjp/website';
const EVENT_TYPE = 'rebuild-website';

function doPost(e) {
  const props = PropertiesService.getScriptProperties();

  // GASはHTTPヘッダーを参照できないため、認証はURLクエリ(?token=...)で行う
  const expected = props.getProperty('SHARED_TOKEN');
  const actual = e && e.parameter ? e.parameter.token : null;
  if (!expected || actual !== expected) {
    return jsonResponse_({ ok: false, error: 'invalid token' });
  }

  const res = UrlFetchApp.fetch(`https://api.github.com/repos/${GITHUB_REPO}/dispatches`, {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + props.getProperty('GITHUB_TOKEN'),
      Accept: 'application/vnd.github+json',
    },
    payload: JSON.stringify({ event_type: EVENT_TYPE }),
    muteHttpExceptions: true,
  });

  // repository_dispatch成功時、GitHubは204 No Contentを返す
  const status = res.getResponseCode();
  return jsonResponse_({ ok: status === 204, status: status });
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
