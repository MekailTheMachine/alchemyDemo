// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "-albsdy8zVlH7D0WxAPhf8z-gnKo6g1r",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function main() {
    console.log('hello, the current block on Ethereum mainnet is:');
    // Get the latest block
    const latestBlock = await alchemy.core.getBlockNumber();
    console.log('block:', latestBlock);
    console.log('goodbye');
}

main();

