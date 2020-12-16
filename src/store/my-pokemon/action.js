import { 
  CATCH_POKEMON_SUCCESS,
  REMOVE_POKEMON_SUCCESS
} from './actionType'

export const catchingPokmeon = data => {
  return (dispatch) => {
    dispatch(catchPokemonSuccess(data))
  }
}

const catchPokemonSuccess = data => ({
  type: CATCH_POKEMON_SUCCESS,
  payload: data
})

export const removingPokemon = data => {
  return (dispatch) => {
    dispatch(removePokemonSuccess(data))
  }
}

const removePokemonSuccess = data => ({
  type: REMOVE_POKEMON_SUCCESS,
  payload: data
})