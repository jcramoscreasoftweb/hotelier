export interface NosotrosResponse {
  pincipal_section: Section;
  mision_section:   Section;
  vision_section:   Section;
  benefits_section: Section[];
}

export interface Section {
  image:       string;
  title:       string;
  description: string;
}
