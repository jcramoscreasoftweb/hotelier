export interface SostenibilidadResponse {
  pincipal_section: PincipalSection;
  first_section:    FirstSection;
  second_section:   SecondSection;
}

export interface PincipalSection {
  title:       string;
  image:       string;
  description: string;
}

export interface FirstSection {
  title:      string;
  subtitle_1: string;
  content_1:  string;
  subtitle_2: string;
  content_2:  string;
  image_1:    string;
  subtitle_3: string;
  content_3:  string;
  subtitle_4: string;
  content_4:  string;
  image_2:    string;
}

export interface SecondSection {
  title:      string;
  subtitle_1: string;
  content_1:  string;
  subtitle_2: string;
  content_2:  string;
  image_1:    string;
  image_text: string;
}
