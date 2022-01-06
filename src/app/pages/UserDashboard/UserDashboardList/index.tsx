import { AllUser } from "../../../../state/allUsers";
import { UserDashboardListStyle } from "./styles";
import avatar from "../../../../assets/avatar/avatar.svg";
import { useContext, useState } from "react";
import { ModalContext } from "../../../../utils/store/modal-context";
import Modal from "../../../components/Modal/Modal";
import EditUser from "../../../components/EditUser/EditUser";

interface IProps {
  userlist: AllUser[];
  refreshList: () => void;
}

export const UserDashboardList = (props: IProps) => {
  const { userlist, refreshList } = props;

  const [userInfo, setUserInfo] = useState<AllUser>();

  const { modal, showModal } = useContext(ModalContext);

  const handleEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: AllUser
  ) => {
    e.preventDefault();

    setUserInfo(item);

    showModal();
  };

  return (
    <UserDashboardListStyle>
      {userlist.map((item: AllUser, index: number) => (
        <div key={index} className="fishingDashboardList-grid">
          <img
            className="g-left-center"
            width={40}
            height={40}
            src={avatar}
            alt="avatar"
          />
          <div className="g-left-center">
            <div className="fishingDashboardList-grid-block">
              <div className="font12-normal">Vardas</div>
              <div className="font16-normal">{item.name}</div>
            </div>
          </div>
          <div className="g-left-center">
            <div className="fishingDashboardList-grid-block">
              <div className="font12-normal">Pavardė</div>
              <div className="font16-normal">{item.surname}</div>
            </div>
          </div>
          <div className="g-left-center">
            <div className="fishingDashboardList-grid-block">
              <div className="font12-normal">Rolė</div>
              <div className="font16-normal">{item.role}</div>
            </div>
          </div>
          <div className="g-left-center">
            <div className="fishingDashboardList-grid-block">
              <div className="font12-normal">El. paštas</div>
              <div className="font16-normal">{item.email}</div>
            </div>
          </div>
          <div className="g-left-center">
            <div className="fishingDashboardList-grid-block">
              <button
                className="g-button g-center"
                onClick={(e) => handleEdit(e, item)}
              >
                KOREGUOTI
              </button>
            </div>
          </div>
        </div>
      ))}
      {modal && userInfo && (
        <Modal>
          <EditUser userInfo={userInfo} refreshList={refreshList} />
        </Modal>
      )}
    </UserDashboardListStyle>
  );
};
