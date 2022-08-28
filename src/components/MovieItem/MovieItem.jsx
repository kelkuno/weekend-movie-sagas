import { useHistory } from 'react-router-dom';
import './MovieItem.css'


function MovieItem ({movie}) {

    const history = useHistory();
    

    const handleDetail = () => {
        console.log('handle detail button');
        console.log('movie.id', movie.id)
        history.push(`/details/${movie.id}`);
    }//end of handleDetail function

    return(
        <div className="movie-card" onClick={handleDetail}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    );

} //end of MovieItem

export default MovieItem;