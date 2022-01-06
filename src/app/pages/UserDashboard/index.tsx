import { useEffect, useState } from "react";
import { getAllUsers } from "../../../config/firebase";
import { AllUser } from "../../../state/allUsers";
import { UserDashboardStyle } from "./styles";
import { UserDashboardList } from "./UserDashboardList";

export const UserDashboard = () => {
  const [userlist, setUserList] = useState<AllUser[]>([]);
  const [name, setName] = useState("");

  const [refresh, setRefresh] = useState(false);

  async function getUsers() {
    const data: Array<unknown> = [];
    const result = await getAllUsers();
    result.forEach((res) => data.push(res.data()));
    setUserList(data as any);
  }

  const filter = (e: any) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = userlist.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setUserList(results);
    } else {
      getUsers();
    }
    setName(keyword);
  };
  useEffect(() => {
    getUsers();
  }, [refresh]);

  const refreshList = () => {
    setRefresh(!refresh);
  };

  return (
    <UserDashboardStyle>
      <div className="upload-data">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="main-filter-input g-input"
          placeholder="Ieškoti pagal vardą"
        />
      </div>
      <UserDashboardList userlist={userlist} refreshList={refreshList} />
    </UserDashboardStyle>
  );
};
