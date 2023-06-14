import "./styles.css";
{
  /* import { NavLink } from "react-router-dom";
  
      <NavLink
          to={destination}
          className={}
        >
      </NavLink> */
}

export default function NavLinkSubnavLi({ destination = "", content = "" }) {
  return (
    <div class="navlink subnav-li">
      <a href={destination} class="navlink-subnav-li">
        {content}
      </a>
      {/*
      <NavLink
          to={destination}
          className="navlink-subnav-li"
        >
      </NavLink> 
      */}
    </div>
  );
}
