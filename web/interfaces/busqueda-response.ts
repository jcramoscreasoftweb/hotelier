export interface BusquedaResponse {
  id_tp_room:      number;
  name:            string;
  description:     string;
  image:           string;
  images_carrusel: ImagesCarrusel[];
  check_in:        string;
  check_out:       string;
  bed:             string;
  dimensions:      string;
  num_adults:      number;
  num_children:    number;
  price_web:       number;
  price_hotel:     number;
  price_booking:   number;
  price_expedia:   number;
  services:        Service[];
}

export interface ImagesCarrusel {
  url: string;
}

export interface Service {
  name:  string;
  image: string;
}

