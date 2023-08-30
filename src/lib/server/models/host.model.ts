import {
  getModelForClass,
  ModelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType('Host', { description: "Host's model" })
@ModelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Host {
  @Field(() => ID)
  readonly _id!: string;

  @Field()
  @prop({ required: true })
  name!: string;

  @Field()
  @prop({ required: true, maxlength: 1000 })
  bio!: string;

  @Field()
  @prop({ default: 'default.jpeg', required: true })
  image!: string;

  @prop({ required: true, unique: true })
  clerkId!: string;
}

export const HostModel = getModelForClass<typeof Host>(Host);
