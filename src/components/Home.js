import React from "react";
import { username, city } from "../data/user"; // Import data

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <p>Welcome {username} from {city}!</p>
    </div>
  );
}

export default Home;
