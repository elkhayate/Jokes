import axios from "axios";
import React,{useState} from 'react';
import style from "./app.module.css";
import Jokee from "./components/Joke";

function App() {
  const [Jokes , setJokes] = useState([])
  const [show, setShow] = useState(false)
  const getJoke = async() => {
    var Jokes = [];
    while (Jokes.length < 10) {
      let res = await axios.get("https://icanhazdadjoke.com/", {headers : {Accept : "application/json"}});
      Jokes.push({id : res.data.id, joke : res.data.joke})
    }
    
    setJokes(Jokes)
    setShow(true)
  }
  const Joke = Jokes.map((j) => <Jokee joke={j.joke}/>)
  return(
    <div className={style.app}>
    
      <div className={style.deto}>
          <div className={style.items}>
            <h1 className={style.title}>Joke <span className={style.span}>Generator</span></h1>
            <button className={style.btn} onClick={getJoke}>Get Jokes</button>
          </div>
      </div>

      <div className={style.list}>
          {show ? Jokes && Joke : (<h1 className={style.wait}>Click the button to get some weird Jokes :)</h1>)}
      </div>
    </div>
  )
}
export default App;

