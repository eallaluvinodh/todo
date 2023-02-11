import React, { useState } from "react";
import "./App.css";
import FoodItems from "./FoodItems";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "2f6c891f";
  const YOUR_APP_KEY = "33c47b58cc1db4e4af38804e2e194e08	";
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free
      `)
      .then((response) => response.json())
      .then((data) => setData(data.hits));
    console.log(data);
    console.log(search);
  };
  return (
    <div className="App">
      <div class="bg1"></div>
      <h3>Food Recipe App</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <FoodItems data={data} />
    </div>
  );
};

export default App;
