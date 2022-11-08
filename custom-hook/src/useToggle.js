import {useState} from 'react';

export const useToggle = (inital = false) =>{
    const [state, setState] = useState(inital);

    const toggle = ()=>{
        setState((prev)=>!prev)
    }
    return [state,toggle]
};
