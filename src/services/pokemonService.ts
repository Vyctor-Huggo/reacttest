import api from '../api/api';

export async function getPokemons(limit = 800, offset = 0) {
  const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
}

export async function getPokemonDetails(name: string) {
  const response = await api.get(`pokemon/${name}`);
  return response.data;
}
