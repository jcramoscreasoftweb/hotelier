export interface CalificacionResponse {
  form_calificacion: FormCalificacion;
  popup:             Popup;
}

export interface FormCalificacion {
  title:            string;
  subtitle:         string;
  label_comentario: string;
  form_boton:       string;
}

export interface Popup {
  title:    string;
  subtitle: string;
}
