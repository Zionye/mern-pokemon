import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatsType, pokemonTypeInterface } from "../../utils/types";
import { RootState } from '../store';
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { getUserPokemons } from "./getUserPokemons";

export const addPokemonToList = createAsyncThunk(
  "pokemon/addPokemon", 
  async (
    pokemon: {
      id: number;
      name: string;
      types: pokemonTypeInterface[] | string[];
      stats?: pokemonStatsType[]; 
    }, 
    {getState, dispatch}
  ) => {
    try {
      console.log('getState(): ----', getState());
      const {
        app: { userInfo },
        pokemon: { userPokemons },
      } = getState() as RootState;

      if(!userInfo?.email){
        return dispatch(setToast("Please login in order to add pokemon to your collection."))
      }

      const index = userPokemons.findIndex((userPokemon) => {
        return userPokemon.name === pokemon.name;
      });
      if(index === -1){
        let types: string[] = [];

        if (!pokemon.stats) {
          pokemon.types.forEach((type: any) =>
            types.push(Object.keys(type).toString())
          );
        } else {
          types = pokemon.types as string[];
        }

        await addDoc(pokemonListRef, {
          pokemon: { id: pokemon.id, name: pokemon.name, types },
          email: userInfo.email,
        });
        
        await dispatch(getUserPokemons());
        dispatch(setToast(`${pokemon.name} added to your collection.`));
        
      } else {
        dispatch(setToast(`${pokemon.name} already part of your collection.`));
      }

    } catch (error) {
      console.log('error: ', error);
    }
  }
);