import { useState } from "react";
import DialogUser from "./Dialogs/DialogUser";
import HeaderComponent from "./HeaderComponent";
import type { NavigateFunction } from "react-router";

type User = {
  id: string;
  username: string;
  loginType: string;
};

type HeaderProps = {
  isAuthenticated: boolean;
  user: User | null;
  navigate: NavigateFunction;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  user,
  navigate,
  logout,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderComponent
        isAuthenticated={isAuthenticated}
        user={user}
        setIsDialogOpen={setIsDialogOpen}
        navigate={navigate}
      />
      {isAuthenticated && user && (
        <DialogUser
          user={user}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          logout={logout}
        />
      )}
    </>
  );
};

export default Header;
