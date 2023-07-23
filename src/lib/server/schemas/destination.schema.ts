import {
  IsNotEmpty,
  IsUrl,
  MaxLength,
  MinLength,
  IsLongitude,
  IsLatitude,
  IsMongoId,
} from 'class-validator';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Destination } from '../models/destination.model';

@InputType('UpdateDestinationInputData', {
  description: 'Update Destination Input Data',
})
class UpdateDestinationData {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  longitude?: number;
}

@InputType('UpdateDestinationInput', {
  description: 'Update Destination Input Schema',
})
export class UpdateDestinationInput {
  @Field()
  @IsMongoId({ message: 'Id must be a valid MongoId' })
  @IsNotEmpty({ message: 'Id is required' })
  id!: string;

  @Field(() => UpdateDestinationData)
  data!: UpdateDestinationData;
}

@ObjectType('UpdateDestinationResponse', {
  description: 'Update Destination Response',
})
export class UpdateDestinationResponse {
  @Field()
  updated!: boolean;

  @Field(() => Destination, { nullable: true })
  data!: Destination | null;
}

@InputType('CreateDestinationInput', {
  description: 'Create Destination Input Schema',
})
export class CreateDestinationInput {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  name!: string;

  @Field()
  @IsNotEmpty({ message: 'Description is required' })
  @MinLength(10, { message: 'Description must be at least 10 characters' })
  @MaxLength(1024, { message: 'Description must be at most 1024 characters' })
  description!: string;

  @Field()
  @IsNotEmpty({ message: 'Country is required' })
  country!: string;

  @Field()
  @IsNotEmpty({ message: 'City is required' })
  city!: string;

  @Field()
  @IsUrl({}, { message: 'Image must be a valid URL' })
  image!: string;

  @Field()
  @IsNotEmpty({ message: 'Latitude is required' })
  @IsLatitude({ message: 'Latitude must be a valid latitude coordinate' })
  latitude!: number;

  @Field()
  @IsNotEmpty({ message: 'Longitude is required' })
  @IsLongitude({ message: 'Longitude must be a valid longitude coordinate' })
  longitude!: number;
}

@ObjectType('CreateDestinationResponse', {
  description: 'Create Destination Response',
})
export class CreateDestinationResponse {
  @Field()
  created!: boolean;

  @Field(() => Destination, { nullable: true })
  data!: Destination | null;
}

@ObjectType('QueryDestinationResponse', {
  description: 'Query a Destination Response by ID',
})
export class QueryDestinationResponse {
  @Field()
  success!: boolean;

  @Field(() => Destination, { nullable: true })
  data!: Destination | null;
}

@ObjectType('QueryDestinationsResponse', {
  description: 'Query All Destinations Response',
})
export class QueryDestinationsResponse {
  @Field()
  success!: boolean;

  @Field(() => [Destination])
  data!: Destination[];
}

@InputType('QueryDestinationInput', {
  description: 'Query Destination Input Schema',
})
export class QueryDestinationInput {
  @Field()
  @IsMongoId({ message: 'Id must be a valid MongoId' })
  @IsNotEmpty({ message: 'Id is required' })
  id!: string;
}

@InputType('DeleteDestinationInput', {
  description: 'Delete Destination By ID, Input Schema',
})
export class DeleteDestinationInput extends QueryDestinationInput {}

@ObjectType('DeleteDestinationResponse', {
  description: 'Delete Destination By ID, Response Schema',
})
export class DeleteDestinationResponse {
  @Field()
  deleted!: boolean;

  @Field(() => Destination, { nullable: true })
  data!: Destination | null;
}
