import MenuListItem from "../nav/menu-list-item";

import "./mobile-menu.css";


const MenuMobile =({data,active,setActive})=>{
    const menuElements = data.map((item) => {
        const { id, ...itemProps } = item;
        return <MenuListItem key={id} {...itemProps} active={active} />;
      }); 
return(
<div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className={active ? 'popup open' : 'popup'}>
        <nav className="menu-wrap">
            <ul className="menu" id="menu">
              {menuElements}
            </ul>
          </nav>         
        </div>
      </div>
    </div>
)
};

export default MenuMobile;