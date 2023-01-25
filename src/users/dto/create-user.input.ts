import { InputType, Field, ObjectType, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class CreateUserDTO {
  @Field(() => ID)
  id: string;

  @Field()
  readonly firstname: string;

  @Field()
  readonly lastname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field()
  readonly createdAt: Date;

  @Field()
  readonly updatedAt: Date;
}
