import { AccommodationModel } from '../models/accommodation.model';
import { DestinationModel } from '../models/destination.model';
import { HostModel } from '../models/host.model';
import {
  CreateAccommodationInput,
  CreateAccommodationResponse,
  DeleteAccommodationInput,
  DeleteAccommodationResponse,
  QueryAccommodationByIdInput,
  QueryAccommodationByIdResponse,
  QueryAllAccommodationsByDestinationIDInput,
  QueryAllAccommodationsByDestinationIDResponse,
  QueryAllAccommodationsByHostIDInput,
  QueryAllAccommodationsByHostIDResponse,
  QueryAllAccommodationsResponse,
  UpdateAccommodationInput,
  UpdateAccommodationResponse,
} from './accommodation.dto';

export class AccommodationService {
  async queryAllAccommodationsByDestinationID(
    input: QueryAllAccommodationsByDestinationIDInput
  ): Promise<QueryAllAccommodationsByDestinationIDResponse> {
    const accommodations = await AccommodationModel.find({
      destination: input.destinationId,
    });

    return {
      data: accommodations,
      success: true,
    };
  }

  async queryAccommodationById(
    input: QueryAccommodationByIdInput
  ): Promise<QueryAccommodationByIdResponse> {
    const accommodation = await AccommodationModel.findById(input.id);

    return {
      data: accommodation,
      success: !!accommodation,
    };
  }

  async queryAllAccommodations(): Promise<QueryAllAccommodationsResponse> {
    const accommodations = await AccommodationModel.find();

    return {
      data: accommodations,
      success: true,
    };
  }

  async queryAllAccommodationsByHostID(
    input: QueryAllAccommodationsByHostIDInput
  ): Promise<QueryAllAccommodationsByHostIDResponse> {
    const accommodations = await AccommodationModel.find({
      host: input.hostId,
    });

    return {
      data: accommodations,
      success: true,
    };
  }

  async createAccommodation(
    input: CreateAccommodationInput
  ): Promise<CreateAccommodationResponse> {
    const d = await DestinationModel.findById(input.destinationId);
    if (!d) {
      throw new Error('Destination not found');
    }

    // TODO: Check if host is the owner of the accommodation
    // TODO: Get the Host ID from the Auth Token
    const h = await HostModel.findById(input.hostId);
    if (!h) {
      throw new Error('Host not found');
    }

    const accommodation = await AccommodationModel.create({
      accommodationType: input.accommodationType,
      amenities: input.amenities,
      availabilityEndDate: input.availabilityEndDate,
      availabilityStartDate: input.availabilityStartDate,
      capacity: input.capacity,
      description: input.description,
      destination: d,
      host: h,
      image: input.image,
      pricePerNight: input.pricePerNight,
      title: input.title,
    });

    return {
      data: accommodation,
      created: true,
    };
  }

  async updateAccommodation(
    input: UpdateAccommodationInput
  ): Promise<UpdateAccommodationResponse> {
    // TODO: Check if host is the owner of the accommodation through the Auth Token

    const accommodation = await AccommodationModel.findByIdAndUpdate(
      input.id,
      input.data,
      { new: true }
    );

    return {
      data: accommodation,
      updated: !!accommodation,
    };
  }

  async deleteAccommodation(
    input: DeleteAccommodationInput
  ): Promise<DeleteAccommodationResponse> {
    // TODO: Check if host is the owner of the accommodation through the Auth Token
    const accommodation = await AccommodationModel.findByIdAndDelete(input.id);

    return {
      data: accommodation,
      deleted: !!accommodation,
    };
  }
}
