// @ts-nocheck
import {
  VStack,
  Heading,
  Box,
  Text,
  Avatar,
  HStack,
  List,
} from "@chakra-ui/react";
import { useEvmWalletTokenBalances } from "@moralisweb3/next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useNetwork } from "wagmi";

const ERC20Balances = () => {
  const { data } = useSession();
  const { chain } = useNetwork();

  const { data: tokenBalances } = useEvmWalletTokenBalances({
    address: data?.user?.address,
    chain: chain?.id,
  });

  useEffect(
    () => console.log("tokenBalances: ", tokenBalances),
    [tokenBalances]
  );

  const Format = (num: number) => new Intl.NumberFormat("en-US").format(num);

  return (
    <>
      <Heading size={{ base: "xs" }} mb={4} textAlign="center">
        Total Balance
      </Heading>
      {tokenBalances?.length ? (
        <Box padding="24px 18px">
          {tokenBalances?.map(({ token, value }, key) => (
            <List
              key={`${token?.symbol}-${key}-tr`}
              cursor="pointer"
              w="fit-content"
              m="auto"
            >
              <HStack gap={{ base: "4", md: "8" }}>
                <Avatar size="md" src={token?.logo || ""} name={token?.name} />
                <VStack alignItems={"flex-start"}>
                  <Text as={"span"}>{token?.name}</Text>
                  <Text fontSize={"xs"} as={"span"}>
                    {token?.symbol}
                  </Text>
                </VStack>
                <Text>{Format(value)}</Text>
              </HStack>
            </List>
          ))}
        </Box>
      ) : (
        <Text textAlign="center">
          Looks Like you do not have any ERC20 tokens
        </Text>
      )}
    </>
  );
};

export default ERC20Balances;
