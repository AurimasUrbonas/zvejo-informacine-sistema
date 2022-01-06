/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { RegisterPage } from "../RegisterPage/indes";
import { SignInPage } from "../SignInPage";

export const LoginPage: React.FC = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {isActive === false ? (
        <SignInPage
          children={
            <div style={{ cursor: "pointer" }} onClick={handleToggle}>
              Kurti naują paskyrą
            </div>
          }
        />
      ) : (
        <RegisterPage
          children={
            <div style={{ cursor: "pointer" }} onClick={handleToggle}>
              Prisijungti
            </div>
          }
        />
      )}
    </>
  );
};
