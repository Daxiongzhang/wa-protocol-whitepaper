export interface WhitepaperTranslation {
  title: string;
  subtitle: string;
  backToHome: string;
  tableOfContents: string;
  download: string;
  readOnline: string;
  chapter: string;
}

export interface WhitepaperSection {
  id: number;
  title: string;
  icon: string;
  content: string;
}

export interface WhitepaperContent {
  sections: WhitepaperSection[];
}
