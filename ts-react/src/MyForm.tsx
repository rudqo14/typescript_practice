import React, { useState } from 'react';

type MyformProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};

function Myform({ onSubmit }: MyformProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: '',
        })
    }

    return(
        <form onSubmit={handleSumbit}>
            <input name="name" value={name} onChange={onChange}></input>
            <input name="description" value={description} onChange={onChange}></input>
            <button type="submit">등록</button>
        </form>
    )
}

export default Myform;