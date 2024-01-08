import { type ForeignCallOutput } from '@noir-lang/noir_js';
import { hexToBytes, keccak256 } from 'viem';
import { padArray } from '../../arrays.js';
import { type BlockHeader, headerToRlp } from '../../ethereum/blockHeader.js';
import { encodeField, encodeHex } from '../encode.js';

export const MAX_HEADER_RLP_SIZE = 708;

export function encodeBlockHeaderPartial(header: BlockHeader): ForeignCallOutput[] {
  const stateRoot = encodeHex(header.stateRoot);
  const transactionsRoot = encodeHex(header.transactionsRoot);
  const receiptsRoot = encodeHex(header.receiptsRoot);
  const number = header.number;
  const rlpHex = headerToRlp(header);
  const rlpBytes = encodeHex(rlpHex);
  const encodedLen = encodeField(rlpBytes.length);
  const encoded = padArray(rlpBytes, MAX_HEADER_RLP_SIZE, '0x');
  const hash = encodeHex(keccak256(hexToBytes(rlpHex)));
  return [stateRoot, transactionsRoot, receiptsRoot, number, hash, encodedLen, encoded];
}
