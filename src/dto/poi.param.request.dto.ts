import { ApiProperty } from '@nestjs/swagger';

export class PoiParamRequestDto {
    @ApiProperty()
    id: number;
}