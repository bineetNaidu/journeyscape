import { DestinationModel } from '../models/destination.model';
import { ExperienceModel } from '../models/experience.model';
import { MyCtx } from '../types';
import { getAuth } from '@clerk/nextjs/server';
import {
  QueryAllExperiencesByDestinationIDInput,
  QueryAllExperiencesByDestinationIDResponse,
  QueryExperienceByIdInput,
  QueryExperienceByIdResponse,
  QueryAllExperiencesResponse,
  QueryAllExperiencesByHostIDInput,
  QueryAllExperiencesByHostIDResponse,
  CreateExperienceInput,
  CreateExperienceResponse,
  UpdateExperienceInput,
  UpdateExperienceResponse,
  DeleteExperienceInput,
  DeleteExperienceResponse,
} from './experience.dto';
import { HostModel } from '../models/host.model';

export class ExperienceService {
  async queryAllExperiencesByDestinationID(
    input: QueryAllExperiencesByDestinationIDInput
  ): Promise<QueryAllExperiencesByDestinationIDResponse> {
    const experiences = await ExperienceModel.find({
      destination: input.destinationId,
    });

    return {
      data: experiences,
      success: true,
    };
  }

  async queryExperienceById(
    input: QueryExperienceByIdInput
  ): Promise<QueryExperienceByIdResponse> {
    const experience = await ExperienceModel.findById(input.id);

    return {
      data: experience,
      success: !!experience,
    };
  }

  async queryAllExperiences(): Promise<QueryAllExperiencesResponse> {
    const experiences = await ExperienceModel.find();

    return {
      data: experiences,
      success: true,
    };
  }

  async queryAllExperiencesByHostID(
    input: QueryAllExperiencesByHostIDInput
  ): Promise<QueryAllExperiencesByHostIDResponse> {
    const experiences = await ExperienceModel.find({
      host: input.hostId,
    });

    return {
      data: experiences,
      success: true,
    };
  }

  async createExperience(
    input: CreateExperienceInput,
    ctx: MyCtx
  ): Promise<CreateExperienceResponse> {
    const { userId } = getAuth(ctx.req);

    const host = await HostModel.findOne({ clerkId: userId });

    const destination = await DestinationModel.findById(input.destinationId);
    if (!destination) {
      throw new Error('Destination not found');
    }

    const experience = await ExperienceModel.create({
      destination,
      host,
      availabilityEndDate: input.availabilityEndDate,
      availabilityStartDate: input.availabilityStartDate,
      description: input.description,
      image: input.image,
      pricePerPerson: input.pricePerPerson,
      title: input.title,
    });

    return {
      data: experience,
      created: true,
    };
  }

  async updateExperience(
    input: UpdateExperienceInput,
    ctx: MyCtx
  ): Promise<UpdateExperienceResponse> {
    const { userId: clerkId } = getAuth(ctx.req);

    const experience = await ExperienceModel.findOneAndUpdate(
      { _id: input.id, host: { clerkId } },
      {
        $set: input.data,
      },
      { new: true }
    );

    return {
      data: experience,
      updated: !!experience,
    };
  }

  async deleteExperience(
    input: DeleteExperienceInput,
    ctx: MyCtx
  ): Promise<DeleteExperienceResponse> {
    const { userId: clerkId } = getAuth(ctx.req);

    const experience = await ExperienceModel.findOneAndDelete({
      _id: input.id,
      host: { clerkId },
    });

    return {
      data: experience,
      deleted: !!experience,
    };
  }
}
