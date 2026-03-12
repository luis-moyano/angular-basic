export interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryNativeName {
  official: string;
  common: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: Record<string, CountryNativeName>;
}

export interface Country {
  flags: CountryFlags;
  name: CountryName;
  capital?: string[];
  region: string;
}
