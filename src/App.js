import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from  "./components/Header";
import MainPage from './components/MainPage';
import Finished from './components/Finished';
import WatchList from './components/Watchlist';


import { GlobalStateProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
    <Router>
      <Header />

      <Routes>
        <Route  path="/watchlist"
        element = {<WatchList/>}
        />

        <Route path='/main'
        element = {<MainPage/>}
        />

        <Route path='/finished'
         element = {<Finished/>}
         />
         

      </Routes>
    </Router>
    </GlobalStateProvider>
  );
}

export default App;
