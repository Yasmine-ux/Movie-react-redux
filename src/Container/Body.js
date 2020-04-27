import React from "react";
import { connect } from "react-redux";
import { Remove, editMovie, saveMovie} from "../Actions/action";
import { Button, Card } from "react-bootstrap";
import AddMovieModal from "./AddMovieModal";
import StarRating from "./StarRating";
import EditMovieModal from "./EditMovie";
import { Link } from "react-router-dom";

function Body(props) {
    
  return (
    <div className="container">
      <div className="row">

      
        {props.list
          .filter(
            (movie) =>
            movie.rating >= props.rate &&
              movie.movieName
                .toLowerCase()
                .includes(props.keyWord.toLowerCase()) 
                
          )
          .map((element) => (
            <Card key={element.id} className="col-md-3 card-block col-auto">
              <Card.Img variant="top" src={element.img} width="100%" />
              <Card.Body>
                <Card.Title>
                  {element.movieName}
                 
                  <StarRating rate={element.rating}/>
                </Card.Title>
                <Link to={`/description/${element.id}`}>
                        <Button className="btn-dark" >Description</Button>
                </Link>
                
              </Card.Body>
              <Card.Footer>
                <EditMovieModal id={element.id} name={element.movieName} star={element.rating} />
                <Button
                  className="btn-danger"
                  onClick={() => props.Remove(element.id)}
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          ))}
     
      <AddMovieModal />
    </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  list: state.moviesList,
  keyWord: state.keyWord,
  rate: state.rate,
});

export default connect(mapStatetoProps, { Remove, editMovie, saveMovie })(
  Body
);