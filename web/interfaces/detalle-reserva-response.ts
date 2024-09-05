export interface DetalleReservaResponse {
  title_page:       string;
  info_reserva:     InfoReserva;
  info_form:        InfoForm;
  info_advertencia: string;
  popup:            Popup;
}

export interface InfoForm {
  title:                   string;
  label_lastname_1:        string;
  label_lastname_2:        string;
  label_names:             string;
  label_tpdoc:             string;
  label_email:             string;
  label_phone:             string;
  label_time:              string;
  label_comments:          string;
  label_policies:          string;
  label_policies_redirect: string;
  label_boton_pagar:       string;
}

export interface InfoReserva {
  title:                   string;
  label_datein:            string;
  label_dateout:           string;
  label_people:            string;
  label_time:              string;
  label_days:              string;
  label_precio:            string;
  label_tp_payment1:       string;
  label_tp_payment2:       string;
  label_servicios:         string;
  label_cupon:             string;
  label_cupon_placeholder: string;
  label_cupon_boton:       string;
}

export interface Popup {
  title:    string;
  subtitle: string;
}
