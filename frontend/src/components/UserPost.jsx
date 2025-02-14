import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";
import { CgMore } from "react-icons/cg";

export const UserPost = ({ postImg, postTitle, likes, replies }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link to={"/stevejobs/post/1"}>
      <Flex gap={3} mb={5} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size={"md"} name="Steve Jobs" src="/steve.png" />
          <Box w="1px" h={"full"} bg={"gray.light"} my={10}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size={"xs"}
              name="Dan Abrahmov"
              src=""
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Kent Dodds"
              src=""
              position={"absolute"}
              bottom={"0px"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Prosper Otemuyiwa"
              src=""
              position={"absolute"}
              bottom={"0px"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={"2"}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"} mr={2}>
                stevejobs
              </Text>
              <RiVerifiedBadgeFill color="#0091ff" />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gary.light"}>
                1d
              </Text>
              <Box>
                <Menu>
                  <MenuButton>
                    <CgMore cursor={"pointer"} />
                  </MenuButton>
                  <Portal>
                    <MenuList bg={"gray.dark"}>
                      <MenuItem bg={"gray.dark"}>
                        Copy Link
                      </MenuItem>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Box>
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid "}
              borderColor={"gray.light"}
            >
              <Image src={postImg} w={"full"} />
            </Box>
          )}

          <Flex gap={3} my={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}>
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
