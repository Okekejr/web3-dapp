# web3-Dapp

The web3 app was built with the intention of using the modern web3 technologies to interact with Metamask and return the ERC20 token balances in your wallet while giving an interactive and smooth UI. 
Fully responsive and has Dark and Light Mode features.
I used Moralis Web3 API. Moralis supports the most popular blockchains and their test networks. Check it out https://docs.moralis.io/web3-data-api

## Installation (for standard modern project) and run project

- edit the .env.local configurations

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

Home Page: 
<img width="1434" alt="Screenshot 2023-01-06 at 13 09 05" src="https://user-images.githubusercontent.com/85338878/211086405-53b1437f-c330-4d24-b2e4-9a150300cfd3.png">

Wallet Page:
<img width="1440" alt="Screenshot 2023-01-06 at 13 09 14" src="https://user-images.githubusercontent.com/85338878/211086471-9ff71823-bd30-4084-b547-999cf12b60ab.png">

Connecting to Metamask:
<img width="1440" alt="Screenshot 2023-01-06 at 13 09 37" src="https://user-images.githubusercontent.com/85338878/211086617-f47446b3-0fe4-4503-9943-a6fe5629ff1a.png">

Balance Page:
<img width="1437" alt="Screenshot 2023-01-06 at 13 09 54" src="https://user-images.githubusercontent.com/85338878/211086668-50ac0ed9-acc2-43a5-9bcd-bcb1331064fa.png">

#### Live link

```
https://web3-dapp-dusky.vercel.app/
```

## Stack

<img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="next.js" width="40" height="40"> <img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='typescript' width='40' height='40'> <img src='https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg' alt='chakra ui' width='40' height='40'> <img src='https://wagmi.sh/og.png' alt='wagmi' width='40' height='40'> <img src='https://moralis.io/wp-content/uploads/2022/05/Moralis-Logo-LightBG-Large.png' alt='moralis' width='90' height='40'>
