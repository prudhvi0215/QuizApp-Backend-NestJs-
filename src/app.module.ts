import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin-prudhvi:Quiz123@cluster0.nlgylru.mongodb.net/Credentials',
    ),
    UserModule,
    AuthModule,
    AdminModule,
  ],
})
export class AppModule {}
