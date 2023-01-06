import { FC } from "react";
import { Box, Avatar, Text, Flex, Divider } from "@chakra-ui/react";
import { getTxt } from "../../utils/format";
import { signOut, useSession } from "next-auth/react";
import { useDisconnect, useNetwork, useAccount } from "wagmi";
import { Card } from "../CardLayout/Card";
import { IoIosLogOut } from "react-icons/io";
import { IoMdCopy } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { ConnectIndicator } from "../ConnectIndicator/ConnectIndicator";
import ERC20Balances from "../ERC20Balance/ERC20Balance";

export const BalancePage: FC = () => {
  const { disconnectAsync } = useDisconnect();
  const { data } = useSession();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const { chain } = useNetwork();
  const { isConnected } = useAccount();

  const handleDisconnect = async () => {
    await disconnectAsync();
    signOut({ callbackUrl: "/wallet" });
  };

  const copy = (data?: any) => {
    return <Text>{getTxt(data?.user.address)}</Text>;
  };

  const getText = (data: any) => {
    const yes = (data?: any) => {
      return <Text>{data?.user.address}</Text>;
    };
    const dea = yes(data);

    return dea.props.children;
  };

  const confirm = () => {
    setDeleteSuccess(true);

    // setTimeout to remove the success message
    setTimeout(() => {
      setDeleteSuccess(false);
    }, 1500);
  };

  return (
    <Card>
      <Box
        display="flex"
        w={{ base: "16.4rem", md: "36rem", lg: "46rem" }}
        h="fit-content"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>{chain?.name}</Text>
        {isConnected && <ConnectIndicator />}
      </Box>
      <Divider orientation="horizontal" my={{ base: "1rem", md: "1rem" }} />
      <Box
        display="flex"
        w={{ base: "16.4rem", md: "36rem", lg: "46rem" }}
        h="fit-content"
        mb={{ base: "4rem", md: "1rem" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex>
          <Avatar size="xs" src="/assets/metamask.svg" />
          <Text fontWeight="medium">{copy(data)}</Text>
        </Flex>
        <Flex flexDir="column">
          <Box display="flex">
            <CopyToClipboard text={getText(data)}>
              <IoMdCopy size="1.7rem" cursor="pointer" onClick={confirm} />
            </CopyToClipboard>
            <Box cursor="pointer" ml={4} onClick={handleDisconnect}>
              <IoIosLogOut size="1.7rem" />
            </Box>
          </Box>
          {/* success message */}
          {deleteSuccess && <Text>Copied!</Text>}
        </Flex>
      </Box>
      {data && <ERC20Balances />}
    </Card>
  );
};
