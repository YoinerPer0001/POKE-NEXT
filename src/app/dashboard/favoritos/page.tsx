
import { PokGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
    title: "favoritos",
    description: "Pokemons favoritos",
}

export default async function FavoritesPage() {

  return (

    <div className="p-2 flex flex-col">

      <h1 className="text-center mb-4 text-5xl">Favoritos</h1>

      <PokGrid pokemonsList={[]} />

    </div>
  );
}