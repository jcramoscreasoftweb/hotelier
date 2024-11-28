export interface DestinoResponse {
  banner_section:      BannerSection;
  first_section:       FirstSection;
  attractions_section: AttractionsSection[];
}

export interface AttractionsSection {
  title:       string;
  description: string;
  subtitle:    string;
  image:       string;
}

export interface BannerSection {
  title: string;
  image: string;
}

export interface FirstSection {
  image_1:       string;
  description:   string;
  image_2:       string;
  image_text:    string;
  title_tourist: string;
}
