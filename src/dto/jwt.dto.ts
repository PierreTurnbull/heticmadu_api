import { ApiProperty } from '@nestjs/swagger';

export class JWTPayloadDTO {
    @ApiProperty()
    user: any;
}
