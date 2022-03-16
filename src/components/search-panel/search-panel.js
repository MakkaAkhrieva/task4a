
import { useCallback } from "react";
import "./seach-panel.css";

const SeachPanel = (props) => {

  const Update = (e) => {
    const term = e.target.value;
    UpdateSearch(term); 
  };

  const UpdateSearch=useCallback((term)=>{
    const timeoutId=setTimeout(()=>{
      props.onUpdateSearch(term);
    }, 300);
    if(!timeoutId)clearTimeout(timeoutId);
  },[props.onUpdateSearch]);

  return (
    <div className="add-wrapper">
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={Update}
      />
    </div>
  );
};

export default SeachPanel;
