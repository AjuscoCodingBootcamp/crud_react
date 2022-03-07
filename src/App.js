import logo from './logo.svg';
import './App.css';
import {NewPost} from './components/Firestore/NewPost'
import {ReadingDB} from './components/Firestore/ReadingDB'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>C.R.U.D.</h1>
      <NewPost/>
      <ReadingDB/>
     
    </div>
  );
}

export default App;
