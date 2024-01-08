import dotenv from 'dotenv';
import { http, type PublicClient, createPublicClient } from 'viem';
import { mainnet } from 'viem/chains';
dotenv.config();

export function createDefaultClient(): PublicClient {
  return createPublicClient({
    chain: mainnet,
    transport: http(process.env.ETHEREUM_JSON_RPC_API_URL),
  });
}
