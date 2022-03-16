
import "./seach-panel.css";

const SeachPanel = (props) => {

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    props.onUpdateSearch(term);
  };
  

  return (
    <div className="add-wrapper">
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={onUpdateSearch}
      />
    </div>
  );
};

export default SeachPanel;
