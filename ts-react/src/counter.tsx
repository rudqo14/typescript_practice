import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);
    const onIncrese = () => setCount(count + 1);
    const onDecrese = () => setCount(count - 1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrese}>+1</button>
                <button onClick={onDecrese}>-1</button>
            </div>
        </div>
    )
}

export default Counter;