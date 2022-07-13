import Hangman from './Hangman/Hangman';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Hangman />
      </div>
    </div>
  );
}

export default App;
