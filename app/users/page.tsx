import React from "react";


// defining the shape of our user object
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// server component
const UsersPage = async () => {
  // fetch for placeholder users
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1 className="text text-center text-3xl font-bold py-10 underline">
        Users
      </h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name:</th>
            <th>Username:</th>
            <th>Email:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
};

export default UsersPage;
