import "./nav.css";

const SubMenuListItem = ({ data }) => {
  const links = data.map((item,index) => {
    return (
      <a key={index} href="#" className="sub-menu_link">
        {item}
      </a>
    );
  });

  return <li>{links}</li>;
};

export default SubMenuListItem;
