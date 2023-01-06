import { FC } from "react";
import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Card: FC<FlexProps> = ({ children, ...rest }) => {
  const hoverTrColor = useColorModeValue("gray.400", "gray.700");
  return (
    <Flex
      flexDir="column"
      bgColor={hoverTrColor}
      borderRadius="6px"
      boxShadow="0 2px 8px #fff"
      w={{ base: "auto", md: "40rem", lg: '50rem' }}
      h="fit-content"
      m={{ base: "3rem 1.5rem", md: "3rem auto" }}
      p="2rem"
      {...rest}
    >
      {children}
    </Flex>
  );
};
