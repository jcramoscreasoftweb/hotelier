
  export interface FooterResponse {
    column_1: Column[];
    column_2: Column[];
    column_3: Column[];
    column_4: Column;
    rights: String;
}

export interface Column {
  name: string;
  link: string;
}