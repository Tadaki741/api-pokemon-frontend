import PokemonInfo from "./components/PokemonInfo";
import usePokemonData from "./hooks/usePokemonData";

function App() {
  const { isLoading, isError, data } = usePokemonData();

  return (
    <>
      <div className="text-center py-6 mb-5">
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-300 drop-shadow-lg">
          Pokemon Quantity App
        </h1>
      </div>

      <div className="md:container md:mx-auto mb-5 px-2">
        {isLoading && (
          <div className="text-center">
            <strong>Loading...</strong>
          </div>
        )}
        {isError && (
          <div className="text-center">
            <strong>Error!</strong>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {data &&
            data.length > 0 &&
            data.map((p, i) => <PokemonInfo key={i} pokemon={p} />)}
        </div>
      </div>
      
    </>
  );
}

export default App;
