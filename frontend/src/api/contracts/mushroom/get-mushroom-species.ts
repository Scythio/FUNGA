import {AxiosResponse} from 'axios';
import {api} from '../..';
import MushroomSpeciesDTO from '../../models/mushroom-species-dto.model';

interface GetMushroomSpeciesRequest {}

export type GetMushroomSpeciesResponse = AxiosResponse<string>;

const getMushroomList =
  ({}: GetMushroomSpeciesRequest): Promise<GetMushroomSpeciesResponse> => {
    const response = api.get('mushroom-list');
    return response;
  };

export default getMushroomList;
