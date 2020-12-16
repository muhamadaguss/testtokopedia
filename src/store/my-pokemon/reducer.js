import { CATCH_POKEMON_SUCCESS, REMOVE_POKEMON_SUCCESS } from './actionType'

const initialState = {
  list: []
}

const myPokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        list: [...state.list, {...action.payload}]
      }
    case REMOVE_POKEMON_SUCCESS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default myPokemonReducer
