
export interface PortadaResponse {
    banner_section: BannerSection;
    principal_section: PrincipalSection;
    hotel_section: HotelSection[];
    services_section: ServicesSection;
    commets_section: CommetsSection;
  }

  export interface BannerSection {
    title: string;
    image: string;
  }

  export interface CommetsSection {
    title: string;
    text_redirection: string;
  }

  export interface HotelSection {
    title: string;
    icon: string;
  }

  export interface PrincipalSection {
    title: string;
    description: string;
    image: string;
  }

  export interface ServicesSection {
    image_1: string;
    image_2: string;
    title: string;
    items: PrincipalSection[];
  }