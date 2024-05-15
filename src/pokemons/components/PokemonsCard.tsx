import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"

interface props {
    pokemon: SimplePokemon
}

export const PokemonsCard = ({ pokemon }: props) => {

    const { id, name } = pokemon;

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        priority={false}
                        className="h-24 w-24 text-white rounded-full mx-auto"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt={name}
                        width={32}
                        height={32} />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <Link href={`/dashboard/pokemons/${name}`}>
                        <div className="mt-5 border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                            <span>More information</span>
                        </div>
                    </Link>
                </div>
                <div className="border-b">
                    <Link href={`/pokemon/${id}`} className="px-4 py-2 hover:bg-gray-100 flex" >

                        <div className="text-red-600">
                            <IoHeartOutline />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Add Favorites
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </Link>

                </div>


            </div>
        </div>
    )
}
