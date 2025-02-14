import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const setAuth = useSetRecoilState(authScreenAtom);
  const setUser = useSetRecoilState(userAtom)
  const [loading, setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const showToast = useShowToast()
  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
             "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
      const data = await res.json()
      
      if(data.err){
        showToast( "Error", data.err)
        return
      }

      localStorage.setItem("user-hilos", JSON.stringify(data))
      setUser(data)
    } catch (error) {
      showToast("Error", error, "error");
    } finally {
      setLoading(false)
    }
  };

  return (
    <Flex>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.dark")}
          boxShadow={"lg"}
          p={8}
          w={{
            base: "full",
            sm: "350px",
          }}
        >
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={inputs.username}
                onChange={(e) =>
                  setInputs((inputs) => ({
                    ...inputs,
                    username: e.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"}
                value={inputs.password}
                onChange={(e) =>
                  setInputs((inputs) => ({
                    ...inputs,
                    password: e.target.value,
                  }))
                } />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Logging in"
                size="lg"
                bg={useColorModeValue("gray.600", "gray.700")}
                color={"white"}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.900"),
                }}
                onClick={handleLogin}
                isLoading={loading}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link color={"blue.400"} onClick={() => setAuth("signup")}>
                  Signup
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
