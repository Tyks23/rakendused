import {useRef, useState} from "react";
import api from '../api';

export function SignUp() {
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
  });
  const form = {
    email: useRef(),
    password: useRef(),
    passwordConfirmation: useRef(),
    firstName: useRef(),
    lastName: useRef(),
  }

  const updateField = (e, field) => {
    setData({...data, [field]: e.currentTarget.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.auth.signup(data);
  }

  return (
    <div>
      <h1>Sign up</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={form.firstName}
          onChange={(e) => updateField(e, 'firstName')}
          type="text"
          placeholder='First name'
        />
        <input
          ref={form.lastName}
          onChange={(e) => updateField(e, 'lastName')}
          type="text"
          placeholder='Last name'
        />
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
        <input
          ref={form.passwordConfirmation}
          onChange={(e) => updateField(e, 'passwordConfirmation')}
          type="password"
          placeholder='Confirm password'
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}