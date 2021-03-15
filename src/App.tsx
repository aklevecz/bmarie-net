import { useEffect, useState } from "react";
import "./App.css";
import * as contentful from "contentful";
import Header from "./Header";
import Menu from "./Menu";
import Entries from "./Entries";

const accessToken = "yIwMebq5Mhdp3PQbS-h4_T7RWP5LsprSLjnobyn22Ws";
const SPACE_ID = "90qprjmlum8i";
function App() {
  const [entries, setEntries] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken,
    });
    client.getEntries().then((r: any) => {
      const entries = r.items.map((i: any) => i.fields);
      console.log(r);
      const groups = entries.reduce((acc: string[], currentValue: any) => {
        if (acc.indexOf(currentValue.group) < 0) {
          return [...acc, currentValue.group];
        }
        return acc;
      }, []);
      setGroups(groups);
      setEntries(entries);
      setActiveGroup(groups[0]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    setLoading(true);
    // eslint-disable-next-line
  }, [activeGroup]);

  // Maybe using an active entries array will force the proper rerenders
  return (
    <div className="App">
      <Header />
      <Menu
        groups={groups}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
      />
      {loading && <div>loading...</div>}
      <Entries
        loading={loading}
        entries={entries}
        activeGroup={activeGroup}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
