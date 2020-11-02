import React, { useReducer } from 'react';

type Action= { type: 'INCREASE' } | { type: 'DECREASE' };
//useReducer 사용할때는 Action에 대한 타입을 정리하고, reducer를 구현하면된다.
//dispatch를 통해 액션의 자동완성 및 실수 방지가 된다.

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state +1;
        case 'DECREASE':
            return state -1;
        default:
            throw new Error('Unhandled action type');
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrese = () => dispatch({ type: 'INCREASE'});
    const onDecrese = () => dispatch({ type: 'DECREASE'});

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