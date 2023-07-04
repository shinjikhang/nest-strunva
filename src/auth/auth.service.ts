import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.user_id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
