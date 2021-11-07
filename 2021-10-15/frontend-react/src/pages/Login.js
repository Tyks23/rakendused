import {useContext, useRef, useState} from "react";
import {Context} from "../store";
import {loginUser} from "../store/actions";
import api from '../api';

export function Login() {
  const [state, dispatch] = useContext(Context);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const form = {
    email: useRef(),
    password: useRef(),
  }

  const updateField = (e, field) => {
    setData({...data, [field]: e.currentTarget.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await api.auth.login(data);
    dispatch(loginUser(user));
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={form.email}
          onChange={(e) => updateField(e, 'email')}
          type="email"
          placeholder='Email'
        />
        <input
          ref={form.password}
          onChange={(e) => updateField(e, 'password')}
          type="password"
          placeholder='Password'
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}