import { ApiProperty } from '@nestjs/swagger';

export class ClientPositionDTO {
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
