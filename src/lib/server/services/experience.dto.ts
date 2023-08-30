import { Field, InputType, ObjectType } from 'type-graphql';
import { Experience } from '../models/experience.model';
import {
  IsMongoId,
  IsNotEmpty,
  IsDate,
  IsString,
  MaxLength,
  IsNumber,
} from 'class-validator';

@InputType()
export class QueryAllExperiencesByDestinationIDInput {
  @IsNotEmpty()
  @IsMongoId()
  @Field()
  destinationId!: string;
}

@ObjectType()
export class QueryAllExperiencesByDestinationIDResponse {
  @Field()
  success!: boolean;

  @Field(() => [Experience])
  data!: Experience[];
}

@InputType()
export class QueryExperienceByIdInput {
  @IsNotEmpty()
  @IsMongoId()
  @Field()
  id!: string;
}

@ObjectType()
export class QueryExperienceByIdResponse {
  @Field()
  success!: boolean;

  @Field(() => Experience, { nullable: true })
  data!: Experience | null;
}

@ObjectType()
export class QueryAllExperiencesResponse {
  @Field()
  success!: boolean;

  @Field(() => [Experience])
  data!: Experience[];
}

@InputType()
export class QueryAllExperiencesByHostIDInput {
  @IsNotEmpty()
  @IsMongoId()
  @Field()
  hostId!: string;
}

@ObjectType()
export class QueryAllExperiencesByHostIDResponse {
  @Field()
  success!: boolean;

  @Field(() => [Experience])
  data!: Experience[];
}

@InputType()
export class CreateExperienceInput {
  @IsNotEmpty()
  @IsString()
  @MaxLength(80)
  @Field()
  title!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(450)
  @Field()
  description!: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  image!: string;

  @IsNotEmpty()
  @IsNumber()
  @Field()
  pricePerPerson!: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  duration!: string;

  @IsNotEmpty()
  @IsDate()
  @Field()
  availabilityStartDate!: Date;

  @IsNotEmpty()
  @IsDate()
  @Field()
  availabilityEndDate!: Date;

  @IsNotEmpty()
  @IsMongoId()
  @Field()
  destinationId!: string;
}

@ObjectType()
export class CreateExperienceResponse {
  @Field()
  created!: boolean;

  @Field(() => Experience)
  data!: Experience;
}

@InputType()
export class UpdateExperienceData {
  @IsString()
  @MaxLength(80)
  @Field({ nullable: true })
  title?: string;

  @IsString()
  @MaxLength(450)
  @Field({ nullable: true })
  description?: string;

  @IsString()
  @Field({ nullable: true })
  image?: string;

  @IsNumber()
  @Field({ nullable: true })
  pricePerPerson?: number;

  @IsString()
  @Field({ nullable: true })
  duration?: string;

  @IsDate()
  @Field({ nullable: true })
  availabilityStartDate?: Date;

  @IsDate()
  @Field({ nullable: true })
  availabilityEndDate?: Date;

  @IsMongoId()
  @Field({ nullable: true })
  destinationId?: string;
}

@InputType()
export class UpdateExperienceInput {
  @IsNotEmpty()
  @IsMongoId()
  @Field()
  id!: string;

  @Field(() => UpdateExperienceData)
  data!: UpdateExperienceData;
}

@ObjectType()
export class UpdateExperienceResponse {
  @Field()
  updated!: boolean;

  @Field(() => Experience, { nullable: true })
  data!: Experience | null;
}

export class DeleteExperienceInput {
  @Field()
  id!: string;
}

@ObjectType()
export class DeleteExperienceResponse {
  @Field()
  deleted!: boolean;

  @Field(() => Experience, { nullable: true })
  data!: Experience | null;
}
