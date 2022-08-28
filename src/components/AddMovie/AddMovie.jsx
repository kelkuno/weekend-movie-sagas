import {useState} from 'react';

function AddMovie() {

    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

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
            
        </>
    );


}//end AddMovie fn.
export default AddMovie;