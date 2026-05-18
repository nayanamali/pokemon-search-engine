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
        background:
          "linear-gradient(to bottom right, #bfdbfe, #dbeafe)",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "42px",
          color: "#1e3a8a"
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
          onKeyDown={(e) => {

            if (e.key === "Enter") {

              const input =
                document.getElementById(
                  "pokemonInput"
                ) as HTMLInputElement;

              fetchPokemon(input.value);
            }
          }}
          style={{
            padding: "14px",
            width: "320px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            fontSize: "16px"
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
            padding: "12px 24px",
            cursor: "pointer",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: "bold",
            marginBottom: "25px",
            fontSize: "16px"
          }}
        >
          Search
        </button>

        {loading && (
          <p
            style={{
              fontSize: "18px"
            }}
          >
            Loading...
          </p>
        )}

        {error && (
          <p
            style={{
              color: "red",
              fontSize: "18px"
            }}
          >
            {error}
          </p>
        )}

        {pokemon && (

          <div
            style={{
              width: "420px",
              borderRadius: "24px",
              padding: "30px",
              background:
                "linear-gradient(to bottom right, #ffffff, #e0f2fe)",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.2)",
              textAlign: "center"
            }}
          >

            <img
              src={
                pokemon.sprites.other[
                  "official-artwork"
                ].front_default
              }
              alt={pokemon.name}
              width="220"
              style={{
                marginBottom: "10px"
              }}
            />

            <h2
              style={{
                textTransform: "capitalize",
                fontSize: "34px",
                color: "#1e3a8a"
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

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px"
              }}
            >

              {pokemon.types.map((t: any) => (

                <span
                  key={t.type.name}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontWeight: "bold"
                  }}
                >
                  {t.type.name}
                </span>

              ))}

            </div>

            <h3>Abilities</h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "20px"
              }}
            >

              {pokemon.abilities.map((a: any) => (

                <li
                  key={a.ability.name}
                  style={{
                    marginBottom: "6px"
                  }}
                >
                  {a.ability.name}
                </li>

              ))}

            </ul>

            <h3>Stats</h3>

            <div>

              {pokemon.stats.map((s: any) => (

                <div
                  key={s.stat.name}
                  style={{
                    marginBottom: "14px",
                    textAlign: "left"
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px"
                    }}
                  >

                    <span
                      style={{
                        textTransform: "capitalize"
                      }}
                    >
                      {s.stat.name}
                    </span>

                    <span>
                      {s.base_stat}
                    </span>

                  </div>

                  <div
                    style={{
                      backgroundColor: "#d1d5db",
                      borderRadius: "10px",
                      overflow: "hidden",
                      height: "12px"
                    }}
                  >

                    <div
                      style={{
                        width: `${s.base_stat}%`,
                        backgroundColor: "#2563eb",
                        height: "100%"
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;