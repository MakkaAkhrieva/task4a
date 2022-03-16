import { useState,useEffect,useMemo,useCallback } from "react";

import Nav from "../nav/nav";
import AppInfo from "../app-info/app-info";
import SeachPanel from "../search-panel/search-panel";
import Cards from "../cards/cards";
import cardsBD from "../../resources/cardsBD";

import "./app.css";
import "../mobile-menu/mobile-menu.css";


const cardSeach = (items, term) => {
  if (term.length === 0) {
    return items;
  }
  return items.filter((item) => {
    return item.name.indexOf(term) > -1 || item.text.indexOf(term) > -1;
  });
};

function App() {
 
  const [term, setTerm] = useState("");
 
  const visibleData= useMemo(()=>{
    return cardSeach(cardsBD, term);
  },[cardsBD,term])

  return (
    <div>
      <Nav/>
      <AppInfo />
      <section className="flex-container">
        <div className="container">
          <SeachPanel onUpdateSearch={setTerm}/>
          <Cards data={visibleData} />
        </div>
      </section>
    </div>
  );
}

export default App;
