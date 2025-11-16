import { useState } from "react";
import DialogUser from "./Dialogs/DialogUser";
import HeaderComponent from "./HeaderComponent";

const Header = ({ isAuthenticated, user, navigate, logout }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
