import { useContext, useState } from "react";
import { AllUser } from "../../../state/allUsers";
import { ModalContext } from "../../../utils/store/modal-context";
import ChangeUser from "../../api/ChangeUser/ChangeUser";
import { EditUserWrapper } from "./styles";

interface IEditUserProps {
  userInfo: AllUser;
  refreshList: () => void;
}

export default function EditUser(props: IEditUserProps) {
  const { userInfo, refreshList } = props;
  const { uid, name, surname, role, email } = userInfo;

  const [nameInput, setNameInput] = useState(name);
  const [surnameInput, setSurnameInput] = useState(surname);
  const [roleInput, setRoleInput] = useState(role);
  const [emailInput, setEmailInput] = useState(email);

  const { handleChangeUser, handleDeleteUser } = ChangeUser();

  const { hideModal } = useContext(ModalContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      uid: uid,
      picture: null,
      name: nameInput,
      surname: surnameInput,
      role: roleInput,
      email: emailInput,
    };

    handleChangeUser(data);

    refreshList();

    hideModal();
  };

  const handleDelete = () => {
    handleDeleteUser(uid);

    refreshList();

    hideModal();
  };

  return (
    <EditUserWrapper onSubmit={(e) => handleSubmit(e)}>
      <div className="form-detail">
        <label htmlFor="name">Įveskite norimą vardą</label>
        <input
          className="main-filter-input g-input"
          type="text"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.currentTarget.value)}
        />
      </div>
      <hr />
      <div className="form-detail">
        <label htmlFor="surname">Įveskite norimą pavardę</label>
        <input
          className="main-filter-input g-input"
          type="text"
          name="surname"
          value={surnameInput}
          onChange={(e) => setSurnameInput(e.currentTarget.value)}
        />
      </div>
      <hr />
      <div className="form-detail">
        <label htmlFor="role">Įveskite norimą rolę</label>
        <input
          className="main-filter-input g-input"
          type="number"
          name="role"
          value={roleInput}
          max={2}
          min={0}
          onChange={(e) => setRoleInput(+e.currentTarget.value)}
        />
      </div>
      <hr />
      <div className="form-detail">
        <label htmlFor="email">Įveskite norimą el. paštą</label>
        <input
          className="main-filter-input g-input"
          type="email"
          name="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.currentTarget.value)}
        />
      </div>
      <hr />
      <button className="g-button g-center" type="submit">
        PATVIRTINTI PAKEITIMUS
      </button>
      <button
        className="g-button g-center"
        type="button"
        style={{ backgroundColor: "#ff5b5b", marginTop: "10px" }}
        onClick={handleDelete}
      >
        IŠTRINTI VARTOTOJĄ
      </button>
    </EditUserWrapper>
  );
}
