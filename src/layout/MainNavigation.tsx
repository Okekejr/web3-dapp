import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, FlexProps, List, Text } from "@chakra-ui/react";
import { FC } from "react";
import { VscHome } from "react-icons/vsc";
import { IoWalletOutline } from "react-icons/io5";
import { ToggleColorMode } from "./ToggleColorMode";

export const MainNavigation: FC<FlexProps> = (props) => {
  const path = useRouter().pathname;

  return (
    <Flex
      w="auto"
      h={{ base: "4rem" }}
      justifyContent="center"
      align="center"
      bgColor="#77002e"
      color="#ffff"
      {...props}
    >
      <Box>
        <List
          display="flex"
          w={ path.includes("wallet") ? "auto" : "" || !path.includes("wallet") ? "13rem" : "" }
          justifyContent="space-between"
          fontSize={{ base: "1.2rem", md: "1.4rem" }}
          fontWeight="bold"
        >
          <Link href="/">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              w={{ md: "6rem" }}
            >
              <VscHome />
              <Text ml={{base: '0.6rem'}}>Home</Text>
            </Flex>
          </Link>
          {!path.includes("wallet") && (
            <Link href="/wallet">
              <Flex
                alignItems="center"
                justifyContent="space-between"
              >
                <IoWalletOutline />
                <Text ml={{base: '0.6rem'}}>Wallet</Text>
              </Flex>
            </Link>
          )}
        </List>
        <ToggleColorMode />
      </Box>
    </Flex>
  );
};
