import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { AccommodationService } from '../services/accommodation.service';
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
} from '../services/accommodation.dto';
import { Accommodation } from '../models/accommodation.model';
import { Host, HostModel } from '../models/host.model';
import { Destination, DestinationModel } from '../models/destination.model';

// eslint-disable-next-line no-unused-vars
@Resolver((of) => Accommodation)
export class AccommodationResolver {
  // eslint-disable-next-line no-unused-vars
  constructor(private accommodationService: AccommodationService) {
    this.accommodationService = new AccommodationService();
  }

  @FieldResolver(() => Host)
  async host(@Root() data: { _doc: Accommodation }) {
    const h = await HostModel.findById(data._doc.host);
    return h;
  }

  @FieldResolver(() => Destination)
  async destination(@Root() data: { _doc: Accommodation }) {
    const d = await DestinationModel.findById(data._doc.destination);
    return d;
  }

  @Query(() => QueryAllAccommodationsResponse, {
    description: 'Query all accommodations response',
  })
  async accommodations(): Promise<QueryAllAccommodationsResponse> {
    return this.accommodationService.queryAllAccommodations();
  }

  @Query(() => QueryAccommodationByIdResponse, {
    description: 'Query accommodation by ID response',
  })
  async accommodation(
    @Arg('input') input: QueryAccommodationByIdInput
  ): Promise<QueryAccommodationByIdResponse> {
    return this.accommodationService.queryAccommodationById(input);
  }

  @Query(() => QueryAllAccommodationsByDestinationIDResponse, {
    description: 'Query all accommodations by destination ID response',
  })
  async accommodationsByDestinationId(
    @Arg('input') input: QueryAllAccommodationsByDestinationIDInput
  ): Promise<QueryAllAccommodationsByDestinationIDResponse> {
    return this.accommodationService.queryAllAccommodationsByDestinationID(
      input
    );
  }

  @Query(() => QueryAllAccommodationsByHostIDResponse, {
    description: 'Query all accommodations by host ID response',
  })
  async accommodationsByHostId(
    @Arg('input') input: QueryAllAccommodationsByHostIDInput
  ): Promise<QueryAllAccommodationsByHostIDResponse> {
    return this.accommodationService.queryAllAccommodationsByHostID(input);
  }

  @Mutation(() => CreateAccommodationResponse, {
    description: 'Create accommodation response',
  })
  async createAccommodation(
    @Arg('input') input: CreateAccommodationInput
  ): Promise<CreateAccommodationResponse> {
    return this.accommodationService.createAccommodation(input);
  }

  @Mutation(() => UpdateAccommodationResponse, {
    description: 'Update accommodation response',
  })
  async updateAccommodation(
    @Arg('input') input: UpdateAccommodationInput
  ): Promise<UpdateAccommodationResponse> {
    return this.accommodationService.updateAccommodation(input);
  }

  @Mutation(() => DeleteAccommodationResponse, {
    description: 'Delete accommodation response',
  })
  async deleteAccommodation(
    @Arg('input') input: DeleteAccommodationInput
  ): Promise<DeleteAccommodationResponse> {
    return this.accommodationService.deleteAccommodation(input);
  }
}
