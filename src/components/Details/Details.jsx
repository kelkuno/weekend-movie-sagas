import {useHistory} from 'react-router-dom';
function Details () {

    const history = useHistory();

    const handleBackBtn = () => {
        console.log('back btn clicked');
        history.push('/');

    }//end of handleBackBtn

    return (
        <>
        <button onClick={handleBackBtn}>Back to list!</button>
        </>
    );

}//end of Details component

export default Details