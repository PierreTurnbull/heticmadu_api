import { ApiProperty } from '@nestjs/swagger';
import { ClientPositionDTO } from './client.position.dto';

export class ClientDTO {
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

    @ApiProperty({ type: ClientPositionDTO, isArray: true })
    clientPositions: ClientPositionDTO[]
}
