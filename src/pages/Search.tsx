import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonsData } from '../app/reducers/getPokemonsData';
import PokemonCardGrid from '../components/PokemonCardGrid';

const Search = () => {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector( ({pokemon}) => pokemon);

  useEffect(()=>{
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if(allPokemon){
      const copyPokemons = [...allPokemon];
      const randomPokemonsId = copyPokemons.sort(() => Math.random()-Math.random()).slice(0, 20);
      console.log('randomPokemonsId: ', randomPokemonsId);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  const getPokemon = async (value: string) => {
    if(value.length){
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonsData(pokemons!));
    } else {
      // get random 20 Pokemon
      const copyPokemons = [...(allPokemon as [])];
      const randomPokemonsId = copyPokemons.sort(() => Math.random()-Math.random()).slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  };

  return (
    <>
      <div className="search">
        <input 
          onChange={(e) => getPokemon(e.target.value)}
          type="text" 
          className="pokemon-searchbar" 
          placeholder="Search Pokemon"
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  )
}

export default Wrapper(Search);