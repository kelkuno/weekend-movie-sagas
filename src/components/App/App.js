import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';


function App() {
  return (
    <Router> 
      <div className="App">
        <h1>The Movies Saga!</h1>
        <nav>
          <ul>
            <li><Link to='/add-movie'>Add a new movie!</Link></li>
          </ul>
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/add-movie">
          <AddMovie />
        </Route>
        </div>
      </Router>
  );
}


export default App;
