export interface MushroomSpeciesDTO {
  model: string;
  pk: number;
  fields: {
    name: string;
    latin_name: string;
    edible: boolean;
    edibility: number;
    description: string | null;
  };
}

export default MushroomSpeciesDTO;
