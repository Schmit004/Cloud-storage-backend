import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test@mail.ru' })
  email: string;

  @ApiProperty({  default: 'Adam Smith' })
  fullName: string;

  @ApiProperty({ default: '123456' })
  password: string;
}
