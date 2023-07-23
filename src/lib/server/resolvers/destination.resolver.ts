import { Arg, Mutation, Query, Resolver } from 'type-graphql';
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
import { DestinationService } from '../services/destination.service';

@Resolver()
export class DestinationResolver {
  // eslint-disable-next-line no-unused-vars
  constructor(private destinationService: DestinationService) {
    this.destinationService = new DestinationService();
  }

  @Query(() => QueryDestinationsResponse)
  async destinations(): Promise<QueryDestinationsResponse> {
    return this.destinationService.queryAllDestinations();
  }

  @Query(() => QueryDestinationResponse)
  async destination(
    @Arg('input') input: QueryDestinationInput
  ): Promise<QueryDestinationResponse> {
    return this.destinationService.queryDestinationById(input);
  }

  @Mutation(() => CreateDestinationResponse)
  async createDestination(
    @Arg('input') input: CreateDestinationInput
  ): Promise<CreateDestinationResponse> {
    return this.destinationService.createDestination(input);
  }

  @Mutation(() => UpdateDestinationResponse)
  async updateDestination(
    @Arg('input') input: UpdateDestinationInput
  ): Promise<UpdateDestinationResponse> {
    return this.destinationService.updateDestination(input);
  }

  @Mutation(() => DeleteDestinationResponse)
  async deleteDestination(
    @Arg('input') input: DeleteDestinationInput
  ): Promise<DeleteDestinationResponse> {
    return this.destinationService.deleteDestination(input);
  }
}
