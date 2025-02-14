import { Flex, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={6} mb={12}>
      {user && (
        <Link as={RouterLink} to="/" flex={1} textAlign="left">
          <AiFillHome size={24} />
        </Link>
      )}

      <Image
        cursor={"pointer"}
        alt="logo"
        w={20}
        src={
          colorMode === "dark"
            ? "/public/text2-light.png"
            : "/public/text2-dark.png"
        }
        onClick={toggleColorMode}
      />

      {user && (
        <Link as={RouterLink} to={`/${user.username}`} flex={1} textAlign="right">
          <RxAvatar size={24} />
        </Link>
      )}
    </Flex>
  );
}