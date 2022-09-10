import './App.css';
import Login from './components/Login/Login';
import {useMoralis} from 'react-moralis'

function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  return (
    <div className="App">
      {
        !isAuthenticated
          ? <Login authenticate={authenticate} user={user} />
          : <button onClick={logout}>logout</button>
      }
    </div>
  );
}

export default App;
