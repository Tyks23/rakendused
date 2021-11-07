import {useEffect, useRef, useState} from "react";

export function PostForm ({ edit, onSubmit }) {
    const [data, setData] = useState({
        title: '',
        text: '',
    });
    const form = {
        title: useRef(),
        text: useRef(),
    };

    const updateField = (field) => (e) => {
        setData({
            ...data,
            [field]: e.currentTarget.value,
        })
    }

    const resetForm = () => {
        for(const field in form) {
            form[field].current.value = '';
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await onSubmit(data);
        resetForm();
    };

    useEffect(() => {
      if(edit) setData(edit);
    }, [edit]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={form.title}
                placeholder='title'
                type="text"
                value={data.title}
                onChange={updateField('title')}
                autoFocus
            />
            <input
                ref={form.text}
                placeholder='text'
                type="text"
                value={data.text}
                onChange={updateField('text')}
                autoFocus
            />
          { edit ? (
            <button type="submit">Save</button>
          ) : (
            <button type="submit">Create</button>
          )}
        </form>
    )
}