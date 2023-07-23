import {
  getModelForClass,
  ModelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType('Destinations', { description: 'Destinations model' })
@ModelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Destination {
  @Field(() => ID)
  readonly _id!: string;

  @Field()
  @prop({ required: true, unique: true })
  name!: string;

  @Field()
  @prop({ required: true })
  description!: string;

  @Field()
  @prop({ required: true })
  country!: string;

  @Field()
  @prop({ required: true })
  city!: string;

  @Field()
  @prop({ default: 'default.jpeg' })
  image!: string;

  @Field()
  @prop({ required: true })
  latitude!: number;

  @Field()
  @prop({ required: true })
  longitude!: number;
}

export const DestinationModel =
  getModelForClass<typeof Destination>(Destination);
