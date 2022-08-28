import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
    yield takeEvery('GET_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* addMovie(action){
    try{
        yield axios.post(`/api/movie/`, action.payload);
    } catch {
        console.error('error in add movie');
    }

}//end addMovie

function* fetchGenres(action) {
    try{
        const genres= yield axios.get(`/api/genre/${action.payload}`);
        console.log(genres.data);
        yield put({type: 'SET_GENRES', payload: genres.data})
    } catch {
        console.error('error in fetch genres');
    }

}//end of fetchGenres


function* fetchMovie(action){
    try{
        const movie = yield axios.get(`/api/movie/${action.payload}`);
        console.log(movie.data);
        yield put({type: 'SET_MOVIE', payload: movie.data});
    } catch {
        console.log('get movie detail error');
    }
}//end of fetchMovie

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }    
}//end fetchAllMovies

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movie details returned from the server
const movie = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        case 'CLEAR':
            return [];
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
