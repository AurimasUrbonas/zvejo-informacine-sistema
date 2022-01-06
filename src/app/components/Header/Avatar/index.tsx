import { useAuth } from "../../../../contexts/AuthContext";
import { UseComponentVisible } from "../../DropDownList";
import { AvatarStyle } from "./styles";
import avatar from "../../../../assets/avatar/avatar.svg";
import { LogOut } from "../../../api/LogOut/LogOut";

export const Avatar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    UseComponentVisible(false);

  const { email } = useAuth();
  return (
    <AvatarStyle ref={ref}>
      <div className="dropdown">
        <div
          className="avatar"
          onClick={() => setIsComponentVisible((wasOpened: any) => !wasOpened)}
        >
          <div className="g-left-center"> {email} </div>
          <img
            className="g-left-center"
            width="20px"
            height="20px"
            src={avatar}
            alt="avatar"
          />
        </div>
        {isComponentVisible && (
          <div className="dropdown-content">
            <div className="dropdown-content-grid">
              <div
                className="dropdown-content-item g-center"
                onClick={LogOut()}
              >
                ATSIJUNGTI
              </div>
            </div>
          </div>
        )}
      </div>
    </AvatarStyle>
  );
};
