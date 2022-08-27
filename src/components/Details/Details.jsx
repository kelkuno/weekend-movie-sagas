import {useHistory, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function Details () {

    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store=>store.movie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE', payload: params.id});
    }, []);

    const handleBackBtn = () => {
        console.log('back btn clicked');
        history.push('/');
    }//end of handleBackBtn

    console.log('params', params.id);

    return (
        <>
        <div>
        </div>
        <button onClick={handleBackBtn}>Back to list!</button>
        </>
    );

}//end of Details component

export default Details