# web3-Dapp

The web3 app was built with the intention of using the modern web3 technologies to interact with Metamask and return the ERC20 token balances in your wallet while giving an interactive and smooth UI.
I used Moralis Web3 API. Moralis supports the most popular blockchains and their test networks. Check it out https://docs.moralis.io/web3-data-api

## Installation (for standard modern project) and run project

```bash
edit the .env.local configurations
```

```bash
yarn add
```

```bash
yarn next build
```

```bash
yarn run dev
```

## How to use?

1. On page load the app renders a table of Coins (10) from an API, this is the Home page.
2. This table has a sorting feature which can let you sort on all columns (by ID, Coin name, Symbol and Value).
3. On the wallet page, you get a screen that displays the Metamask logo and a connnect button,
4. The connect button sends a request to Metamask and once approved by the user, takes you the Balance page,
5. The balance page displays the Network you are on, the connect symbol, your current Account ID (formatted), a copy to clipboard feature and a logout button.
6. Just right below will appear your list of ERC20 tokens, with their names, values and Symbol and if there aren't any available it will display a text that says you havev none.

## Requirements to run the project successfully using the Vercel link

1. Metmask web extension
2. Some ERC20 token balances

## Demo

#### Live link

```
https://web3-dapp-dusky.vercel.app/
```

## Stack

<img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="react" width="40" height="40"> <img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='typescript' width='40' height='40'> <img src='https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg' alt='chakra ui' width='40' height='40'> <img src='https://wagmi.sh/og.png' alt='wagmi' width='40' height='40'> <img src='https://moralis.io/wp-content/uploads/2022/05/Moralis-Logo-LightBG-Large.png' alt='moralis' width='60' height='40'>
