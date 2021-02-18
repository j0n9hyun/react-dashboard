const users = [
  { id: 'kim@test.com', pw: '123' },
  { id: 'lee@test.com', pw: '456' },
  { id: 'park@test.com', pw: '789' },
];

export function signIn({ id, pw }) {
  const user = users.find((user) => user.email === id && user.password === pw);
  if (user === undefined) throw new Error();
  return user;
}
