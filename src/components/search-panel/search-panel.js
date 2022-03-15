import { useState } from "react";

import "./seach-panel.css";

const SeachPanel = (props) => {
  const [term, setTerm] = useState("");

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
    props.onUpdateSearch(term);
  };

  return (
    <div className="add-wrapper">
      <input
        className="input"
        type="text"
        placeholder="Search"
        value={term}
        onChange={onUpdateSearch}
      />
    </div>
  );
};

export default SeachPanel;
