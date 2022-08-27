import {useHistory, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function Details () {

    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store=>store.movie);

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = () => {
        dispatch({ type: 'FETCH_MOVIE', payload: params.id});
    }

    const handleBackBtn = () => {
        console.log('back btn clicked');
        dispatch({type:'CLEAR'});
        history.push('/');
    }//end of handleBackBtn

    console.log('params', params.id);
    console.log('movie:', movie);
    console.log('movie:', movie[0]);


    return (
        <>
        <div>
            {movie[0] && <img src={movie[0].poster} alt={movie[0].title}/>}
            {movie[0] && <p>{movie[0].title}</p>}
            {movie[0] && <p>{movie[0].description}</p>}
        </div>
        <button onClick={handleBackBtn}>Back to list!</button>
        </>
    );

}//end of Details component

export default Details