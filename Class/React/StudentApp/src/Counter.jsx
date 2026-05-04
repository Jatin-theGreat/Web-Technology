import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [rCount, setRcount] = useState(10);
    //count - current value
    //setCount - update function
    return(
        <>
        <h2>Button Component</h2>
        <h2>Count : {count}</h2>
        <h2>Rcount : {rCount}</h2>
        <button onClick={() => setCount(count + 1)}>
            Increase
        </button>
        <button onClick={() => setRcount(rCount - 1)}>Reverse count</button>

        </>
    );
}
export default Counter;