
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonsCard } from './PokemonsCard'

interface props {
    pokemonsList: SimplePokemon[]
}

export const PokGrid = ({pokemonsList}:props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemonsList.map(pokemon =>
                <PokemonsCard  key={pokemon.id} pokemon={pokemon}/>
            )}
        </div>
    )
}
