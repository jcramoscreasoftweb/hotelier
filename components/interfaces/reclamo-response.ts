export interface ReclamoResponse {
  principal_section: SectionBase;
  form_step_1:       FormStep1;
  form_step_2:       FormStep2;
  popup:             SectionBase;
}

export interface FormStep1 {
  title:            string;
  subtitle:         string;
  label_lastname_1: string;
  label_lastname_2: string;
  label_names:      string;
  label_tpdoc:      string;
  label_address:    string;
  label_email:      string;
  label_phone:      string;
  text_btn_next:    string;
}

export interface FormStep2 {
  title:            string;
  subtitle:         string;
  label_date:       string;
  label_tpregister: string;
  label_code:       string;
  label_detail:     string;
  text_conformity:  string;
  label_policies:   string;
  label_policies_redirect: string;
  text_btn_back:    string;
  text_btn_send:    string;
}

export interface SectionBase {
  title:    string;
  subtitle: string;
}
