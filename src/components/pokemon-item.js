import React, { useState } from "react";
import styled from "styled-components";
import Title from "./title";
import Subtitle from "./subtitle";
import PokemonImage from "./pokemon-image";
import PokemonMove from "./pokemon-move";
import PokemonType from "./pokemon-type";
import Loading from "./loading";
import shortid from "shortid";

const Sprite = styled.img`
  width: 15em;
  height: 15em;
`;

export const catchProbability = (value) => {
  let catchStatus = false;
  if (value > 50) {
    catchStatus = true;
  }
  return catchStatus;
};

const PokemonItem = (props) => {
  const [isCatched, setIsCatched] = useState(false);
  const [catchFail, setCatchFail] = useState(false);
  const [customName, setCustomName] = useState("");
  const [loadingCatch, setLoadingCatch] = useState(false);

  const { detailPokemon, catchPokemon } = props;

  /**
   * catchPokemon
   * catch pokemon process
   */
  const catchingPokemon = () => {
    setLoadingCatch(true);
    setTimeout(() => {
      const prob = Math.random() * 100;
      const catched = catchProbability(prob);
      setIsCatched(catched);
      // console.log(`${prob} ${catched}`)
      if (!catched) {
        setCatchFail(true);
      }
      setLoadingCatch(false);
    }, 3000);
  };

  const addingToMyPokemon = (monster) => {
    const name = customName !== "" ? customName : monster.name;
    monster.customName = name;
    if (isCatched) {
      catchPokemon(monster);
      setIsCatched(false);
    }
  };
  const imageUrl = `https://img.pokemondb.net/artwork/${props.detailPokemon.name}.jpg`;

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-5">
            <h5>{props.id}</h5>
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              // onLoad={() => this.setState({ imageLoading: false })}
              // onError={() => this.setState({ toManyRequests: true })}
              src={imageUrl}
            />
            <Title text={props.detailPokemon.name} />
            <div className="col-5 text-center card-body mx-auto mt-2">
              <Subtitle text="Types" />
              {props.detailPokemon.types.map((typeItem) => (
                <PokemonType
                  key={shortid.generate()}
                  type={typeItem.type.name}
                />
              ))}
            </div>
            <div className="col-5 text-center card-body mx-auto mt-2">
              <Subtitle text="Moves" />
              {props.detailPokemon.moves.map((moveItem) => (
                <PokemonMove
                  key={shortid.generate()}
                  move={moveItem.move.name}
                />
              ))}
            </div>
            {!isCatched && !catchFail && (
              <button
                disabled={loadingCatch}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => catchingPokemon()}
              >
                Catch
              </button>
            )}
            <div className="card-body">
              {loadingCatch && (
                <div
                  style={{
                    position: `relative`,
                    width: `100%`,
                    height: `100px`,
                  }}
                >
                  <Loading />
                </div>
              )}
              {isCatched && (
                <>
                  <div className="w-full p-3">
                    <h2 className="font-mono">
                      Yeay, you catched the monster...!
                    </h2>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Your Monster Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Good Monster"
                      onChange={(e) => setCustomName(e.target.value)}
                    />
                    <p className="text-black-500 text-xs italic">
                      Please fill with your custom monster name.
                    </p>
                  </div>
                  <div className="w-full">
                    <button
                      className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4"
                      onClick={() => addingToMyPokemon(detailPokemon)}
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
              {catchFail && (
                <div className="w-full p-3">
                  <h2 className="font-mono">Oops, you failed...!</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
