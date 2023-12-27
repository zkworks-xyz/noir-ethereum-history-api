import { ForeignCallOutput } from '@noir-lang/noir_js';

import { decodeHexAddress } from "../src/noir/encode.js";

export const oraclesStub = async (name: string, args: string[][]): Promise<ForeignCallOutput[]> => {
  if (name === "get_account") {
    return await getAccountOracle(args);
  }
  return Promise.reject("Unknown oracle");
};

const getAccountOracle = async (args: string[][]): Promise<ForeignCallOutput[]> => {
  const nonZeroNonceAccountAddress = "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5";
  const address = decodeHexAddress(args[1]);

  const balance = "0x0";
  const codeHash = "0x0";
  const nonce = address === nonZeroNonceAccountAddress ? "0x01" : "0x0";
  const stateRoot = ["0xd7", "0x8d", "0x4f", "0x18", "0x2e", "0xbd", "0x7f", "0x0d", "0xc8", "0x6c", "0x5b", "0x32", "0x8b", "0x73", "0xf9", "0xea", "0x3d", "0xfe", "0x17", "0xee", "0x56", "0xfb", "0xb4", "0x90", "0xd9", "0xb6", "0x7e", "0xda", "0xc4", "0x8e", "0x2b", "0x04"];
  const key = ["0xb4", "0x7e", "0x3c", "0xd8", "0x37", "0xdd", "0xf8", "0xe4", "0xc5", "0x7f", "0x05", "0xd7", "0x0a", "0xb8", "0x65", "0xde", "0x6e", "0x19", "0x3b", "0xbb",];
  const proof = ["0xf9", "0x02", "0x11", "0xa0", "0x61", "0x72", "0xaf", "0xee", "0xf7", "0x72", "0xee", "0x1a", "0x97", "0x76", "0x70", "0xa5", "0xe9", "0xe3", "0x1e", "0x37", "0x76", "0xa1", "0x65", "0x5e", "0x8d", "0x2c", "0x89", "0x7d", "0x18", "0xd6", "0xda", "0xf4", "0xf6", "0x26", "0x73", "0x99", "0xa0", "0x03", "0xb9", "0x7a", "0x7a", "0x00", "0xa2", "0x0e", "0xe4", "0xb2", "0xab", "0x93", "0x71", "0x64", "0x7b", "0x17", "0xf7", "0x93", "0xc2", "0x48", "0xdf", "0xd6", "0x39", "0xad", "0x0b", "0x99", "0xb7", "0x63", "0xd2", "0x6d", "0x94", "0x1b", "0x39", "0xa0", "0xab", "0x43", "0xae", "0xed", "0x0c", "0xdc", "0x2c", "0x63", "0x09", "0x87", "0x5f", "0xdd", "0x32", "0x4f", "0x0e", "0x9a", "0xd9", "0xfb", "0x1d", "0xad", "0xe3", "0x56", "0x5f", "0x9e", "0x57", "0x25", "0xd2", "0x9a", "0x95", "0xb8", "0xf3", "0x4e", "0xa0", "0xbb", "0xa2", "0x36", "0xfd", "0x4e", "0x70", "0x7b", "0x69", "0xa2", "0xfc", "0xcd", "0x53", "0x3d", "0xe7", "0x09", "0xb2", "0x52", "0x8d", "0x86", "0xa9", "0xec", "0x10", "0x9d", "0xb5", "0xb8", "0x56", "0x06", "0xe3", "0x17", "0x02", "0x23", "0xcd", "0xa0", "0x85", "0x36", "0xd7", "0x86", "0x74", "0xf0", "0xf6", "0xbe", "0x32", "0x2f", "0xeb", "0x47", "0xdd", "0x12", "0x3d", "0x4b", "0x88", "0xc0", "0x7e", "0x6e", "0x89", "0x18", "0x57", "0x21", "0xd8", "0xdb", "0x8e", "0x77", "0x0d", "0x65", "0xaf", "0x41", "0xa0", "0xeb", "0xf5", "0xfe", "0xe5", "0x13", "0x09", "0x52", "0x04", "0x1b", "0x8c", "0xb6", "0x31", "0x73", "0x90", "0xff", "0xd2", "0xf6", "0x2a", "0x06", "0x86", "0xa1", "0x2f", "0x92", "0x1f", "0x8b", "0x5a", "0x10", "0xfa", "0xd8", "0x20", "0x6b", "0x04", "0xa0", "0xd1", "0x3b", "0x26", "0x21", "0x19", "0x15", "0xe8", "0xe8", "0xf3", "0xe2", "0xd7", "0x90", "0xde", "0x51", "0xc1", "0x7c", "0xb4", "0x19", "0x1d", "0x80", "0x50", "0x8e", "0x35", "0x18", "0x2e", "0xa0", "0x2a", "0xe8", "0xd2", "0xe0", "0xad", "0x65", "0xa0", "0xce", "0xb3", "0xf8", "0x12", "0x25", "0xdd", "0x03", "0x12", "0xbd", "0xd7", "0x7c", "0x27", "0x6c", "0x0e", "0xc2", "0xb0", "0x18", "0x34", "0xd0", "0x26", "0xc3", "0xe1", "0xad", "0xf0", "0x88", "0x78", "0xcb", "0xf9", "0x83", "0xa0", "0x2a", "0xb1", "0xa0", "0x9d", "0xf8", "0x02", "0xd9", "0x50", "0x95", "0x0e", "0xc9", "0xd7", "0x5b", "0x83", "0x2e", "0xb7", "0x68", "0xdc", "0x22", "0x36", "0xaf", "0x93", "0xfa", "0x64", "0x82", "0xc9", "0xf2", "0xf8", "0x23", "0x67", "0xa9", "0x13", "0xea", "0x03", "0x83", "0xa0", "0xb1", "0x5d", "0xe6", "0xc8", "0x74", "0xcf", "0xa1", "0x05", "0x50", "0x52", "0xaa", "0x73", "0x6a", "0x45", "0xae", "0x7d", "0x9d", "0xbb", "0x7f", "0xa7", "0xe0", "0xce", "0x26", "0x08", "0x5b", "0x0c", "0x21", "0x44", "0xd2", "0xbe", "0xfb", "0x10", "0xa0", "0x72", "0x70", "0xcf", "0xd2", "0x54", "0x5d", "0x3d", "0x19", "0xd2", "0x2c", "0x85", "0x8e", "0xc8", "0xa9", "0xc8", "0x71", "0x5b", "0xbb", "0x4c", "0xa8", "0x68", "0x9c", "0x5d", "0xe3", "0x24", "0xc4", "0xb0", "0x00", "0xfd", "0xa2", "0x5d", "0x9b", "0xa0", "0x57", "0x7a", "0xd2", "0xdd", "0xbc", "0x4a", "0xd6", "0xae", "0xef", "0x33", "0x5a", "0x30", "0xe5", "0x11", "0xbf", "0x01", "0x52", "0xa0", "0x22", "0xaf", "0xdf", "0xbe", "0x23", "0x34", "0xd6", "0x97", "0xc9", "0xb4", "0x71", "0x1e", "0xd7", "0xae", "0xa0", "0x80", "0x8e", "0x84", "0x95", "0x0d", "0xd7", "0xca", "0x8b", "0x7d", "0x2d", "0x31", "0xde", "0xbf", "0x49", "0x21", "0xda", "0x4b", "0x21", "0xfd", "0xe2", "0xd7", "0xa7", "0x6e", "0xd6", "0x99", "0xda", "0xd7", "0xb8", "0xbc", "0x51", "0xf2", "0xf4", "0xa0", "0x8a", "0x27", "0xad", "0xcb", "0xa9", "0x47", "0x86", "0xe0", "0x07", "0x19", "0xec", "0x95", "0x0a", "0xb8", "0x6a", "0x28", "0x2e", "0x4d", "0x6d", "0x1d", "0x63", "0x9f", "0xa1", "0x3f", "0x20", "0xc6", "0x09", "0x51", "0xe3", "0x20", "0xec", "0x3a", "0xa0", "0x68", "0xdb", "0xba", "0xb1", "0x2b", "0x77", "0x33", "0x02", "0x27", "0x6f", "0x79", "0x58", "0xc9", "0xbc", "0x8c", "0x72", "0xd0", "0xf6", "0xa2", "0x6f", "0x82", "0x46", "0x07", "0x4a", "0x61", "0x89", "0xd1", "0x84", "0x20", "0x21", "0xf4", "0x58", "0xa0", "0x16", "0x84", "0x74", "0x7f", "0xc7", "0x72", "0x2e", "0x70", "0x49", "0x2f", "0x2e", "0x5f", "0xd3", "0x4d", "0x69", "0xbd", "0xe8", "0xc0", "0x80", "0x63", "0x40", "0xf8", "0x1c", "0x6c", "0xca", "0x3e", "0x1e", "0x75", "0x84", "0x68", "0x63", "0x56", "0x80", "0xf9", "0x02", "0x11", "0xa0", "0x77", "0x81", "0xb4", "0xf7", "0xc1", "0xa3", "0x10", "0xe3", "0x79", "0x44", "0x31", "0xab", "0x12", "0xac", "0xd1", "0x11", "0xe8", "0x72", "0x45", "0xf5", "0x11", "0x09", "0x4e", "0xc3", "0xa3", "0xc3", "0xd7", "0x9b", "0x1c", "0xf2", "0xe9", "0x01", "0xa0", "0x7b", "0x38", "0x57", "0xe4", "0x0e", "0xa3", "0x2e", "0x1a", "0x91", "0x62", "0xba", "0x7e", "0xee", "0xe2", "0x38", "0x92", "0xb2", "0x24", "0xba", "0xec", "0x9c", "0x1e", "0x1b", "0x82", "0xba", "0x3b", "0x6d", "0xcf", "0x95", "0xb6", "0x63", "0xbe", "0xa0", "0x7f", "0x5d", "0xe5", "0xb2", "0x6b", "0xd2", "0xa0", "0xe7", "0x39", "0x82", "0x3d", "0x5b", "0x02", "0x60", "0x83", "0x1d", "0x89", "0x8a", "0x9d", "0x62", "0x17", "0x33", "0x44", "0x20", "0xf0", "0x5a", "0xfa", "0x88", "0x3c", "0x08", "0xfe", "0x87", "0xa0", "0x21", "0x2d", "0x50", "0xc1", "0x54", "0xcb", "0x43", "0xce", "0x85", "0xc0", "0x97", "0xee", "0x5a", "0x7e", "0xf0", "0x2e", "0x99", "0xf3", "0x47", "0x6c", "0xb8", "0xdb", "0x70", "0x71", "0x55", "0xa3", "0xf3", "0xa8", "0x43", "0xea", "0x2f", "0x50", "0xa0", "0xea", "0xab", "0xfe", "0x00", "0x20", "0xce", "0x72", "0x87", "0xcd", "0xf2", "0x75", "0xd1", "0x2d", "0x54", "0x73", "0xd7", "0xb6", "0x65", "0xd8", "0xb7", "0xb8", "0xc0", "0x69", "0x5c", "0xa3", "0x1f", "0xb0", "0xac", "0xef", "0x2b", "0xc6", "0x54", "0xa0", "0xe5", "0x19", "0x02", "0x1a", "0xaf", "0x35", "0xef", "0x10", "0xc1", "0x5e", "0x0e", "0xce", "0x0f", "0xd3", "0xea", "0x85", "0x1e", "0xe0", "0x08", "0x34", "0x64", "0xec", "0x38", "0x60", "0xc5", "0x06", "0x83", "0xb3", "0x7b", "0x45", "0xe3", "0xf1", "0xa0", "0x98", "0xd9", "0x2c", "0x93", "0xb8", "0x3a", "0x85", "0x0b", "0x1d", "0xbd", "0x4e", "0xb8", "0x89", "0x27", "0x18", "0xb2", "0x2d", "0xd5", "0x82", "0x9e", "0xc2", "0x5b", "0x1c", "0xcf", "0x5d", "0x33", "0xa3", "0xd3", "0x3d", "0xd3", "0xde", "0xeb", "0xa0", "0x7a", "0xf2", "0xc0", "0x17", "0xec", "0xdc", "0xba", "0xc6", "0x12", "0xe7", "0x5f", "0x23", "0x5b", "0x80", "0x64", "0x76", "0x61", "0xb9", "0xbb", "0x65", "0x5b", "0xf8", "0xbe", "0x5d", "0x1e", "0x09", "0xfc", "0xe2", "0xb8", "0x99", "0xe0", "0xda", "0xa0", "0xa2", "0xfc", "0x04", "0xa2", "0x01", "0x99", "0xd4", "0x8b", "0xc5", "0xe0", "0x73", "0x27", "0x19", "0x2e", "0xfd", "0x12", "0x73", "0x02", "0xe8", "0x8c", "0x35", "0x48", "0x2c", "0xfa", "0xde", "0xf6", "0xb8", "0x72", "0xcb", "0x25", "0xd5", "0x3f", "0xa0", "0xc9", "0x44", "0x1f", "0x2b", "0xb4", "0x3b", "0x1c", "0xfc", "0x65", "0x26", "0x83", "0x2a", "0x59", "0xb4", "0x88", "0x3e", "0x01", "0x80", "0xee", "0x80", "0xa8", "0xc5", "0x87", "0xa2", "0xff", "0x6e", "0xb5", "0x8f", "0x4d", "0x4a", "0xe7", "0xf1", "0xa0", "0x01", "0x4b", "0x31", "0x9e", "0x42", "0x24", "0xe0", "0xfa", "0x1b", "0x5f", "0x73", "0x3a", "0x93", "0x8b", "0x46", "0x2c", "0xf4", "0x2f", "0x33", "0xae", "0x46", "0x45", "0xd1", "0xbf", "0x9c", "0xb1", "0x86", "0x3a", "0xc4", "0x3d", "0x8d", "0x0c", "0xa0", "0x7c", "0x41", "0xc9", "0xeb", "0x69", "0xc7", "0x63", "0x7e", "0xd5", "0xd2", "0xca", "0x23", "0x7d", "0x09", "0x11", "0x6b", "0x21", "0x6c", "0x7a", "0xfb", "0x88", "0x9a", "0x07", "0xb5", "0x27", "0x08", "0x12", "0x46", "0x90", "0x4c", "0x3b", "0x74", "0xa0", "0x70", "0xa0", "0x51", "0xa9", "0xa3", "0x72", "0x6f", "0x08", "0xf2", "0x07", "0x45", "0x0f", "0x40", "0xb3", "0x79", "0xf2", "0xeb", "0x60", "0xff", "0x9d", "0xf2", "0xbc", "0xca", "0x38", "0xbc", "0xe4", "0x43", "0xc7", "0xfb", "0x0b", "0x8c", "0x2b", "0xa0", "0x67", "0x64", "0x0e", "0xa6", "0x74", "0xd6", "0xc7", "0xa0", "0xa0", "0x0f", "0x0c", "0x42", "0xa3", "0x55", "0x10", "0x69", "0x69", "0x62", "0x58", "0xc0", "0xff", "0x1c", "0x26", "0x3d", "0xac", "0x90", "0xb6", "0x82", "0xad", "0xac", "0xd7", "0x9a", "0xa0", "0x02", "0xd1", "0x3f", "0x9c", "0xef", "0xb7", "0x66", "0xb4", "0xb3", "0x95", "0xba", "0xbd", "0x1f", "0x18", "0x7a", "0x56", "0xea", "0x5a", "0xa3", "0x4e", "0xeb", "0x44", "0x94", "0x60", "0x81", "0x62", "0xc0", "0x95", "0x80", "0xe9", "0x06", "0x26", "0xa0", "0x02", "0xa4", "0xaa", "0xd3", "0x28", "0x04", "0x2a", "0x75", "0xc1", "0x21", "0x36", "0x57", "0xd7", "0x0c", "0xa7", "0x13", "0x99", "0x91", "0xed", "0x23", "0xac", "0xc4", "0x0b", "0x88", "0x7a", "0x7f", "0x67", "0x48", "0x4f", "0xbb", "0x38", "0x4f", "0x80", "0xf9", "0x02", "0x11", "0xa0", "0xe8", "0x1d", "0x41", "0x8b", "0xba", "0x15", "0xbe", "0xdc", "0x12", "0x09", "0x3d", "0x5a", "0xbb", "0x2c", "0x14", "0x67", "0xe0", "0x3b", "0x5d", "0x00", "0x65", "0xdd", "0x89", "0x71", "0x32", "0x5e", "0xb8", "0xdb", "0x13", "0xfd", "0xfe", "0xae", "0xa0", "0xc0", "0x43", "0x70", "0x9a", "0x52", "0x8b", "0x0a", "0x49", "0x70", "0xf8", "0x21", "0x6e", "0xe4", "0xf1", "0x23", "0x98", "0x81", "0x30", "0xd4", "0x28", "0xe0", "0x02", "0x8a", "0x59", "0xbe", "0x64", "0x59", "0x3f", "0xbe", "0x6f", "0x7a", "0xea", "0xa0", "0x60", "0x17", "0x66", "0x37", "0x8a", "0x71", "0xa1", "0x2f", "0xfb", "0xc7", "0xce", "0xb2", "0xfa", "0x24", "0x66", "0x8f", "0xf1", "0x58", "0x96", "0x4c", "0xbd", "0xc6", "0xad", "0x1e", "0x05", "0xf1", "0xad", "0x2d", "0xb9", "0x8a", "0x25", "0x5b", "0xa0", "0x8f", "0xb3", "0x09", "0xef", "0x67", "0xd4", "0x8e", "0xf9", "0x9a", "0x86", "0xc1", "0x21", "0x44", "0x8f", "0x4d", "0xf7", "0x3e", "0x9a", "0x93", "0xd5", "0xea", "0x33", "0x14", "0xfa", "0x6d", "0x8a", "0x13", "0x4b", "0x2e", "0xc1", "0xf7", "0x7e", "0xa0", "0x1b", "0x91", "0x76", "0x35", "0x27", "0x34", "0x0d", "0x86", "0xe6", "0x1b", "0x32", "0xd4", "0x3a", "0x8c", "0x57", "0xb5", "0x85", "0x8a", "0x17", "0x48", "0xcc", "0x6d", "0x1e", "0x2f", "0x07", "0x73", "0x7d", "0x30", "0xb2", "0x58", "0x6d", "0xa9", "0xa0", "0xb5", "0x97", "0x2c", "0xcc", "0x58", "0x71", "0xb6", "0x4f", "0x08", "0xd2", "0xc7", "0x76", "0x38", "0x47", "0xe9", "0xc5", "0x57", "0x67", "0x99", "0x64", "0x50", "0x53", "0xcd", "0xd0", "0x02", "0x4d", "0x83", "0x4f", "0x04", "0x27", "0x43", "0x20", "0xa0", "0xa8", "0x90", "0xe4", "0x71", "0xa6", "0xfb", "0x3b", "0x2e", "0x7e", "0xf1", "0x27", "0xf0", "0xea", "0x46", "0xcb", "0x27", "0x98", "0x1e", "0xca", "0x73", "0x9e", "0xda", "0x97", "0xac", "0x0d", "0x94", "0xc2", "0x60", "0x10", "0x36", "0xc1", "0x13", "0xa0", "0xac", "0xc6", "0x87", "0xb7", "0x30", "0xd3", "0xba", "0x5b", "0xc8", "0x51", "0xc8", "0xf4", "0x27", "0x0a", "0x7e", "0x13", "0x32", "0x25", "0x7f", "0xa4", "0x82", "0x78", "0x83", "0x3a", "0xc5", "0x89", "0x58", "0x34", "0xc4", "0xe3", "0x4c", "0x94", "0xa0", "0xba", "0xe8", "0xfb", "0x16", "0x59", "0x67", "0xa6", "0xe5", "0xac", "0xc4", "0x4c", "0x49", "0x35", "0xe3", "0xc6", "0x8a", "0x77", "0xe1", "0x64", "0x71", "0x14", "0xa1", "0x3c", "0xdf", "0x37", "0x91", "0x30", "0x95", "0xa9", "0x26", "0xca", "0xad", "0xa0", "0x20", "0x21", "0x42", "0xfb", "0x0a", "0x49", "0xe1", "0xa6", "0xdf", "0x7c", "0x1b", "0x5b", "0xa3", "0x4b", "0x52", "0xd0", "0x2a", "0x19", "0x33", "0xb2", "0xe1", "0x41", "0xc5", "0x7c", "0x23", "0x55", "0x25", "0x0e", "0x66", "0x9f", "0xa1", "0x50", "0xa0", "0xc8", "0x3b", "0x5b", "0x4c", "0xb6", "0xa6", "0x84", "0xa5", "0x4c", "0x84", "0xff", "0x69", "0x17", "0xc7", "0x96", "0xb8", "0xbb", "0xf4", "0x95", "0x25", "0xda", "0xf4", "0x19", "0xb5", "0x11", "0xaa", "0xb9", "0x73", "0x06", "0x56", "0x6f", "0xeb", "0xa0", "0x70", "0xa9", "0x23", "0x37", "0xc6", "0x06", "0xd8", "0x23", "0x62", "0xf7", "0x39", "0x56", "0x9d", "0x1d", "0x51", "0xe1", "0xcf", "0x9b", "0x46", "0x18", "0xda", "0xfb", "0x77", "0x7f", "0xa7", "0x9a", "0xe7", "0x23", "0x99", "0xb8", "0x49", "0xcb", "0xa0", "0x05", "0x0d", "0xc6", "0x43", "0xf8", "0xfa", "0xb3", "0x1f", "0x38", "0x30", "0x11", "0x28", "0x1f", "0xa5", "0xfe", "0xd7", "0x31", "0xbc", "0xbb", "0xf4", "0x1a", "0x32", "0xfd", "0x9d", "0x72", "0x5c", "0xbf", "0x5c", "0x20", "0x07", "0x3e", "0x64", "0xa0", "0x48", "0x96", "0x74", "0x94", "0x27", "0xda", "0x28", "0x4e", "0x92", "0x18", "0x7b", "0x00", "0x49", "0x24", "0xd1", "0x47", "0x7f", "0xe4", "0xb4", "0x09", "0x72", "0x9e", "0x6b", "0xb4", "0x0d", "0xeb", "0xb8", "0x83", "0xbd", "0x7a", "0x52", "0xb5", "0xa0", "0x81", "0xa1", "0xdd", "0xd9", "0x03", "0x0b", "0xaf", "0x96", "0x72", "0x7e", "0x4d", "0x77", "0xe0", "0x51", "0x8a", "0x2b", "0xfb", "0xd0", "0x80", "0xc8", "0x99", "0xdd", "0xd1", "0x8f", "0x9c", "0xd9", "0x93", "0xd1", "0xf5", "0xb9", "0x20", "0x26", "0xa0", "0x4a", "0x62", "0x00", "0xe4", "0xc1", "0x0c", "0x39", "0xf6", "0xe5", "0xd5", "0xab", "0x78", "0x65", "0xc9", "0x02", "0x71", "0xad", "0x4c", "0x97", "0x51", "0x68", "0xe3", "0xdf", "0xdb", "0x16", "0x2b", "0x7e", "0x9f", "0xee", "0x44", "0xf2", "0x3d", "0x80", "0xf9", "0x02", "0x11", "0xa0", "0x8f", "0x23", "0x53", "0xff", "0xe6", "0xb5", "0xbb", "0xd8", "0x64", "0xae", "0x31", "0x9e", "0x73", "0xfe", "0xa6", "0x79", "0xa4", "0x4e", "0x8b", "0xe9", "0xf3", "0x97", "0xab", "0xfc", "0x08", "0xe3", "0x54", "0x67", "0xae", "0x37", "0x52", "0x6a", "0xa0", "0x0a", "0xf7", "0x98", "0x13", "0xf8", "0x37", "0x83", "0x9b", "0xdc", "0xdb", "0xc3", "0x95", "0xf2", "0xd3", "0x95", "0xdb", "0xb7", "0xa2", "0x16", "0x0a", "0x56", "0xde", "0x58", "0x00", "0x11", "0x0a", "0xac", "0xc2", "0x8e", "0xf1", "0x40", "0x8b", "0xa0", "0xe1", "0xba", "0xc2", "0xe0", "0x08", "0x02", "0x81", "0x0d", "0x86", "0xd6", "0x4f", "0xbe", "0x91", "0x83", "0xc6", "0x15", "0xde", "0x7c", "0x0e", "0xc3", "0xc0", "0x82", "0xa7", "0x5c", "0x23", "0x4d", "0xf4", "0xb5", "0x5c", "0x7b", "0xc3", "0x5a", "0xa0", "0x90", "0x17", "0xac", "0xe8", "0x6e", "0x99", "0xf4", "0x61", "0xb0", "0x17", "0x37", "0x8c", "0xbd", "0xf9", "0xd8", "0x71", "0x7a", "0x72", "0x27", "0xae", "0xec", "0x05", "0xb7", "0xbc", "0xaa", "0xc7", "0x2f", "0x79", "0x88", "0xc9", "0x18", "0x66", "0xa0", "0x26", "0x72", "0xb9", "0x82", "0x1e", "0xe5", "0xcb", "0x29", "0x3b", "0xbf", "0x96", "0x4e", "0xa1", "0x87", "0xb6", "0x7e", "0x29", "0x0d", "0xf8", "0x92", "0x3e", "0x5f", "0xde", "0xdd", "0xaf", "0x70", "0xe1", "0x7e", "0x6b", "0xb4", "0x74", "0xb5", "0xa0", "0x74", "0x33", "0x7e", "0xec", "0xdb", "0xdc", "0x83", "0x46", "0x81", "0x1e", "0x91", "0x16", "0xdd", "0x45", "0xd7", "0xc9", "0xf1", "0x5e", "0x4f", "0x30", "0x8b", "0x1e", "0x9f", "0xdf", "0x0c", "0xb9", "0x9c", "0x65", "0x49", "0x12", "0x3f", "0x62", "0xa0", "0x60", "0x47", "0xe4", "0x48", "0xa8", "0x49", "0xa0", "0xb8", "0x11", "0xba", "0x56", "0x41", "0x92", "0x67", "0xad", "0xb2", "0xaa", "0xa0", "0xce", "0x94", "0x85", "0x6c", "0x0d", "0x09", "0x01", "0xb8", "0xa9", "0xfe", "0x96", "0x8a", "0x26", "0xdb", "0xa0", "0x0a", "0xd5", "0x15", "0x76", "0x93", "0xac", "0xd8", "0xd5", "0x43", "0x35", "0x26", "0x47", "0x7f", "0x0e", "0x2c", "0xc3", "0xb5", "0x47", "0x40", "0x45", "0x51", "0xe6", "0xd0", "0xff", "0x96", "0x52", "0xea", "0xa8", "0xb7", "0x59", "0xfc", "0xba", "0xa0", "0x39", "0x20", "0xe3", "0x42", "0x30", "0x44", "0x41", "0x85", "0xeb", "0x1b", "0xf3", "0x69", "0xff", "0x18", "0x2b", "0xdd", "0x14", "0xbd", "0xdf", "0x1e", "0x48", "0xe9", "0xf9", "0x3d", "0x6e", "0xf2", "0xf3", "0xff", "0x96", "0xbc", "0x83", "0xeb", "0xa0", "0x83", "0xdf", "0xe2", "0x1a", "0x24", "0x58", "0x11", "0x65", "0xcf", "0x3d", "0x8a", "0xf4", "0xfd", "0xfd", "0x3f", "0x89", "0x17", "0xc5", "0xe7", "0x22", "0x3e", "0x72", "0x34", "0x86", "0x43", "0x7e", "0xe1", "0xb9", "0x2a", "0x63", "0x53", "0xcb", "0xa0", "0xe7", "0xb3", "0x06", "0x02", "0xa9", "0x84", "0x66", "0x3f", "0x7b", "0x1f", "0x78", "0x04", "0x9d", "0xe2", "0x45", "0x62", "0x85", "0x61", "0x9d", "0x78", "0x26", "0xb1", "0xd4", "0xcb", "0xb6", "0xaf", "0xf1", "0x5b", "0x39", "0xfb", "0x5f", "0x66", "0xa0", "0x7e", "0x1f", "0x7c", "0x5c", "0x9b", "0xc6", "0x19", "0x9e", "0x1c", "0x81", "0x15", "0xc5", "0x10", "0xbc", "0x31", "0xb0", "0x01", "0x91", "0x9f", "0x42", "0x7d", "0xe1", "0x81", "0x94", "0x16", "0x6c", "0xba", "0x54", "0x72", "0x0b", "0x6b", "0x45", "0xa0", "0x79", "0xbd", "0x4e", "0x23", "0xbe", "0x86", "0x92", "0x63", "0xaa", "0xea", "0x55", "0x62", "0x20", "0x75", "0x19", "0xdd", "0x36", "0x09", "0x5c", "0x5e", "0x9a", "0x8d", "0xff", "0x4b", "0xe2", "0x28", "0x5b", "0x0d", "0x98", "0x5f", "0xff", "0xca", "0xa0", "0x35", "0x6b", "0x7d", "0x6a", "0x33", "0x3d", "0xbf", "0x1d", "0xd1", "0x64", "0x0d", "0xb6", "0xf1", "0x03", "0xe5", "0x1d", "0x37", "0x03", "0xf8", "0x48", "0x45", "0x19", "0xcb", "0x25", "0x21", "0xe1", "0x88", "0x35", "0x82", "0x2c", "0x94", "0xd7", "0xa0", "0x70", "0xdc", "0x45", "0x11", "0x75", "0x51", "0x34", "0xb3", "0xdf", "0xf6", "0x23", "0x26", "0x3c", "0xaa", "0xd4", "0xcb", "0x34", "0x41", "0xde", "0xcc", "0xe1", "0xd4", "0x9f", "0x82", "0x34", "0x2f", "0x58", "0xa2", "0x60", "0xf4", "0x75", "0xc8", "0xa0", "0x88", "0xa2", "0xef", "0x81", "0xa1", "0x8b", "0x04", "0x39", "0x22", "0x78", "0x00", "0xf0", "0x80", "0xe1", "0x18", "0x92", "0x7b", "0x65", "0xf0", "0xa8", "0x53", "0x8f", "0x9a", "0x5e", "0xae", "0xe0", "0x9a", "0x2e", "0xec", "0x49", "0x1f", "0x58", "0x80", "0xf9", "0x02", "0x11", "0xa0", "0xea", "0xa9", "0x29", "0x93", "0x83", "0x65", "0x1e", "0x9d", "0x91", "0xe3", "0xcf", "0xc6", "0x64", "0x2b", "0x33", "0xd5", "0x33", "0x40", "0x82", "0x72", "0x36", "0x1a", "0x9f", "0x8f", "0xa4", "0x52", "0xf3", "0x04", "0xfe", "0x37", "0x86", "0x38", "0xa0", "0xf9", "0xd2", "0x0e", "0x25", "0x31", "0x64", "0x5a", "0xc9", "0xe8", "0x34", "0x77", "0xf9", "0x2c", "0x24", "0x6b", "0x10", "0x6b", "0xbf", "0x27", "0x2d", "0x94", "0xb1", "0x77", "0xb1", "0x82", "0x3c", "0x82", "0x4e", "0xb1", "0xb5", "0x7c", "0x28", "0xa0", "0xf8", "0x39", "0x1d", "0x05", "0x26", "0x89", "0x71", "0xfd", "0x73", "0x12", "0x1c", "0xd5", "0xfd", "0x21", "0x45", "0x23", "0x29", "0xf2", "0x9e", "0xef", "0x68", "0xe8", "0x15", "0xe6", "0x2c", "0xbd", "0x28", "0x24", "0x99", "0x23", "0x8e", "0xc6", "0xa0", "0x7f", "0xf1", "0x92", "0xa3", "0xd9", "0x49", "0x57", "0x84", "0xcb", "0xca", "0x63", "0x92", "0x6b", "0x26", "0x4d", "0xe8", "0x4a", "0xa9", "0x9b", "0xa4", "0x58", "0xda", "0x37", "0x7a", "0x71", "0x6d", "0xc1", "0xab", "0xe6", "0x0a", "0x55", "0x6f", "0xa0", "0x89", "0xd8", "0xfd", "0x1e", "0x9a", "0xfc", "0x9a", "0x12", "0xa1", "0xab", "0xd6", "0x5c", "0x6d", "0xe0", "0x13", "0xbe", "0x8b", "0x55", "0x74", "0x42", "0xc6", "0x04", "0xf2", "0xfc", "0xa2", "0xda", "0xdc", "0x45", "0x17", "0x8f", "0x1d", "0xaa", "0xa0", "0xde", "0x25", "0x55", "0x43", "0x09", "0x70", "0xdd", "0x42", "0x8e", "0xf8", "0xa4", "0x7b", "0xd0", "0xa2", "0xd1", "0x1e", "0x52", "0xb9", "0xec", "0x1f", "0x0d", "0x15", "0xf1", "0xae", "0x95", "0xfd", "0x4b", "0xf4", "0xa0", "0x33", "0x0c", "0xef", "0xa0", "0xc7", "0xba", "0x2f", "0xc1", "0xd3", "0x62", "0x4a", "0x63", "0xd0", "0x91", "0xfa", "0x7d", "0x17", "0xae", "0xf3", "0xc1", "0x10", "0x52", "0xc0", "0xa8", "0x9b", "0xbe", "0x27", "0xc9", "0x4d", "0x89", "0x90", "0xf4", "0xbe", "0x98", "0x3c", "0x46", "0xa0", "0x30", "0xb3", "0x90", "0x4f", "0x0f", "0xa5", "0x20", "0x29", "0x1e", "0x63", "0x8c", "0xc3", "0xf1", "0x4f", "0xd0", "0x36", "0x1b", "0xc9", "0x16", "0x88", "0x11", "0xd5", "0x86", "0xa6", "0xcb", "0x51", "0x6d", "0x8a", "0x2d", "0x83", "0x09", "0x00", "0xa0", "0xb2", "0xc7", "0x50", "0xa1", "0xfc", "0xbd", "0xbb", "0x51", "0xc7", "0x70", "0xb8", "0xf7", "0x69", "0x9d", "0xf0", "0x79", "0xa2", "0x59", "0x93", "0xf6", "0x44", "0xae", "0x6c", "0xc4", "0x77", "0x3d", "0x14", "0xdb", "0xb4", "0x2f", "0xbf", "0x07", "0xa0", "0x67", "0x03", "0x2f", "0xbe", "0x25", "0xfc", "0x69", "0x8d", "0x71", "0x25", "0x97", "0x7b", "0x40", "0x5d", "0x2e", "0xe8", "0x3f", "0x54", "0xa1", "0xb5", "0xc1", "0x39", "0x43", "0x37", "0xb8", "0x86", "0x50", "0xa6", "0xb4", "0x8e", "0x92", "0x3f", "0xa0", "0x84", "0xbf", "0x36", "0x72", "0xc8", "0x34", "0x68", "0x1e", "0x40", "0xec", "0xee", "0x6a", "0x04", "0xdc", "0x23", "0x4c", "0x6b", "0xc9", "0x5c", "0xb5", "0xa2", "0xd0", "0xb7", "0x1d", "0xe9", "0x52", "0xc2", "0x82", "0x6a", "0x2b", "0x09", "0x63", "0xa0", "0xb9", "0xb0", "0x94", "0xdc", "0x10", "0xc4", "0xd4", "0x51", "0x6a", "0x3f", "0xa2", "0x63", "0xf8", "0x0d", "0x17", "0x43", "0x33", "0x9d", "0xc8", "0xd1", "0x32", "0x36", "0xb4", "0x04", "0x00", "0xc6", "0x9e", "0xda", "0x73", "0xff", "0x3c", "0x89", "0xa0", "0xf5", "0x08", "0xf9", "0x59", "0x68", "0x9b", "0xc1", "0x94", "0xe3", "0x32", "0xf8", "0xa9", "0x61", "0x88", "0x26", "0x96", "0x9e", "0x0f", "0x4d", "0x86", "0x3c", "0xfb", "0x19", "0xad", "0xd1", "0x93", "0x81", "0x6c", "0x56", "0xf4", "0x3e", "0xc7", "0xa0", "0x26", "0xe3", "0xd6", "0x24", "0x5c", "0x5e", "0x29", "0xa9", "0x19", "0xbe", "0x23", "0x98", "0xbf", "0x09", "0xff", "0xd1", "0xf6", "0x37", "0xcb", "0xf9", "0xa7", "0x61", "0xc2", "0x98", "0xc2", "0x84", "0x25", "0x7b", "0xab", "0x56", "0xf7", "0xed", "0xa0", "0x6c", "0xb8", "0x65", "0x12", "0x02", "0x69", "0x48", "0xa1", "0x68", "0x95", "0x37", "0x32", "0x0e", "0xd9", "0xd5", "0x76", "0x5f", "0x01", "0x1c", "0x47", "0x08", "0x4a", "0xb7", "0x5f", "0xaa", "0xb3", "0x8e", "0xd7", "0x7d", "0x7b", "0x38", "0x0c", "0xa0", "0x41", "0x3e", "0x29", "0xa1", "0x78", "0xe5", "0x18", "0x10", "0xfb", "0x9e", "0xa3", "0x62", "0x20", "0x75", "0xd4", "0xce", "0xad", "0x12", "0x83", "0xec", "0xfb", "0x76", "0xef", "0x5c", "0x9d", "0x52", "0xc6", "0xe9", "0x77", "0xfc", "0x87", "0xd2", "0x80", "0xf9", "0x02", "0x11", "0xa0", "0x2c", "0x44", "0xeb", "0xc5", "0xe6", "0x6c", "0xd8", "0x3e", "0x4c", "0x5d", "0x72", "0xd7", "0x99", "0x31", "0x11", "0xd9", "0x85", "0xfe", "0x4c", "0x31", "0xc9", "0xd0", "0xab", "0x7a", "0xcc", "0x9a", "0x91", "0x38", "0x3c", "0x94", "0xe2", "0x95", "0xa0", "0x3e", "0x82", "0xe4", "0x45", "0xda", "0x29", "0x0a", "0xe8", "0x06", "0x38", "0xa8", "0xd4", "0xb6", "0x78", "0xf3", "0xa9", "0x99", "0xc3", "0x31", "0xc7", "0x9c", "0x6f", "0x27", "0x20", "0xf8", "0x3c", "0x4d", "0x70", "0x1c", "0x89", "0xb7", "0x0b", "0xa0", "0x1e", "0xe0", "0x1c", "0xad", "0x94", "0xb3", "0x07", "0x3f", "0x47", "0xf0", "0xef", "0x01", "0x8b", "0x17", "0x24", "0x3f", "0xa0", "0x3b", "0x61", "0x5b", "0x83", "0xff", "0x53", "0x24", "0x30", "0xaa", "0x58", "0x17", "0x74", "0x2c", "0x62", "0x49", "0xa0", "0xe3", "0xb7", "0x2c", "0x68", "0xad", "0x42", "0x55", "0x6b", "0x42", "0xf7", "0x6b", "0xde", "0x86", "0x87", "0xe0", "0x66", "0x56", "0xc8", "0x9f", "0x83", "0x0f", "0xf2", "0x7d", "0xd7", "0x4e", "0x9f", "0x30", "0x85", "0x9e", "0x0a", "0x49", "0xab", "0xa0", "0xa4", "0xf8", "0x2d", "0xc3", "0x4d", "0xab", "0x21", "0x64", "0x59", "0xed", "0x81", "0xd0", "0x92", "0x2b", "0xb2", "0x20", "0xcd", "0xcd", "0xda", "0x0b", "0x17", "0x23", "0xe5", "0xd9", "0xf4", "0xab", "0xae", "0xf5", "0xeb", "0x8d", "0x36", "0x5a", "0xa0", "0x5e", "0x40", "0x54", "0x7e", "0x9c", "0xf3", "0x25", "0x8e", "0x69", "0xd7", "0x37", "0x1e", "0x71", "0x09", "0xf1", "0x31", "0x92", "0x82", "0x75", "0xd7", "0x90", "0x77", "0x50", "0xb9", "0x1b", "0x68", "0x9d", "0x83", "0x8a", "0xd2", "0x06", "0x92", "0xa0", "0x1b", "0xce", "0xca", "0xb0", "0xd5", "0x13", "0xe1", "0x31", "0x0a", "0x68", "0x18", "0xd2", "0x72", "0x4e", "0xbb", "0x84", "0x4e", "0xc6", "0x51", "0xcf", "0x82", "0x7d", "0x47", "0xbc", "0x6a", "0xc5", "0x14", "0x07", "0xb5", "0x89", "0xa5", "0x20", "0xa0", "0xd9", "0xc8", "0x38", "0xae", "0x12", "0x69", "0x03", "0x73", "0x9f", "0xbd", "0xd4", "0xf5", "0xcb", "0x72", "0xf6", "0x1e", "0xdb", "0x32", "0xdb", "0x50", "0xf4", "0xc5", "0x7a", "0xc9", "0x17", "0xc9", "0xb3", "0xf5", "0x22", "0x89", "0x59", "0x78", "0xa0", "0x6c", "0x64", "0x87", "0x2d", "0x05", "0x72", "0x73", "0xb7", "0x62", "0x58", "0x40", "0xb3", "0xc2", "0x34", "0x4a", "0xd9", "0x09", "0x85", "0xdb", "0xd0", "0xdf", "0x27", "0xff", "0x71", "0xd1", "0xcc", "0xa0", "0x9a", "0xcb", "0x5b", "0xb0", "0x51", "0xa0", "0x96", "0x2f", "0x73", "0xa5", "0x54", "0xc1", "0xdf", "0x11", "0x27", "0xbb", "0xd0", "0x98", "0xdb", "0x7b", "0x30", "0x20", "0xcf", "0x9b", "0xbf", "0xd9", "0x9e", "0x6a", "0xa2", "0x25", "0x45", "0xa2", "0x49", "0x57", "0x34", "0xe8", "0xa0", "0x66", "0xa0", "0xc4", "0xf6", "0x9d", "0xd1", "0x7b", "0x5e", "0x39", "0x6d", "0x6d", "0x34", "0x5a", "0x62", "0xcc", "0x0e", "0xca", "0x36", "0xc4", "0xa0", "0x0e", "0x21", "0xe2", "0x5b", "0xc6", "0xdf", "0xaa", "0xd1", "0x30", "0xb6", "0xbd", "0x63", "0x31", "0xbe", "0xa0", "0xa4", "0x72", "0x70", "0x46", "0xf3", "0xf2", "0x25", "0x2a", "0x82", "0x8e", "0x2e", "0x38", "0x09", "0xc2", "0x0c", "0xee", "0x7d", "0x62", "0x2a", "0xa9", "0xe6", "0x6d", "0xc0", "0xcf", "0xb3", "0xfb", "0xd2", "0x68", "0xea", "0xce", "0xdf", "0x9f", "0xa0", "0xd7", "0x64", "0x1c", "0x25", "0x19", "0xb6", "0xfe", "0x99", "0x87", "0xea", "0xb4", "0xf9", "0x72", "0x7c", "0x7b", "0xe3", "0x3d", "0xd7", "0x97", "0x3b", "0xc2", "0x44", "0xdc", "0x51", "0xc8", "0x2f", "0x46", "0x5e", "0x47", "0x0c", "0xff", "0xf4", "0xa0", "0xaf", "0xd3", "0xa3", "0x5e", "0xcf", "0xa0", "0x6e", "0xbb", "0x7a", "0x05", "0x52", "0x70", "0xcc", "0xf0", "0xbb", "0xb0", "0xf6", "0x24", "0x2f", "0xbc", "0xe3", "0x5b", "0x7b", "0x71", "0xcd", "0x01", "0x54", "0x42", "0x24", "0xd4", "0x62", "0xb9", "0xa0", "0x7a", "0x69", "0x9f", "0x74", "0xe4", "0x2a", "0x2e", "0x03", "0xc2", "0x9a", "0x31", "0x04", "0x86", "0x91", "0x15", "0xf6", "0x8a", "0xfc", "0x0d", "0x26", "0x2d", "0x6d", "0x6e", "0x7d", "0x0a", "0xdc", "0x1b", "0xdb", "0x75", "0xac", "0xd7", "0x01", "0xa0", "0xb3", "0xc7", "0x11", "0xf8", "0xf6", "0x79", "0x2a", "0xe0", "0xa9", "0xa9", "0x1c", "0xdb", "0xd4", "0xd7", "0x72", "0x6c", "0x0f", "0x9b", "0x80", "0xa4", "0x7e", "0x44", "0x78", "0x94", "0x69", "0x16", "0x96", "0xbd", "0x87", "0x55", "0xb9", "0x75", "0x80", "0xf8", "0xd1", "0x80", "0x80", "0xa0", "0xb5", "0x61", "0xe8", "0x58", "0x42", "0x11", "0x12", "0x23", "0x03", "0x8f", "0xd7", "0xef", "0x28", "0x5a", "0xbf", "0x8a", "0xf3", "0x48", "0xd3", "0xf4", "0x9f", "0xdb", "0x2a", "0x4a", "0x6a", "0x19", "0x76", "0xf0", "0xa0", "0x77", "0x50", "0x69", "0x80", "0xa0", "0xe1", "0xd8", "0x9f", "0x1f", "0x0b", "0x09", "0x1e", "0xde", "0x19", "0x4a", "0x7f", "0xd7", "0xc1", "0x74", "0xda", "0x2d", "0x80", "0x41", "0x08", "0x99", "0xfa", "0x28", "0x15", "0xa3", "0xcc", "0xd3", "0xa5", "0x1a", "0x64", "0xcf", "0x1f", "0xec", "0x80", "0x80", "0x80", "0xa0", "0x6b", "0x9e", "0x98", "0x9c", "0xf2", "0x9f", "0x77", "0xbc", "0x45", "0x58", "0x4c", "0x8a", "0xd6", "0x8b", "0x1f", "0x94", "0xc5", "0x43", "0xba", "0xee", "0x8a", "0x1b", "0x0f", "0x11", "0x0f", "0x52", "0x86", "0x82", "0x81", "0x7b", "0x0d", "0x95", "0x80", "0xa0", "0xef", "0x14", "0x4c", "0x6c", "0x46", "0x71", "0x2f", "0xb2", "0x44", "0x9e", "0x73", "0x8d", "0x20", "0x3d", "0xae", "0x68", "0xe0", "0x0f", "0xbd", "0x6b", "0x28", "0x78", "0x77", "0x29", "0xc9", "0x26", "0xa7", "0x62", "0x47", "0x1b", "0x81", "0xdf", "0xa0", "0x64", "0x05", "0xec", "0x9c", "0xaf", "0x9e", "0x5c", "0x84", "0x13", "0x86", "0x6d", "0x4b", "0x68", "0xbb", "0x46", "0x81", "0x2d", "0x2b", "0xfd", "0xef", "0x2c", "0x87", "0x3a", "0xfc", "0x80", "0xab", "0x87", "0xbe", "0xb6", "0x55", "0x4d", "0xe2", "0xa0", "0xf3", "0x06", "0xdc", "0xea", "0x8a", "0x09", "0x53", "0xc8", "0xe1", "0x4d", "0x8f", "0x27", "0xa5", "0xdf", "0xfc", "0x38", "0xf4", "0xcb", "0xbb", "0xa5", "0x6b", "0xd3", "0x71", "0xa3", "0x6f", "0x84", "0x7a", "0x11", "0xf6", "0xe6", "0xee", "0xb9", "0x80", "0x80", "0x80", "0x80", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0xf8", "0x70", "0x9d", "0x3f", "0x8c", "0x7f", "0xab", "0x57", "0x47", "0x1a", "0x2a", "0x41", "0x38", "0x7f", "0x9b", "0x0d", "0x0e", "0xab", "0x22", "0x94", "0x57", "0xc5", "0x02", "0x4b", "0xd6", "0xcf", "0xb7", "0x2d", "0xd7", "0xbb", "0xa2", "0xfe", "0xb8", "0x50", "0xf8", "0x4e", "0x01", "0x8a", "0x03", "0x13", "0x57", "0x0a", "0x84", "0xbf", "0x37", "0x8e", "0xfd", "0x25", "0xa0", "0xae", "0x27", "0x92", "0x24", "0x44", "0x17", "0xbc", "0x17", "0x49", "0xb9", "0xcd", "0x9a", "0x0b", "0xdc", "0x1c", "0x4a", "0x6c", "0xf3", "0x2f", "0x14", "0x7b", "0x37", "0x20", "0x2c", "0x8c", "0xb3", "0x59", "0x07", "0x77", "0x65", "0x9a", "0xec", "0xa0", "0xe2", "0xe7", "0xa7", "0x52", "0x4a", "0x98", "0xce", "0x62", "0x9e", "0xe4", "0x06", "0xc1", "0x5c", "0x51", "0xa6", "0x83", "0xe4", "0x16", "0x7f", "0x0b", "0x74", "0xea", "0x23", "0x05", "0x66", "0xdd", "0xec", "0xe7", "0xae", "0x9d", "0x6f", "0x0b", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00",];
  const depth = "0x08";
  const value = ["0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0x00", "0xf8", "0x4e", "0x01", "0x8a", "0x03", "0x13", "0x57", "0x0a", "0x84", "0xbf", "0x37", "0x8e", "0xfd", "0x25", "0xa0", "0xae", "0x27", "0x92", "0x24", "0x44", "0x17", "0xbc", "0x17", "0x49", "0xb9", "0xcd", "0x9a", "0x0b", "0xdc", "0x1c", "0x4a", "0x6c", "0xf3", "0x2f", "0x14", "0x7b", "0x37", "0x20", "0x2c", "0x8c", "0xb3", "0x59", "0x07", "0x77", "0x65", "0x9a", "0xec", "0xa0", "0xe2", "0xe7", "0xa7", "0x52", "0x4a", "0x98", "0xce", "0x62", "0x9e", "0xe4", "0x06", "0xc1", "0x5c", "0x51", "0xa6", "0x83", "0xe4", "0x16", "0x7f", "0x0b", "0x74", "0xea", "0x23", "0x05", "0x66", "0xdd", "0xec", "0xe7", "0xae", "0x9d", "0x6f", "0x0b",];

  return [
    balance, 
    codeHash, 
    nonce, 
    stateRoot, 
    key, 
    value, 
    proof, 
    depth
  ];
};