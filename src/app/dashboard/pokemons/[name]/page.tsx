import { Metadata } from 'next';
import { DataPokemon } from '../../../../pokemons/interfaces/pokemonDetails';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PokemonsResponse } from '@/pokemons';
interface props {

    params: { name: string }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {

    try {

        const { name } = await fetchData(params.name);

        return {
            title: "Details " + name,
            description: 'petro'
        }

    } catch (e) {
        return {
            title: "Details ",
            description: 'petro'
        }
    }

}


//snipet gsp solo se ejecuta en build time

export async function generateStaticParams() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
    const respuesta: PokemonsResponse = await fetch(url)
        .then(response => response.json())

    const res = respuesta.results.map(pok => ({
        name: pok.name,
    }))
    return res.map(({name}) => ({ name: name }));
}



const fetchData = async (name: string): Promise<DataPokemon> => {

    try {

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            // cache: 'force-cache'
            next: {
                revalidate: 60 * 60 * 30 * 6 // validar cada 6 meses
            }
        })
            .then(datos => datos.json())

        return data;

    } catch (err) {
        notFound();
    }

}

export default async function PokemonDetailsPage({ params }: props) {
    const { name } = params;
    const dataPokemon = await fetchData(name);

    return (
        <div className='p-2 flex flex-grow items-center justify-center'>
            <div className="flex mt-5 flex-col items-center text-slate-800">
                <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
                    <div className="mt-2 mb-8 w-full">
                        <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                            #{dataPokemon.id} {dataPokemon.name}
                        </h1>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={dataPokemon.sprites.other?.dream_world.front_default ?? ''}
                                width={150}
                                height={150}
                                alt={`Imagen del pokemon ${dataPokemon.name}`}
                                className="mb-5"
                            />


                            <div className="flex flex-wrap">
                                {
                                    dataPokemon.moves.map(move => (
                                        <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 px-2 w-full">

                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                            <p className="text-sm text-gray-600">Types</p>
                            <div className="text-base font-medium text-navy-700 flex">
                                {
                                    dataPokemon.types.map(type => (
                                        <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                            <p className="text-sm text-gray-600">Peso</p>
                            <span className="text-base font-medium text-navy-700 flex">
                                {
                                    dataPokemon.weight
                                }
                            </span>
                        </div>

                        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                            <p className="text-sm text-gray-600">Regular Sprites</p>
                            <div className="flex justify-center">

                                <Image
                                    src={dataPokemon.sprites.front_default}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${dataPokemon.name}`}
                                />

                                <Image
                                    src={dataPokemon.sprites.back_default}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${dataPokemon.name}`}
                                />

                            </div>
                        </div>

                        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                            <p className="text-sm text-gray-600">Shiny Sprites</p>
                            <div className="flex justify-center">

                                <Image
                                    src={dataPokemon.sprites.front_shiny}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${dataPokemon.name}`}
                                />

                                <Image
                                    src={dataPokemon.sprites.back_shiny}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${dataPokemon.name}`}
                                />

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}