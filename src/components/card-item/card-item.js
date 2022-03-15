import "./card-item.css";

const CardItem = (props) => {
  const { src, alt, name, text } = props;
  return (
    <div className="box">
      <div className="box-wrapper">
        <div className="img-cont">
          <img src={src} alt={alt} />
        </div>
        <div className="flex-text">
          <h2 className="name">{name}</h2>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
