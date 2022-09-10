import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './components/Login/Login';
import {useMoralis} from 'react-moralis'
import Verify from './components/Verfiy/Verify';

function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/authenticate/:transactionId'
            element = {<Login authenticate={authenticate} isAuthenticated={isAuthenticated} />}
          />
          <Route exact path='/verify-payment/:transactionId' element={<Verify logout={logout} isAuthenticated={isAuthenticated}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
