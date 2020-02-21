import { ApiProperty } from '@nestjs/swagger';

export class ClientPositionModel {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    longitude: string;

    @ApiProperty()
    latitude: string;

    @ApiProperty()
    perimeter: number;

    @ApiProperty()
    clientId: number;
}
