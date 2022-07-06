import logo from "./logo.svg";
import "./App.css";
import Player1 from "./Components/Player1";
import Player2 from "./Components/Player2";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <h1>Round 1</h1>
      <Player1 />
      <Player2 />

      <button className="btn" onClick={refreshPage}>
        Restart
      </button>
      <iframe
        src="https://giphy.com/embed/l9P7VohdAxjAA"
        width="480"
        height="50"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/fire-fireball-on-l9P7VohdAxjAA"></a>
      </p>
    </div>
  );
}

export default App;
