import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJWTPayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');

    const isPassWordMatch = await compare(password, user.password);
    if (!isPassWordMatch)
      throw new UnauthorizedException('Invalid credentials');

    return { id: user.id, email: user.email };
  }

  login(userId: number) {
    const payload: AuthJWTPayload = { sub: userId };
    return this.jwtService.sign(payload);
  }
}
