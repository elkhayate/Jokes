import axios from "axios";
import React,{useState} from 'react';
import style from "./app.module.css";

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
            <button onClick={getJoke}>Get Jokes</button>
      </div>
      <div className={style.list}>
          {Jokes && Joke}
      </div>
    </div>
  )
}
export default App;