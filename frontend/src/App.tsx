import { useState } from "react";

function App() {

  const [pokemon, setPokemon] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const fetchPokemon = async (name: string) => {

    try {

      setLoading(true);

      setError("");

      const response = await fetch(
        `http://localhost:8080/api/pokemon/${name}`
      );

      if (!response.ok) {
        throw new Error("Pokemon not found");
      }

      const data = await response.json();

      setPokemon(data);

    } catch (err) {

      setError("Pokemon not found");

      setPokemon(null);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#dbeafe",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        Pokemon Pokedex
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >

        <input
          type="text"
          placeholder="Enter Pokemon Name"
          id="pokemonInput"
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "15px"
          }}
        />

        <button
          onClick={() => {

            const input =
              document.getElementById(
                "pokemonInput"
              ) as HTMLInputElement;

            fetchPokemon(input.value);
          }}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          Search
        </button>

        {loading && <p>Loading...</p>}

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        {pokemon && (

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              width: "350px",
              backgroundColor: "white"
            }}
          >

            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="150"
            />

            <h2
              style={{
                textTransform: "capitalize"
              }}
            >
              {pokemon.name}
            </h2>

            <p>
              <strong>Height:</strong>
              {" "}
              {pokemon.height}
            </p>

            <p>
              <strong>Weight:</strong>
              {" "}
              {pokemon.weight}
            </p>

            <h3>Types</h3>

            <ul>

              {pokemon.types.map((t: any) => (

                <li key={t.type.name}>
                  {t.type.name}
                </li>

              ))}

            </ul>

            <h3>Abilities</h3>

            <ul>

              {pokemon.abilities.map((a: any) => (

                <li key={a.ability.name}>
                  {a.ability.name}
                </li>

              ))}

            </ul>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;