import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJWTPayload } from './types/auth-jwtPayload';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokeConfig: ConfigType<typeof refreshJwtConfig>,
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
    const access_token = this.jwtService.sign(payload);
    const refresh_token = this.jwtService.sign(payload, this.refreshTokeConfig);

    return { id: userId, access_token, refresh_token };
  }

  refreshToken(userId: number) {
    const payload: AuthJWTPayload = { sub: userId };
    const access_token = this.jwtService.sign(payload);
    return { id: userId, access_token };
  }
}
