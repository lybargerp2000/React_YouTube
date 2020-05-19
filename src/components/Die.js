import React, {useState} from 'react';

const Die = (props) => {
    const [value, setDieValue] = useState(0);
    return(
        <div>
           <h1>Die number of sides: {props.numberOfSides}</h1>
           <h1>Die value: {value}</h1>
           <button onClick={() => setDieValue(
               Math.floor(Math.random() * props.numberOfSides) + 1
           )}>
               Roll Die!
           </button>

        </div>
    );
}
export default Die;

    