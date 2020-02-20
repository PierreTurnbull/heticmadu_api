import { TagModel } from './tag.interface';

export interface PoiModel {
    id?: number;
    name?: string;
    longitude?: number;
    latitude?: number;
    address?: string;
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
    tags?: TagModel[]
}

