export interface ContactoResponse {
  banner_section: BannerSection;
  info_section:   InfoSection;
  form_section:   FormSection;
  map_section:    MapSection;
}

export interface BannerSection {
  title: string;
  image: string;
}

export interface FormSection {
  title:    string;
  subtitle: string;
}

export interface InfoSection {
  phone:   string;
  email:   string;
  address: string;
}

export interface MapSection {
  title:  string;
  iframe: string;
}
