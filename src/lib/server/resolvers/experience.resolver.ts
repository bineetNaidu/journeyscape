/* eslint-disable no-unused-vars */
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../services/experience.service';
import {
  CreateExperienceInput,
  CreateExperienceResponse,
  DeleteExperienceResponse,
  QueryAllExperiencesByDestinationIDInput,
  QueryAllExperiencesByDestinationIDResponse,
  QueryAllExperiencesByHostIDInput,
  QueryAllExperiencesByHostIDResponse,
  QueryAllExperiencesResponse,
  QueryExperienceByIdInput,
  QueryExperienceByIdResponse,
  UpdateExperienceInput,
  UpdateExperienceResponse,
} from '../services/experience.dto';
import type { MyCtx } from '../types';
import { IsAuth } from '../middlewares/auth.middleware';
import { Host, HostModel } from '../models/host.model';
import { Destination, DestinationModel } from '../models/destination.model';

@Resolver((of) => Experience)
export class ExperienceResolver {
  constructor(private experienceService: ExperienceService) {
    this.experienceService = new ExperienceService();
  }

  @FieldResolver(() => Host)
  async host(@Root() data: { _doc: Experience }) {
    const h = await HostModel.findById(data._doc.host);
    return h;
  }

  @FieldResolver(() => Destination)
  async destination(@Root() data: { _doc: Experience }) {
    const d = await DestinationModel.findById(data._doc.destination);
    return d;
  }

  @Query(() => QueryAllExperiencesResponse, {
    description: 'Query all experiences data',
  })
  async experiences(): Promise<QueryAllExperiencesResponse> {
    return this.experienceService.queryAllExperiences();
  }

  @Query(() => QueryExperienceByIdResponse, {
    description: 'Query experience by ID data',
  })
  async experience(
    @Arg('input') input: QueryExperienceByIdInput
  ): Promise<QueryExperienceByIdResponse> {
    return this.experienceService.queryExperienceById(input);
  }

  @Query(() => QueryAllExperiencesByHostIDResponse, {
    description: 'Query all experiences by host data',
  })
  async experiencesByHost(
    @Arg('input') input: QueryAllExperiencesByHostIDInput
  ): Promise<QueryAllExperiencesByHostIDResponse> {
    return this.experienceService.queryAllExperiencesByHostID(input);
  }

  @Query(() => QueryAllExperiencesByDestinationIDResponse, {
    description: 'Query all experiences by destination data',
  })
  async experiencesByDestination(
    @Arg('input') input: QueryAllExperiencesByDestinationIDInput
  ): Promise<QueryAllExperiencesByHostIDResponse> {
    return this.experienceService.queryAllExperiencesByDestinationID(input);
  }

  @UseMiddleware(IsAuth)
  @Mutation(() => CreateExperienceResponse, {
    description: 'Create experience',
  })
  async createExperience(
    @Arg('input') input: CreateExperienceInput,
    @Ctx() ctx: MyCtx
  ): Promise<CreateExperienceResponse> {
    return this.experienceService.createExperience(input, ctx);
  }

  @UseMiddleware(IsAuth)
  @Mutation(() => UpdateExperienceResponse, {
    description: 'Update experience',
  })
  async updateExperience(
    @Arg('input') input: UpdateExperienceInput,
    @Ctx() ctx: MyCtx
  ): Promise<UpdateExperienceResponse> {
    return this.experienceService.updateExperience(input, ctx);
  }

  @UseMiddleware(IsAuth)
  @Mutation(() => DeleteExperienceResponse, {
    description: 'Delete experience',
  })
  async deleteExperience(
    @Arg('input') input: UpdateExperienceInput,
    @Ctx() ctx: MyCtx
  ): Promise<DeleteExperienceResponse> {
    return this.experienceService.deleteExperience(input, ctx);
  }
}
