import axios from "axios";
import React,{useState} from 'react';
import style from "./app.module.css";
import lol from "./img/lol.png"
function App() {
  const [Jokes , setJokes] = useState([])
  const getJoke = async() => {
    var Jokes = [];
    while (Jokes.length < 10) {
      let res = await axios.get("https://icanhazdadjoke.com/", {headers : {Accept : "application/json"}});
      Jokes.push({id : res.data.id, joke : res.data.joke})
    }
    
    setJokes(Jokes)
  }
  const Joke = Jokes.map((j) => <p>{j.joke}</p>)
  return(
    <div className={style.app}>
      <div className={style.deto}>
          <div className={style.items}>
            <h1 className={style.title}>Joke <span className={style.span}>Generator</span></h1>
            <button className={style.btn} onClick={getJoke}>Get Jokes</button>
          </div>
      </div>
      <div className={style.list}>
          {Jokes && Joke}
      </div>
    </div>
  )
}
export default App;