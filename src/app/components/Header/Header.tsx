import { Link, NavLink } from "react-router-dom";
import { HeaderWrapper } from "./styles";
import { ReactComponent as Fish } from "../../../assets/fish.svg";
import { useAuth } from "../../../contexts/AuthContext";
import { RouterList } from "../../../router/RouterList";
import { User } from "../../../state/user";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Avatar } from "./Avatar";

export default function Header() {
  const { user } = useAuth();
  const { role } = useSelector((state: { user: User }) => state.user);
  return (
    <HeaderWrapper>
      <Link to="/">
        <Fish className="logo" />
      </Link>
      <nav className="font12-normal g-center">
        {RouterList.filter((x) => x.role.includes(role) && x.id !== 1).map(
          ({ id, path, name }) => (
            <Fragment key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "active animation-text"
                    : "active-default animation-text"
                }
              >
                <div className="bubbles g-center" />
                <div className="line" />
                <div className="name">{name}</div>
              </NavLink>
            </Fragment>
          )
        )}
      </nav>
      {user && (
        <div className="font12-normal g-center name postion">
          <Avatar />
        </div>
      )}
    </HeaderWrapper>
  );
}
