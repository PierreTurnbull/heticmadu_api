import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TagDTO {
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    tag: string;
}