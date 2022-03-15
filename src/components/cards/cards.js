import CardItem from "../card-item/card-item";

import "./cards.css";

const errorText='There is no such result';
const VisibleData=({text,elements})=>{
  return (
    <div className="main-flex-wrapper">
      <div className="Error">{text}</div>
      <div className="flex-wrap">{elements}</div>
    </div>
  );
};

const Cards = ({ data }) => {
  const elements = data.map(({ id, ...itemProps }) => {
    return <CardItem key={id} {...itemProps} />;
  });
  if (elements != 0) {
    return (
      <VisibleData elements={elements}/>
    );
  } else {
     return (
      <VisibleData text={errorText} elements={elements}/>
    ); 
  }
};


export default Cards;
