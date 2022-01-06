import { auth } from "../../../config/firebase";
export const LogOut = () => {
  const handleLogOut = async () => {
    auth
      .signOut(auth.getAuth())
      .then(() => {
        console.log("User signed out successfully!");
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return handleLogOut;
};
