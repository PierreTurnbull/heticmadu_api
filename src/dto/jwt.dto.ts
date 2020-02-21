import { ApiProperty } from '@nestjs/swagger';

export class JWTPayloadDTO {
    @ApiProperty()
    sub: number;
}
