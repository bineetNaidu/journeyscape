import { DestinationModel } from '../models/destination.model';
import {
  CreateDestinationInput,
  CreateDestinationResponse,
  DeleteDestinationInput,
  DeleteDestinationResponse,
  QueryDestinationInput,
  QueryDestinationResponse,
  QueryDestinationsResponse,
  UpdateDestinationInput,
  UpdateDestinationResponse,
} from '../schemas/destination.schema';

export class DestinationService {
  async queryDestinationById(
    input: QueryDestinationInput
  ): Promise<QueryDestinationResponse> {
    const d = await DestinationModel.findById(input.id);

    if (!d) {
      return {
        success: false,
        data: null,
      };
    }

    return {
      success: true,
      data: d,
    };
  }

  async queryAllDestinations(): Promise<QueryDestinationsResponse> {
    const d = await DestinationModel.find({}).exec();

    return {
      data: d,
      success: true,
    };
  }

  async createDestination(
    input: CreateDestinationInput
  ): Promise<CreateDestinationResponse> {
    const d = await DestinationModel.create(input);
    return {
      created: true,
      data: d,
    };
  }

  async updateDestination(
    input: UpdateDestinationInput
  ): Promise<UpdateDestinationResponse> {
    const d = await DestinationModel.findByIdAndUpdate(input.id, input.data, {
      new: true,
    });

    return {
      updated: !!d,
      data: d,
    };
  }

  async deleteDestination(
    input: DeleteDestinationInput
  ): Promise<DeleteDestinationResponse> {
    const d = await DestinationModel.findByIdAndDelete(input.id);

    return {
      deleted: !!d,
      data: d,
    };
  }
}
