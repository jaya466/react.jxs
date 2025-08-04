import "./style.css";
import { useState, useEffect } from "react";

function About() {
  const [users, setUsers] = useState([]); // Fix: use array instead of object
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false); // Fix: turn off loading after data fetched
      } catch (error) {
        console.log('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <main>
      <h1>About Us</h1>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}> 
              name: <strong> {user.name}</strong>
              email: {user.email}

              </li>
            ))}
          </ul>
        )
      }
    </main>
  );
}

export default About;
