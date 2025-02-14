import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { FiLogOut } from "react-icons/fi";
import useShowToast from "../hooks/useShowToast";


const LogoutButton = () => {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();

  const handleLogout = async () => {

    try {
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.err) {
        showToast(data.err);
      }

      localStorage.removeItem("user-hilos");
      setUser(null);
    } catch (error) {
      showToast("Error", error, "error");
    }
  };

  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"30px"}
      size={"sm"}
      onClick={handleLogout}
    >
     <FiLogOut size={15} />
    </Button>
  );
};

export default LogoutButton;
