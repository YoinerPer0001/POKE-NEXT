
import { PokGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";



const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  const respuesta: PokemonsResponse = await fetch(url)
    .then(response => response.json())
    
  const res = respuesta.results.map(pok => ({
    name: pok.name,
    id: pok.url.split('/').at(-2)!
  }))

  //throw new Error('Something went wrong');
  

  return res

}

export default async function PokemonsPage() {
  const pokemonsList = await getPokemons(151)
  return (

    <div className="p-2 flex flex-col">

      <h1 className="text-center mb-4 text-5xl">Pokemons</h1>

      <PokGrid pokemonsList={pokemonsList} />

    </div>
  );
}