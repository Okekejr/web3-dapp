import { Text, Flex } from "@chakra-ui/react";
import { RxDot } from "react-icons/rx";
import { FC } from "react";

export const ConnectIndicator: FC = () => {
  return (
    <Flex w={{ md: "max-content" }} justifyItems="space-between" align="center">
      <RxDot color="#27ae60" />
      <Text>Connected</Text>
    </Flex>
  );
};
