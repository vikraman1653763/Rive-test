// src/App.jsx
import Chars from "./components/char.jsx";
import RiveAnimation from "./components/ham.jsx";
import PlayBtn from "./components/play.jsx";
import Tests from "./components/test.jsx";

const App = () => (
  <div>
    <h1>Rive </h1>
    <RiveAnimation />
    <div style={{height:'200px',width:'200px'}}>
    <PlayBtn/>
    <Chars/>
    <Tests/>
    </div>
  </div>
);

export default App;
