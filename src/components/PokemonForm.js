import { SaveIcon } from "@heroicons/react/outline";
import { useState } from "react";
import useCreatePokemon from "../hooks/useCreatePokemon";

export default function PokemonForm() {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    image_front: "",
    image_back: "",
  });


  const mutationCreatePokemon = useCreatePokemon();

  const handleSubmit = e => {
    e.preventDefault();

    mutationCreatePokemon.mutate(newPokemon);


    setNewPokemon({
        name: '',
        image_front: '',
        image_back: '',
    });


  };

  return (
    <form className="inline-grid" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-md border-slate-300 p-2 mb-2"
        placeholder="enter name..."
        value={newPokemon.name}
        required
        onChange={(e) => setNewPokemon({ ...newPokemon, name: e.target.value })}
      ></input>

      <input
        type="text"
        className="rounded-md border-slate-300 p-2 mb-2"
        placeholder="enter front image url..."
        value={newPokemon.image_front}
        required
        onChange={(e) =>
          setNewPokemon({ ...newPokemon, image_front: e.target.value })
        }
      ></input>

      <input
        type="text"
        className="rounded-md border-slate-300 p-2 mb-2"
        placeholder="enter image back url..."
        value={newPokemon.image_back}
        required
        onChange={(e) =>
          setNewPokemon({ ...newPokemon, image_back: e.target.value })
        }
      ></input>

      <button
        type="submit"
        className="flex items-center justify-center rounded-lg bg-cyan-200 hover:bg-cyan-300 px-4 py-2 text-slate-700 mt-4"
      >
        <SaveIcon className="h-5 w-5 mr-1"></SaveIcon>
        <span>save</span>
      </button>
    </form>
  );
}
