import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { argToString } from './encode.js'

async function fetchAccountWithProof(address, storageKeys = []) {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(process.env.ETHEREUM_JSON_RPC_API_URL)
  })
  return client.getProof({address, storageKeys});
}

const getAccount = async (blockNo, address) => {
  const account = await fetchAccountWithProof(argToString(address));
  const result = [
    account.balance.toString(16),
    account.codeHash,
    account.nonce.toString(16),
  ]
  return Promise.resolve(result)
}

export const oracles = async (name, args) => {
  if (name === "get_account") {
    return await getAccount(...args);
  }
  return Promise.reject("Unknown oracle");
}