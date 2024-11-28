export interface PageBusquedaResponse {
  labels_search:       LabelsSearch;
  card_room:           CardRoom;
  popup_servicios:     PopupServicios;
  popup_sin_resultado: PopupSinResultado;
  popup_information:   PopupInformation;
  popup_confirmation:  PopupConfirmation;
}

export interface CardRoom {
  title_price:          string;
  tp_payment_1:         string;
  payment1_description: string;
  tp_payment_2:         string;
  payment2_description: string;
  label_others:         string;
  label_adults:         string;
  label_children:       string;
  label_checkin:        string;
  label_checkout:       string;
  label_night:          string;
  label_see_more:       string;
  label_service:        string;
  boton:                string;
}

export interface LabelsSearch {
  date_in:      string;
  date_out:     string;
  guests:       string;
  boton:        string;
  box_adutls:   string;
  box_children: string;
  box_boton:    string;
  subtitle:     string;
  total:        string;
}

export interface PopupConfirmation {
  title: string;
}

export interface PopupInformation {
  title:                   string;
  subtitle:                string;
  label_email:             string;
  label_policies:          string;
  label_policies_redirect: string;
  boton:                   string;
}

export interface PopupServicios {
  title:    string;
  subtitle: string;
  boton:    string;
}

export interface PopupSinResultado {
  title:    string;
  subtitle: string;
}
