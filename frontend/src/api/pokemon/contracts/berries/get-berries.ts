import {AxiosResponse} from 'axios';
import {pokemonApi} from '../..';
import {Pagination} from '../../../models/pagination';

interface GetBerriesRequest {}

export type GetBerriesResponse = AxiosResponse<
  Pagination<{name: string; url: string}>
>;

const getBerries = ({}: GetBerriesRequest): Promise<GetBerriesResponse> => {
  const response = pokemonApi.get('berry/');
  return response;
};

export default getBerries;
