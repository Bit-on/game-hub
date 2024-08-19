import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
    </HStack>
  );
};

export default NavBar;
