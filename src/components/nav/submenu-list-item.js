import "./nav.css";

const SubMenuListItem = ({ data }) => {
  let i = 20;
  const links = data.map((item) => {
    i++;
    return (
      <a key={i} href="#" className="sub-menu_link">
        {item}
      </a>
    );
  });

  return <li>{links}</li>;
};

export default SubMenuListItem;
