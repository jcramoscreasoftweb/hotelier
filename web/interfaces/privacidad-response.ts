export interface PrivacidadResponse {
  pincipal_section: PincipalSection;
  first_section:    FirstSection;
}

export interface FirstSection {
  text_1: string;
  text_2: string;
  text_3: string;
  email:  string;
  phone:  string;
  text_4: string;
}

export interface PincipalSection {
  title: string;
  image: string;
}
