import { type ForeignCallOutput } from '@noir-lang/noir_js';
import { type PublicClient } from 'viem';
import { createDefaultClient } from '../../ethereum/client.js';
import { getAccountOracle } from './accountOracles.js';

export type Oracle = (client: PublicClient, args: string[][]) => Promise<ForeignCallOutput[]>;

export type Oracles = (name: string, args: string[][]) => Promise<ForeignCallOutput[]>;

type OracleMap = Record<string, Oracle>;

export const createOracles =
  (client: PublicClient) =>
  (dict: OracleMap): Oracles =>
  async (name: string, args: string[][]): Promise<ForeignCallOutput[]> => {
    const fn = dict[name];
    if (fn === undefined) {
      throw new Error(`Unknown oracle ${name}`);
    }
    return await fn(client, args);
  };

export const defaultOracles = createOracles(createDefaultClient())({ getAccountOracle });
