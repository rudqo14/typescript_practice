import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
}

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => {
//     return <div> {name} {mark} </div>;
// };

function Greetings({ name, mark, optional }: GreetingsProps) {
    return (
        <div>
            Hello, {name} {mark}
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;