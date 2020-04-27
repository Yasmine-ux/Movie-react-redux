import { MoviesList } from "../Data/Data";


const initState = {
    MovieListe : MoviesList,
    SearchKey:'',
    rate:1
}
export default function (state = initState, action){
    switch(action.type){
        case 'ADD_MOVIE':
            return {
                ...state,
                MovieListe:[...state.MovieListe, action.payload]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                MovieListe: state.MovieListe.filter((element) => element.id !== action.payload)
            } 
        case 'SEARCH_MOVIE':
            return {
                ...state,
                SearchKey:action.payload
            }
        case 'RATING_FILTER':
            return{
                ...state,
                rate : action.payload
            }    
            case "EDIT_MOVIE":
                return {
                  ...state,moviesList: state.moviesList.map((element) =>
                    element.id === action.payload
                      ? { ...element, edit: !element.edit }
                      : element
                  ),
                };
          
              case "SAVE_MOVIE":
                return {
                  ...state,moviesList: state.moviesList.map((element) =>
                    element.id === action.payload.id
                      ? {
                          ...element,
                          movieName: action.payload.movieName,
                          rating: action.payload.rating,
                          edit: !element.edit,
                        }
                      : element
                  ),
                };
        default: return state    
    }
}