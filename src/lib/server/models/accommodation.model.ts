import {
  getModelForClass,
  ModelOptions,
  prop,
  type Ref,
  Severity,
} from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { Destination } from './destination.model';
import { Host } from './host.model';

@ObjectType('Accommodation', { description: "Accommodation's model" })
@ModelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Accommodation {
  @Field(() => ID)
  readonly _id!: string;

  @Field()
  @prop({ required: true })
  title!: string;

  @Field()
  @prop({ required: true })
  description!: string;

  @Field()
  @prop({ default: 'default.jpeg', required: true })
  image!: string;

  @Field()
  @prop({ required: true })
  pricePerNight!: number;

  @Field()
  @prop({ required: true })
  accommodationType!: string;

  @Field(() => [String])
  @prop({ required: true })
  amenities!: string[];

  @Field()
  @prop({ required: true, min: 1 })
  capacity!: number;

  @Field()
  @prop({ required: true })
  availabilityStartDate!: Date;

  @Field()
  @prop({ required: true })
  availabilityEndDate!: Date;

  @Field(() => Destination)
  @prop({ ref: () => Destination, required: true })
  destination!: Ref<Destination>;

  @Field(() => Host)
  @prop({ ref: () => Host, required: true })
  host!: Ref<Host>;
}

export const AccommodationModel =
  getModelForClass<typeof Accommodation>(Accommodation);
