import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('/register')
    register(): string {
        return 'Register Endpoint';
    }

    @Post('/login')
    login():string {
        return 'Login Endpoint';
    }

}
