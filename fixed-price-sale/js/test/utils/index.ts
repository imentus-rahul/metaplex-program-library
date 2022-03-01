import debug from 'debug';
import test from 'tape';
import { clusterApiUrl } from '@solana/web3.js';
import { LOCALHOST } from '@metaplex-foundation/amman';

export { sleep } from './sleep';
export { createAndSignTransaction } from './createAndSignTransaction';

export const logDebug = debug('mpl:fp-test:debug');

export const DEVNET = clusterApiUrl('devnet');
// export const connectionURL = process.env.USE_DEVNET != null ? DEVNET : LOCALHOST;
// export const connectionURL = "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899";
export const connectionURL = "https://wispy-shy-paper.solana-devnet.quiknode.pro/ea6417f447e7eed8a4d5b7b28a640613c7ec7c52/";


export function killStuckProcess() {
  // solana web socket keeps process alive for longer than necessary which we
  // "fix" here
  test.onFinish(() => process.exit(0));
}
