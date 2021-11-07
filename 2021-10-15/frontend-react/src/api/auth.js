// todo
export async function signup({email, password, passwordConfirmation, firstName, lastName}) {
  await fetch('http://localhost:8081/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({email, password, passwordConfirmation, firstName, lastName}),
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export async function login({email, password}) {
  const res = await fetch('http://localhost:8081/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}
