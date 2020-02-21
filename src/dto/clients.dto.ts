import { ApiProperty } from '@nestjs/swagger';
import { ClientModel } from './client.dto';

export class ClientsModel {
    @ApiProperty()
    clients: ClientModel[];
}
