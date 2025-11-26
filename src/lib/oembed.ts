export interface OEmbedResponse {
  html: string;
  width: number;
  height: number;
  title?: string;
  provider_name?: string;
}

export interface SlideEmbed {
  html: string | null;
  provider: string;
  url: string;
  error?: string;
}

const OEMBED_ENDPOINTS: Record<string, string> = {
  speakerdeck: 'https://speakerdeck.com/oembed.json',
  docswell: 'https://www.docswell.com/service/oembed',
};

async function fetchOEmbed(endpoint: string, url: string): Promise<OEmbedResponse | null> {
  try {
    const oembedUrl = `${endpoint}?url=${encodeURIComponent(url)}`;
    const response = await fetch(oembedUrl);
    if (!response.ok) {
      console.error(`oEmbed fetch failed for ${url}: ${response.status}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`oEmbed fetch error for ${url}:`, error);
    return null;
  }
}

function getProvider(url: string): string {
  if (url.includes('speakerdeck.com')) return 'speakerdeck';
  if (url.includes('docswell.com')) return 'docswell';
  if (url.includes('slideshare.net')) return 'slideshare';
  if (url.includes('docs.google.com')) return 'google';
  return 'unknown';
}

export async function getSlideEmbed(documentUrl: string): Promise<SlideEmbed> {
  const provider = getProvider(documentUrl);

  if (provider === 'speakerdeck') {
    const oembed = await fetchOEmbed(OEMBED_ENDPOINTS.speakerdeck, documentUrl);
    if (oembed?.html) {
      return {
        html: oembed.html,
        provider: 'SpeakerDeck',
        url: documentUrl,
      };
    }
  }

  if (provider === 'docswell') {
    const oembed = await fetchOEmbed(OEMBED_ENDPOINTS.docswell, documentUrl);
    if (oembed?.html) {
      return {
        html: oembed.html,
        provider: 'Docswell',
        url: documentUrl,
      };
    }
  }

  // For unsupported providers or failed fetches, return null html (will show link card)
  const providerNames: Record<string, string> = {
    speakerdeck: 'SpeakerDeck',
    docswell: 'Docswell',
    slideshare: 'SlideShare',
    google: 'Google Slides',
    unknown: '発表資料',
  };

  return {
    html: null,
    provider: providerNames[provider] || '発表資料',
    url: documentUrl,
    error: 'Embed not available',
  };
}
