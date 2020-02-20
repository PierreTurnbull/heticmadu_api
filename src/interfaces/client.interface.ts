import { ClientPositionModel } from "src/clientPositions/clientPosition.interface";

export interface ClientModel {
    id?: number;
    name: string;
    address: string;
    rse: string;
    numberOfEmployees: number;
    logo: string;
    perimeter: number;
    status: string;
    type: string;
    creationDate: string;
    clientPositions: ClientPositionModel[]
}
