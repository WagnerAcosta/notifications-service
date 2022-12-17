import { IsNotEmpty, IsUUID, Length } from 'class-validator';

//Classe de validação
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 200)
  content: string;

  @IsNotEmpty()
  category: string;
}
