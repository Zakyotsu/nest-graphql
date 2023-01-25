import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  
    @Prop()
    firstname: String;
  
    @Prop()
    lastname: String;
  
    @Prop({ required: true, unique: true })
    public email: String;
   
    @Prop()
    public password: String;
  
    @Prop({ type: Date, default: Date.now})
    createdAt: Date;
  
    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

}
export const UserSchema = SchemaFactory.createForClass(User);

export interface UserInterface extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}