import { Connection, Keypair } from '@solana/web3.js';
import { airdrop, PayerTransactionHandler } from '@metaplex-foundation/amman';

import { connectionURL } from '../utils';
import 'dotenv/config';

export const createPrerequisites = async () => {
  // const payer = Keypair.generate();
  const payer = Keypair.fromSecretKey(new Uint8Array([177,2,62,217,11,36,87,93,146,91,14,58,26,182,211,163,181,214,253,116,250,146,46,35,53,228,188,201,88,189,4,23,236,87,85,27,38,238,126,229,130,54,105,77,206,178,99,92,147,46,250,181,99,30,89,168,156,33,181,247,118,43,53,182]));

  console.log("connectionURL: ", connectionURL);
  const connection = new Connection(connectionURL, 'confirmed');
  const transactionHandler = new PayerTransactionHandler(connection, payer);

  // await airdrop(connection, payer.publicKey, 30);
  console.log("Balance: ", await connection.getBalance(payer.publicKey) );

  return { payer, connection, transactionHandler };
};
