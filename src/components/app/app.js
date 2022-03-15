import { useState,useEffect,useMemo } from "react";

import Nav from "../nav/nav";
import AppInfo from "../app-info/app-info";
import SeachPanel from "../search-panel/search-panel";
import Cards from "../cards/cards";
import cardsBD from "../../resources/cardsBD";
import menuDB from "../../resources/menuDB";

import "./app.css";
import "../mobile-menu/mobile-menu.css";

function App() {
  const db = cardsBD;
  
  const [data, setData] = useState(db);
  const [term, setTerm] = useState("");

  const cardSeach = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1 || item.text.indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  useEffect(()=>{
    let timeoutId=0;
    timeoutId = setTimeout(()=>{
      onUpdateSearch(term);
    }, 300);
    clearTimeout(timeoutId);
  });
 
  const visibleData= useMemo(()=>{
    return cardSeach(data, term);

  },[data,term])

  return (
    <div>
      <Nav data={menuDB} />
      <AppInfo />
      <section className="flex-container">
        <div className="container">
          <SeachPanel onUpdateSearch={onUpdateSearch} />
          <Cards data={visibleData} />
        </div>
      </section>
    </div>
  );
}

export default App;
