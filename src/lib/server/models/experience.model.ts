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

@ObjectType('Experience', { description: "Experience's model" })
@ModelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Experience {
  @Field(() => ID)
  readonly _id!: string;

  @Field()
  @prop({ required: true })
  title!: string;

  @Field()
  @prop({ required: true })
  description!: string;

  @Field()
  @prop({ required: true, default: 'default.jpeg' })
  image!: string;

  @Field()
  @prop({ required: true })
  price!: number;

  @Field()
  @prop({ required: true })
  duration!: string;

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

export const ExperienceModel = getModelForClass<typeof Experience>(Experience);
