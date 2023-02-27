import { useState } from "react";

export type CounterProps = {
    defaultCount : number;
    description : string
}

export default function Counter({ defaultCount, description }: CounterProps){
    const [count, setCount] = useState(defaultCount);

    return (
        <>
            <h2>
                DESC: {description} - DC {defaultCount}
            </h2>
            <button onClick={()=> setCount(count - 1)}>-</button>
            Current Count: {count}
            <button onClick={()=>setTimeout(()=> setCount(count + 1),200)}>+</button> 
        </>
    )

}