import { Link } from "react-router-dom";
import { useTheme } from "../providers/ThemProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log({ them: theme });

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="mode_switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
