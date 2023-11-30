import { NavLink, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const homeLinkStyle = {
    color: location.pathname === "/" ? "#D11A2A" : "#2a363b",
  };
  const catalogLinkStyle = {
    color: location.pathname === "/catalog" ? "#D11A2A" : "#2a363b",
  };
  const favoritesLinkStyle = {
    color: location.pathname === "/favorites" ? "#D11A2A" : "#2a363b",
  };

  return (
    <nav>
      <NavLink to="/" style={homeLinkStyle}>
        Home
      </NavLink>

      <NavLink to="/catalog" style={catalogLinkStyle}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" style={favoritesLinkStyle}>
        Favorites
      </NavLink>
    </nav>
  );
};
