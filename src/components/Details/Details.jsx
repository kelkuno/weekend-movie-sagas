import {useHistory, useParams} from 'react-router-dom';


function Details () {

    const history = useHistory();
    const params = useParams();

    const handleBackBtn = () => {
        console.log('back btn clicked');
        history.push('/');
    }//end of handleBackBtn

    console.log('params', params.id);

    return (
        <>
        <button onClick={handleBackBtn}>Back to list!</button>
        </>
    );

}//end of Details component

export default Details