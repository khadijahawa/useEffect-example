import React from "react";
import { useState, useEffect } from "react";

function Example() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, [refresh]);

  return (
    <div>
      {data.map((item) => (
        <li id={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default Example;
