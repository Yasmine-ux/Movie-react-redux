import React from 'react'
import { connect } from 'react-redux'
import { SearchMovie} from '../Actions/action'
import StarRating from './StarRating'
 function Header(props) {
    return (
    <div>
        <input type="text"  placeholder='Enter your movie ...' className='search-box-text' onChange={ (event) => props.SearchMovie(event.target.value)}></input>
        <input type='button' value='Search' className='search-box-btn'></input>
        <StarRating rate={props.rate}/>
     </div>
    )
}
const mapDispatchtoProps = (Dispatch)=>{
    return {
        SearchMovie: (payload)=> Dispatch(SearchMovie(payload))
    }
}
const mapStatetoProps = (state) =>({
        rate: state.rate
})
export default connect(mapStatetoProps, mapDispatchtoProps)(Header)