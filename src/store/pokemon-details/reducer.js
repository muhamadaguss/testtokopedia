
import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR } from './actionType'

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  detail: {}
}

const detailReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
        detail: {}
      }
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: action.payload
      }
    case FETCH_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }  
    default: 
      return state
  }
}

export default detailReducer