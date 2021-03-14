import React, { useEffect, useState } from "react";
import "./App.css";
import * as contentful from "contentful";

const accessToken = "yIwMebq5Mhdp3PQbS-h4_T7RWP5LsprSLjnobyn22Ws";
const SPACE_ID = "90qprjmlum8i";
function App() {
  const [entries, setEntries] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState("");
  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken,
    });
    client.getEntries().then((r: any) => {
      const entries = r.items.map((i: any) => i.fields);
      const groups = entries.reduce((acc: string[], currentValue: any) => {
        if (acc.indexOf(currentValue.group) < 0) {
          return [...acc, currentValue.group];
        }
        return acc;
      }, []);
      setGroups(groups);
      setEntries(entries);
      console.log(entries);
      setActiveGroup(groups[0]);
    });
  }, []);
  return (
    <div className="App">
      {groups.map((group: any) => (
        <div
          onClick={() => setActiveGroup(group)}
          className={`link ${group} ${activeGroup === group ? "active" : ""}`}
        >
          {group}
        </div>
      ))}
      {entries
        .filter((entry: any) => entry.group === activeGroup)
        .map((entry: any) => (
          <img
            style={{ width: "100%" }}
            alt="fuck"
            src={entry.image.fields.file.url}
          ></img>
        ))}
    </div>
  );
}

export default App;
