export type Conference = {
  id: number;
  name: string;
  abbr: string;
  status: string;
  image: string;
  theme: string;
  about: string;
  privacy_policy: string;
  privacy_policy_for_speaker: string | null;
  copyright: String;
  coc: String;
  conferenceDays: ConferenceDay[];
};

export type ConferenceDay = {
  id: number;
  date: string;
  internal: boolean;
};
