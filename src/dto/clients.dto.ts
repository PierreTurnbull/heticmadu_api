import { ApiProperty } from '@nestjs/swagger';
import { ClientDTO } from './client.dto';

export class ClientsDTO {
    @ApiProperty({ type: ClientDTO, isArray: true })
    clients: ClientDTO[];
}
