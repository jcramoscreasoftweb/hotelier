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
  title:         string;
  subtitle:      string;
  label_name:    string;
  label_phone:   string;
  label_email:   string;
  label_message: string;
  label_address: string;
  label_button:  string;
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

export interface Popup {
  title:    string;
  subtitle: string;
}

