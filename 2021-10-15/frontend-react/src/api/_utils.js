export function authorization(token) {
  return {
    Authorization: `Bearer ${token}`
  }
}