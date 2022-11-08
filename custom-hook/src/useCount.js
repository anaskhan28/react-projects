import {useState} from 'react';

export const useCount = (inital = 0)=>{
    const [count, setCount] = useState(inital);

    const increase = () =>{
        setCount((prev)=>prev+1)
    }
    const decrease = ()=>{
        setCount((prev)=>prev-1)
    }
    const restart = () =>{
        setCount(0);
    };
    return {count, increase, decrease, restart};
};
