import { useCount } from "./useCount";

export const Count = ()=>{
    const {count, increase, decrease, restart} = useCount();

    return(
        <div>
            {count}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={restart}>Restart</button>
        </div>
    )
}