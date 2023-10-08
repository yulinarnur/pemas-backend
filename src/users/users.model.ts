import { Prisma } from '@prisma/client';

export class Users implements Prisma.UsersCreateInput {
  nik: number;
  name: string;
  telp: string;
  username: string;
  password: string;
}
