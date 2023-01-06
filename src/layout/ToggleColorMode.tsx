import { Button, useColorMode } from "@chakra-ui/react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { FC } from "react";

export const ToggleColorMode: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant="none"
      onClick={() => toggleColorMode()}
      pos="absolute"
      top={{ base: "-1", md: "-2" }}
      right="0"
      m="1rem"
    >
      {colorMode === "dark" ? (
        <HiOutlineSun color="orange.200" />
      ) : (
        <HiOutlineMoon color="blue.700" />
      )}
    </Button>
  );
};
