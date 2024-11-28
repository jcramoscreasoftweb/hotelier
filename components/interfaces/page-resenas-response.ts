export interface PageResenaResponse {
  principal_section: PrincipalSection;
  filter_select:     Select;
  order_select:      Select;
}

export interface Select {
  title:   string;
  options: Option[];
}

export interface Option {
  name:  string;
  value: string;
}

export interface PrincipalSection {
  title:    string;
  image:    string;
  subtitle: string;
}
