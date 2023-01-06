import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ConnectButton } from "../ConnectButton";
import Image from "next/image";

export const WalletPage: FC = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      m={{ md: "5rem auto 5rem auto" }}
      alignItems="center"
      w="fit-content"
    >
      <Image
        src={"/assets/metamask.svg"}
        width={150}
        height={150}
        alt="metamask logo"
      />
      <Text fontSize="4xl" mb="3rem">
        METAMASK
      </Text>
      <Box>
        <ConnectButton />
      </Box>
    </Box>
  );
};
