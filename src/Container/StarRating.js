import React from 'react'
import {connect} from 'react-redux'
import {RatingFilter} from '../Actions/action'

// ★ ☆

const Stars = (props) => {
 let stars =[]
for (let i=0;i<5;i++){
    if ( i < props.rate){
        stars.push(<span key={i} onClick={() => props.RatingFilter(i+1)} >★</span>)
    }
    else {
        stars.push(<span key={i} onClick={() => props.RatingFilter(i+1)} >☆</span>)
    }
}

    return (
    <div className="movieRating">{stars}</div>
    )
}


export default connect(null,{RatingFilter})(Stars)