import CardItem from "../card-item/card-item";

import "./cards.css";

const Cards = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <CardItem key={id} {...itemProps} />;
  });
  if (elements != 0) {
    return (
      <div className="main-flex-wrapper">
        <div className="Error" style={{ display: "none" }}>
          There is no such result
        </div>
        <div className="flex-wrap">{elements}</div>
      </div>
    );
  } else {
    return (
      <div className="main-flex-wrapper">
        <div className="Error">There is no such result</div>
        <div className="flex-wrap">{elements}</div>
      </div>
    );
  }
};

export default Cards;
