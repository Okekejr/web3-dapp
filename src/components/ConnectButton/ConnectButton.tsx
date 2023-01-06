import { InjectedConnector } from "wagmi/connectors/injected";
import { signIn, useSession } from "next-auth/react";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { Button, useToast } from "@chakra-ui/react";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { useRouter } from "next/router";

const ConnectButton = () => {
  const { connectAsync } = useConnect({ connector: new InjectedConnector() });
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const toast = useToast();
  const { data } = useSession();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }
    try {
      const { account, chain } = await connectAsync();

      const challenge = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });

      if (!challenge) {
        throw new Error("No challenge received");
      }

      const signature = await signMessageAsync({ message: challenge.message });

      await signIn("moralis-auth", {
        message: challenge.message,
        signature,
        network: "Evm",
        redirect: false,
      });
    } catch (e) {
      toast({
        title: "Oops, something went wrong...",
        description: (e as { message: string })?.message,
        status: "error",
        position: "top-right",
        isClosable: true,
      });
    }
  };

  let router = useRouter();

  const red = () => {
    if (data?.user) {
      router.push("/balance");
    } else return false;
  };

  red();

  return (
    <Button size="sm" onClick={handleAuth} colorScheme="blue">
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
