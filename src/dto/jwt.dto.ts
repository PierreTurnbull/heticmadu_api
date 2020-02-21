import { ApiProperty } from '@nestjs/swagger';

export class JWTDTO {
    @ApiProperty()
    sub: number;
}
