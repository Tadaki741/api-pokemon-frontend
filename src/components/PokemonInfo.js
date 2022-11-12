import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import useUpdatePokemon from "../hooks/useUpdatePokemon";

export default function PokemonInfo({ pokemon }) {
  const mutationUpdatePokemon = useUpdatePokemon();
  const [showDetail, setShowDetail] = useState();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 0) {
      return;
    }

    mutationUpdatePokemon.mutate({ id, quantity: newQuantity });
  };

  return (
    <div
      className="border rounded-lg text-center cursor-pointer transition hover:border-x-cyan-200 hover:border-y-purple-200 hover:shadow-lg"
      onClick={() =>
        setShowDetail(showDetail === pokemon.id ? null : pokemon.id)
      }
    >
      <div className="p-1">
        <img
          className="w-1/2"
          alt="pokemonImage"
          src={pokemon.image_front}
        ></img>
        <img
          className="w-1/2"
          alt="pokemonImage"
          src={pokemon.image_back}
        ></img>
        <h2 className="text-lg font-bold mb-0">Name: {pokemon.name}</h2>
        <small className="block mb-4">Quantity: {pokemon.quantity}</small>
        <h2>Their id: {pokemon.id}</h2>
      </div>
      <div className="border-t flex flex-row">
        <button
          className="flex items-center justify-center w-1/2 py-2 border-r font-bold transition hover:bg-slate-200"
          onClick={() => updateQuantity(pokemon.id, pokemon.quantity + 1)}
        >
          <PlusIcon className="h-3 w-3" />
        </button>
        <button
          className="flex items-center justify-center w-1/2 py-2 font-bold transition hover:bg-slate-200"
          onClick={() => updateQuantity(pokemon.id, pokemon.quantity - 1)}
        >
          <MinusIcon className="h-3 w-3" />
        </button>
      </div>
      {showDetail === pokemon.id ? (
        <div className="absolute top-0 left-0 rounded-lg w-full backdrop-blur-md"></div>
      ) : null}
    </div>
  );
}
