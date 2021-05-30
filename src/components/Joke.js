import React,{useState} from 'react'; 
import up from "../img/up.png";
import down from "../img/down.png";
import style from "./joke.module.css";


function Joke(props) {
    const [count , setCount] = useState(0)
    return (
        <div className={style.container}>
            <div className={style.cont1}>
                <img className={style.img} onClick={()=>{setCount(count + 1)}} src = {up} alt ="up" />
                <div className={style.count}><h1>{count}</h1></div>
                <img  className={style.imgr} onClick={()=>{setCount(count - 1)}} src = {down} alt = "down" />
            </div>
            <div className={style.cont2}><p>{props.joke}</p></div>
            <div></div>
        </div>
    )
}

export default Joke;