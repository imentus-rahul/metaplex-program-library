import test from 'tape';
import {
  assertConfirmedTransaction,
  defaultSendOptions,
  PayerTransactionHandler,
} from '@metaplex-foundation/amman';
import { Connection, Keypair, PublicKey, Transaction } from '@solana/web3.js';

import { createTokenAccount } from '../transactions';
import { createAndSignTransaction, logDebug } from '../utils';

import { findTreasuryOwnerAddress } from '../../src/utils';
import { createCreateMarketInstruction, CreateMarketInstructionArgs } from '../../src/instructions';

type CreateMarketParams = {
  test: test.Test;
  transactionHandler: PayerTransactionHandler;
  payer: Keypair;
  connection: Connection;
  store: PublicKey;
  sellingResource: PublicKey;
  treasuryMint: PublicKey;
  params: Omit<CreateMarketInstructionArgs, 'treasuryOwnerBump'>;
};

export const createMarket = async ({
  test,
  transactionHandler,
  payer,
  connection,
  store,
  sellingResource,
  treasuryMint,
  params,
}: CreateMarketParams): Promise<{
  market: Keypair;
  treasuryHolder: Keypair;
  treasuryOwnerBump: number;
  treasuryOwner: PublicKey;
}> => {
  const [treasuryOwner, treasuryOwnerBump] = await findTreasuryOwnerAddress(
    treasuryMint,
    sellingResource,
  );
  console.log("🚀 ~ file: createMarket.ts ~ line 42 ~ treasuryOwnerBump", treasuryOwnerBump)
  console.log("🚀 ~ file: createMarket.ts ~ line 42 ~ treasuryOwner", treasuryOwner.toBase58())

  logDebug(`treasuryOwner: ${treasuryOwner.toBase58()}`);

  const { tokenAccount: treasuryHolder, createTokenTx } = await createTokenAccount({
    payer: payer.publicKey,
    connection,
    mint: treasuryMint,
    owner: treasuryOwner,
  });
  console.log("🚀 ~ file: createMarket.ts ~ line 56 ~ treasuryHolder", treasuryHolder.publicKey.toBase58())
  console.log("🚀 ~ file: createMarket.ts ~ line 51 ~ createTokenTx", createTokenTx)

  const createVaultRes = await transactionHandler.sendAndConfirmTransaction(
    createTokenTx,
    [treasuryHolder],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: createMarket.ts ~ line 64 ~ createVaultRes", createVaultRes.txSignature)

  logDebug(`treasuryHolder: ${treasuryHolder.publicKey}`);
  assertConfirmedTransaction(test, createVaultRes.txConfirmed);

  const market = Keypair.generate();
  console.log("🚀 ~ file: createMarket.ts ~ line 70 ~ market", market.publicKey.toBase58())

  const instruction = createCreateMarketInstruction(
    {
      market: market.publicKey,
      store,
      sellingResourceOwner: payer.publicKey,
      sellingResource,
      mint: treasuryMint,
      treasuryHolder: treasuryHolder.publicKey,
      owner: treasuryOwner,
    },
    {
      treasuryOwnerBump,
      ...params,
    },
  );

  const marketTx: Transaction = await createAndSignTransaction(
    connection,
    payer,
    [instruction],
    [market],
  );
  console.log("🚀 ~ file: createMarket.ts ~ line 89 ~ marketTx", marketTx)
  console.log("🚀 ~ file: createMarket.ts ~ line 89 ~ marketTx", marketTx["feePayer"].toBase58())

  const marketRes = await transactionHandler.sendAndConfirmTransaction(
    marketTx,
    [market],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: createMarket.ts ~ line 101 ~ marketRes", marketRes.txSignature)

  logDebug(`market: ${market.publicKey}`);
  assertConfirmedTransaction(test, marketRes.txConfirmed);

  return { market, treasuryHolder, treasuryOwnerBump, treasuryOwner };
};
