import React, { useState, useEffect, useCallback } from "react";
import UserList from "./components/UsersList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://localhost:7200/api/User/GetAll", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const usersData = await response.json();

      const transformedUsers = usersData.results.map((userData) => {
        return {
          id: userData.userId,
          name: userData.name,
          userType: userData.userType,
          email: userData.email,
          phone: userData.phone,
        };
      });
      setUsers(transformedUsers);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  let content = <p>Found no Users.</p>;

  if (users.length > 0) {
    content = <UserList users={users} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchUsersHandler}>Fetch Users</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
