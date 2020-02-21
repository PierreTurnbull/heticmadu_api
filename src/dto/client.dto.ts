import { ApiProperty } from '@nestjs/swagger';
import { ClientPositionModel } from './client.position.dto';

export class ClientModel {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    rse: string;

    @ApiProperty()
    numberOfEmployees: number;

    @ApiProperty()
    picture: string;

    @ApiProperty()
    perimeter: number;

    @ApiProperty()
    status: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    creationDate: string;

    @ApiProperty()
    clientPositions: ClientPositionModel[]
}
