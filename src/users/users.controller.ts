import { UsersService } from './users.service';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userService.getAllUser();
      return response.status(200).json({
        status: 'OK!',
        message: 'Susccessfully fetch data',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'OK!',
        message: 'Intenal Server Error!',
      });
    }
  }
}
