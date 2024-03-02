// Users.jsx
import React from "react";
import useNavigation from "../hooks/useNavigation";

function Users() {
    const { navigateTo } = useNavigation();

  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => navigateTo("/")}> Назад</button>
    </div>
  );
}

export default Users;