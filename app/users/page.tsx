import React from "react";

// defining the shape of our user object
interface User {
  id: number;
  name: string;
}

// server component
const UsersPage = async () => {
  // fetch for placeholder users
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: 'no-store'}
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
