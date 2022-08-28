import {useState} from 'react';
import {useDispatch} from 'react-redux';
import{useHistory} from 'react-router-dom';

function AddMovie() {

    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const newMovie = {title: title, poster: photo, description: description, genre_id: genre}

    const handleTitle = (event) => {
        setTitle(event.target.value);
        console.log(title);
    }//end of handleTitle

    const handlePhoto = (event) => {
        setPhoto(event.target.value);
        console.log(photo);
    }//end of handleTitle

    const handleDescription = (event) => {
        setDescription(event.target.value);
        console.log(description);
    } // end of handleDescription

    const handleGenre = (event) => {
        setGenre(event.target.value);
        console.log(genre);
    } //end of handleGenre


    const handleCancel = () =>{
        console.log('cancel hit');
        history.push('/');
    }

    const handleForm = () => {
        console.log('form submitted');
        dispatch({
            type: 'ADD_MOVIE',
            payload: newMovie
        });
        history.push('/');
    }


    return (
        <>
            <input 
            type="text" 
            placeholder="Movie Title"
            onChange={handleTitle}
            />
            <input 
            type="text" 
            placeholder="Poster Url"
            onChange={handlePhoto}
            />
            <textarea
            placeholder="Movie Description"
            onChange={handleDescription}>
            </textarea>
            <label>Genres:</label>
            <select
            onChange={handleGenre}
            id="genre">
                <option>Choose Genre</option>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>
            <button type="submit" onClick={handleForm}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </>
    );


}//end AddMovie fn.
export default AddMovie;