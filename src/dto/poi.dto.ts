import { TagDTO } from './tag.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PoiDTO {
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    longitude: number;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    address: string;

    @ApiProperty()
    postalCode: number;

    @ApiProperty()
    monday: string;

    @ApiProperty()
    tuesday: string;

    @ApiProperty()
    wednesday: string;

    @ApiProperty()
    thursday: string;

    @ApiProperty()
    friday: string;

    @ApiProperty()
    saturday: string;

    @ApiProperty()
    sunday: string;

    @ApiProperty()
    schedule: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    averagePrice: string;

    @ApiProperty()
    glutenFree: boolean;

    @ApiProperty()
    bio: string;

    @ApiProperty()
    disabledAccess: boolean;

    @ApiProperty()
    greenScore: number;

    @ApiProperty()
    phoneNumber: string;

    @ApiPropertyOptional()
    picture: string;

    @ApiPropertyOptional()
    description: string;

    @ApiProperty()
    status: string;

    @ApiPropertyOptional({ type: TagDTO, isArray: true })
    tags: TagDTO[]
}

