import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  Box,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { useCallback, useState, MouseEventHandler, FC } from "react";
import { Coin } from "../../types/coin";

export interface Props {
  data: Coin["CoinList"];
}

export const HomePage: FC<Props> = ({ data }) => {
  const list = Object.values(data);

  const Filter = list.filter((coin, i) => {
    if (i <= 9) {
      return coin;
    }
    return false;
  });

  type Data = typeof Filter;

  type SortKeys = keyof Data[0];

  type SortOrder = "ascn" | "desc";

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) {
    if (!sortKey) return tableData;

    const sortedData = Filter.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  }

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <Button
        variant="none"
        onClick={onClick}
        border="none"
        bgColor="transparent"
        color="primary.base"
        m={0}
        p={0}
        cursor="pointer"
        transition="ease-out"
        transform={
          sortKey === columnKey && sortOrder === "desc" ? "rotate(180deg)" : ""
        }
      >
        ▲
      </Button>
    );
  }

  const [sortKey, setSortKey] = useState<SortKeys>("last_name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "symbol", label: "Symbol" },
    { key: "last_price", label: "Last price" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  const Format = (num: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);

  return (
    <TableContainer
      m={{ base: "2rem auto 2rem auto", md: "2rem 3rem 2rem 3rem", lg: "2rem 25rem 2rem 25rem" }}
      border="0.5px solid #95a5a6"
      borderRadius="15px"
    >
      <Table>
        <Thead>
          <Tr>
            {headers.map((row) => {
              return (
                <Td key={row.key}>
                  {row.label}
                  <SortButton
                    columnKey={row.key}
                    onClick={() => changeSort(row.key)}
                    {...{
                      sortOrder,
                      sortKey,
                    }}
                  />
                </Td>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData().map((coin, i) => {
            const { name, symbol, last_price } = coin;
            return (
              <Tr key={i+1}>
                <Td>
                  <Text textAlign="center">{i + 1}</Text>
                </Td>
                <Td>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    h="fit-content"
                  >
                    <Image
                      src={`/assets/icons/${symbol}.svg`}
                      width={25}
                      height={25}
                      alt={`${name}`}
                    />
                    {/* @ts-expect-error */}
                    <Text ml={{ md: "0.6rem" }}>{name}</Text>
                  </Box>
                </Td>
                <Td>
                  {/* @ts-expect-error */}
                  <Text textAlign="center">{symbol}</Text>
                </Td>
                {/* @ts-expect-error */}
                <Td isNumeric>{Format(last_price)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
