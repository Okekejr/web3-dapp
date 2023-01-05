import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { HomePage } from "../src/components/_pages/HomePage";
import { Coin } from "../src/types/coin";
import { RevolvingDot } from "react-loader-spinner";

const Home: NextPage = () => {
  const [data, setData] = useState<Coin["CoinList"]>([]);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    try {
      const work = await fetch("https://api.energiswap.exchange/v1/assets");

      const workFiles = await work.json();

      setData(workFiles);
    } catch (error) {
      alert(error);
    }
  };

  if (data.length === 0) {
    return (
      <Flex justifyContent="center" h="100vh">
        <RevolvingDot
          height="100"
          width="100"
          radius={80}
          color="#77002e"
          secondaryColor=""
          ariaLabel="revolving-dot-loading"
        />
      </Flex>
    );
  }

  return <>{data && <HomePage data={data} />}</>;
};

export default Home;
