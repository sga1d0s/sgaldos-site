import t from "@/config/translations.json";
import config from "@/config/config.json";

export type Lang = "en" | "es";

export function getLang(pathname: string): Lang {
  return /^\/es(\/|$)/.test(pathname) ? "es" : "en";
}

export function useTranslations(lang: Lang) {
  return t[lang];
}

export function getProfileTranslation(lang: Lang) {
  return config.profile.translations[lang];
}

export function getMetaTranslation(lang: Lang) {
  return config.metadata.translations[lang];
}

/** Given the current pathname, returns the URL for the alternate language */
export function getAlternateUrl(pathname: string): string {
  if (/^\/es(\/|$)/.test(pathname)) {
    return pathname.replace(/^\/es/, "") || "/";
  }
  return `/es${pathname}`;
}
