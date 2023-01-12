import axios, {Axios} from 'axios';
import getBerries from './contracts/berries/get-berries';

const pokemonApi: Axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const API = {
  berries: {
    getBerries,
  },
};

export {pokemonApi};

export default API;
