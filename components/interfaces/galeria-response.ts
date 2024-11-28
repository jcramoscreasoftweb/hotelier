export interface GaleriaResponse {
  pincipal_section:   PincipalSection;
  areas_section:      Section;
  rooms_section:      Section;
  restaurant_section: Section;
}

export interface Section {
  title:       string;
  description: string;
  images:      Image[];
}

export interface Image {
  name:  string;
  image: string;
}

export interface PincipalSection {
  title:    string;
  image:    string;
  subtitle: string;
}