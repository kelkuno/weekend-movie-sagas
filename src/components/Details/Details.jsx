import {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function Details () {

    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie);
    
    useEffect(()=>{
        getMovie();
    }, []);

    const getMovie = () => {
        dispatch({
            type: 'GET_MOVIE',
            payload: params.id
        })

    }//end of getMovie

    const handleBackBtn = () => {
        console.log('back btn clicked');
        history.push('/');
    }//end of handleBackBtn

    console.log('params', params.id);
    console.log('movie info back', movie);

    return (
        <>
        <div>
            {/* <img src={movie[0].poster}/> */}
            <p>{movie[0].title}</p>
            <p>{movie[0].description}</p>
            <img src={movie[0].poster} alt={movie[0].title}/>
        </div>
        <button onClick={handleBackBtn}>Back to list!</button>
        </>
    );

}//end of Details component

export default Details