import { Field, InputType, ObjectType } from 'type-graphql';
import { Accommodation } from '../models/accommodation.model';
import {
  IsArray,
  IsDate,
  IsDefined,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  Max,
} from 'class-validator';

@ObjectType('QueryAllAccommodationsByDestinationIDResponse', {
  description: 'Query all accommodations by destination ID response',
})
export class QueryAllAccommodationsByDestinationIDResponse {
  @Field(() => [Accommodation])
  data!: Accommodation[];

  @Field()
  success!: boolean;
}

@InputType('QueryAllAccommodationsByDestinationIDInput', {
  description: 'Query all accommodations by destination ID input',
})
export class QueryAllAccommodationsByDestinationIDInput {
  @IsMongoId()
  @IsDefined()
  @Field()
  destinationId!: string;
}

/* ------------------------------------- */

@ObjectType('QueryAccommodationByIdResponse', {
  description: 'Query accommodation by ID response',
})
export class QueryAccommodationByIdResponse {
  @Field(() => Accommodation, { nullable: true })
  data!: Accommodation | null;

  @Field()
  success!: boolean;
}

@InputType('QueryAccommodationByIdInput', {
  description: 'Query accommodation by ID input',
})
export class QueryAccommodationByIdInput {
  @IsMongoId()
  @IsDefined()
  @Field()
  id!: string;
}

/* ------------------------------------- */

@ObjectType('QueryAllAccommodationsResponse', {
  description: 'Query all accommodations response',
})
export class QueryAllAccommodationsResponse extends QueryAllAccommodationsByDestinationIDResponse {}

/* ------------------------------------- */

@ObjectType('QueryAllAccommodationsByHostIDResponse', {
  description: 'Query all accommodations by host ID response',
})
export class QueryAllAccommodationsByHostIDResponse extends QueryAllAccommodationsByDestinationIDResponse {}

@InputType('QueryAllAccommodationsByHostIDInput', {
  description: 'Query all accommodations by host ID input',
})
export class QueryAllAccommodationsByHostIDInput {
  @IsMongoId()
  @IsDefined()
  @Field()
  hostId!: string;
}

/* ------------------------------------- */

@ObjectType('CreateAccommodationResponse', {
  description: 'Create accommodation response',
})
export class CreateAccommodationResponse {
  @Field(() => Accommodation)
  data!: Accommodation;

  @Field()
  created!: boolean;
}

// TODO: Add Host ID automatically when creating accommodation w/ auth
@InputType('CreateAccommodationInput', {
  description: 'Create accommodation input',
})
export class CreateAccommodationInput {
  @IsNotEmpty()
  @Field()
  title!: string;

  @Max(1000)
  @IsNotEmpty()
  @Field()
  description!: string;

  @IsNotEmpty()
  @IsUrl()
  @Field()
  image!: string;

  @IsNotEmpty()
  @IsNumber()
  @Field()
  pricePerNight!: number;

  @IsNotEmpty()
  @Field()
  accommodationType!: string;

  @IsNotEmpty()
  @IsArray()
  @Field(() => [String])
  amenities!: string[];

  @IsNotEmpty()
  @IsNumber()
  @Field()
  capacity!: number;

  @IsNotEmpty()
  @IsDate()
  @Field()
  availabilityStartDate!: Date;

  @IsNotEmpty()
  @IsDate()
  @Field()
  availabilityEndDate!: Date;

  @IsMongoId()
  @IsDefined()
  @Field()
  destinationId!: string;

  @IsMongoId()
  @IsDefined()
  @Field()
  hostId!: string;
}

/* ------------------------------------- */

@ObjectType('UpdateAccommodationResponse', {
  description: 'Update accommodation response',
})
export class UpdateAccommodationResponse {
  @Field(() => Accommodation, { nullable: true })
  data!: Accommodation | null;

  @Field()
  updated!: boolean;
}

@InputType()
class UpdateAccommodationData {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  pricePerNight?: number;

  @Field({ nullable: true })
  accommodationType?: string;

  @Field(() => [String], { nullable: true })
  amenities?: string[];

  @Field({ nullable: true })
  capacity?: number;

  @Field({ nullable: true })
  availabilityStartDate?: Date;

  @Field({ nullable: true })
  availabilityEndDate?: Date;
}
@InputType('UpdateAccommodationInput', {
  description: 'Update accommodation input',
})
export class UpdateAccommodationInput {
  @IsMongoId()
  @IsDefined()
  @Field()
  id!: string;

  @Field(() => UpdateAccommodationData)
  data!: UpdateAccommodationData;
}

/* ------------------------------------- */

@ObjectType('DeleteAccommodationResponse', {
  description: 'Delete accommodation response',
})
export class DeleteAccommodationResponse {
  @Field(() => Accommodation, { nullable: true })
  data!: Accommodation | null;

  @Field()
  deleted!: boolean;
}

@InputType('DeleteAccommodationInput', {
  description: 'Delete accommodation input',
})
export class DeleteAccommodationInput {
  @IsMongoId()
  @IsDefined()
  @Field()
  id!: string;
}
