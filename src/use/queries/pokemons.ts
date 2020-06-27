import useQuery from "../query";

export interface IPokemon {
  name: string;
  imgSrc: string;
}

export default async (): Promise<IPokemon[]> => {
  const result: { pokemon: IPokemon[] } = await useQuery(
    `{ pokemon { name imgSrc } }`
  );

  return result.pokemon;
};
