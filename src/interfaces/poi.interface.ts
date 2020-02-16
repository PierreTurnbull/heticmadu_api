export interface PoiModel {
    id?: number;
    name?: string;
    longitude?: number;
    latitude?: number;
    adress?: string;
    postalCode?: number;
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
    schedule?: string;
    category?: string;
    type?: string;
    averagePrice?: string;
    glutenFree?: boolean;
    bio?: string;
    disabledAccess?: boolean;
    greenScore?: number;
    phoneNumber?: string;
    logo?: string;
    description?: string;
    status?: string;
}
