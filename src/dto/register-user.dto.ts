import { IsNumber, IsString, Length } from 'class-validator';

export class RegisterUsersDto {
  @IsNumber()
  nik: number;
  @IsString()
  @Length(5, 10)
  name: string;
  @IsString()
  @Length(5, 10)
  telp: string;
  @IsString()
  @Length(5, 10)
  username: string;
  @IsString()
  @Length(6, 12)
  password: string;
}
