import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import { FaSearch } from "react-icons/fa";
import Header from "./components/Header";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setData(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div className="app">
      <Header data={data} />
      <div className="navbar">
        <div id="subelement">Users</div>
        <div id="subelement">Campaign</div>
        <div id="subelement">Tables</div>
        <div id="subelement">List</div>
        <div id="subelement">Download</div>
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Type to search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      {<Table data={data} query={query} />}
    </div>
  );
}

export default App;
