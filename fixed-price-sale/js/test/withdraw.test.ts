import BN from 'bn.js';
import test from 'tape';
import { ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { assertConfirmedTransaction, defaultSendOptions } from '@metaplex-foundation/amman';
import { Edition, EditionMarker, Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { findPayoutTicketAddress, findTradeHistoryAddress } from '../src/utils';
import { closeMarket, createBuyTransaction, createWithdrawTransaction } from './transactions';
import { killStuckProcess, logDebug, sleep } from './utils';
import {
  createPrerequisites,
  createStore,
  initSellingResource,
  createMarket,
  mintNFT,
  mintTokenToAccount,
} from './actions';

killStuckProcess();

test('withdraw: success', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: withdraw.test.ts ~ line 22 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58())
  console.log("🚀 ~ file: withdraw.test.ts ~ line 22 ~ test ~ connection", connection["_rpcEndpoint"])
  console.log("🚀 ~ file: withdraw.test.ts ~ line 22 ~ test ~ payer", payer.publicKey.toBase58())

  const store = await createStore({
    test: t,
    transactionHandler,
    payer,
    connection,
    params: {
      name: 'Store',
      description: 'Description',
    },
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 36 ~ test ~ store", store.publicKey.toBase58())

  const { sellingResource, vault, vaultOwner, vaultOwnerBump, resourceMint } =
    await initSellingResource({
      test: t,
      transactionHandler,
      payer,
      connection,
      store: store.publicKey,
      maxSupply: 100,
    });
    console.log("🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ resourceMint", resourceMint.publicKey.toBase58())
    console.log("🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ vaultOwnerBump", vaultOwnerBump)
    console.log("🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ vaultOwner", vaultOwner.toBase58())
    console.log("🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ vault", vault.publicKey.toBase58())
    console.log("🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ sellingResource", sellingResource.publicKey.toBase58())
  const { mint: treasuryMint, tokenAccount: userTokenAcc } = await mintNFT({
    transactionHandler,
    payer,
    connection,
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 54 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58())
  console.log("🚀 ~ file: withdraw.test.ts ~ line 59 ~ test ~ userTokenAcc", userTokenAcc.publicKey.toBase58())

  const startDate = Math.round(Date.now() / 1000) + 1;
  console.log("🚀 ~ file: withdraw.test.ts ~ line 62 ~ test ~ startDate", startDate)
  const params = {
    name: 'Market',
    description: '',
    startDate,
    endDate: null,
    mutable: true,
    price: 1,
    piecesInOneWallet: 1,
  };

  const { market, treasuryHolder, treasuryOwnerBump, treasuryOwner } = await createMarket({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    sellingResource: sellingResource.publicKey,
    treasuryMint: treasuryMint.publicKey,
    params,
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ treasuryOwner", treasuryOwner.toBase58())
  console.log("🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ treasuryOwnerBump", treasuryOwnerBump)
  console.log("🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ treasuryHolder", treasuryHolder.publicKey.toBase58())
  console.log("🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ market", market.publicKey.toBase58())

  await sleep(3000);

  const [tradeHistory, tradeHistoryBump] = await findTradeHistoryAddress(
    payer.publicKey,
    market.publicKey,
  );
  console.log("🚀 ~ file: withdraw.test.ts ~ line 94 ~ test ~ tradeHistory", tradeHistory.toBase58())
  console.log("🚀 ~ file: withdraw.test.ts ~ line 91 ~ test ~ tradeHistoryBump", tradeHistoryBump)

  const { mint: newMint } = await mintTokenToAccount({
    connection,
    payer: payer.publicKey,
    transactionHandler,
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 98 ~ test ~ newMint", newMint.publicKey.toBase58())


  logDebug('new mint', newMint.publicKey.toBase58());

  const newMintEdition = await Edition.getPDA(newMint.publicKey);
  console.log("🚀 ~ file: withdraw.test.ts ~ line 107 ~ test ~ newMintEdition", newMintEdition.toBase58())
  const newMintMetadata = await Metadata.getPDA(newMint.publicKey);
  console.log("🚀 ~ file: withdraw.test.ts ~ line 109 ~ test ~ newMintMetadata", newMintMetadata.toBase58())

  const resourceMintMasterEdition = await Edition.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: withdraw.test.ts ~ line 112 ~ test ~ resourceMintMasterEdition", resourceMintMasterEdition.toBase58())  
  const resourceMintMetadata = await Metadata.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: withdraw.test.ts ~ line 114 ~ test ~ resourceMintMetadata", resourceMintMetadata.toBase58())
  const resourceMintEditionMarker = await EditionMarker.getPDA(resourceMint.publicKey, new BN(1));
  console.log("🚀 ~ file: withdraw.test.ts ~ line 115 ~ test ~ resourceMintEditionMarker", resourceMintEditionMarker.toBase58())

  await sleep(1000);

  const { tx: buyTx } = await createBuyTransaction({
    connection,
    buyer: payer.publicKey,
    userTokenAccount: userTokenAcc.publicKey,
    resourceMintMetadata,
    resourceMintEditionMarker,
    resourceMintMasterEdition,
    sellingResource: sellingResource.publicKey,
    market: market.publicKey,
    marketTreasuryHolder: treasuryHolder.publicKey,
    vaultOwner,
    tradeHistory,
    tradeHistoryBump,
    vault: vault.publicKey,
    vaultOwnerBump,
    newMint: newMint.publicKey,
    newMintEdition,
    newMintMetadata,
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 121 ~ test ~ buyTx", buyTx)

  const buyRes = await transactionHandler.sendAndConfirmTransaction(
    buyTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: withdraw.test.ts ~ line 146 ~ test ~ buyRes", buyRes.txSignature)

  logDebug('buy:: successful purchase');
  assertConfirmedTransaction(t, buyRes.txConfirmed);

  await sleep(3000);

  const marketTx = await closeMarket({
    transactionHandler,
    payer,
    connection,
    market,
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 159 ~ test ~ marketTx - closeMarket", marketTx)

  const marketRes = await transactionHandler.sendAndConfirmTransaction(
    marketTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: withdraw.test.ts ~ line 166 ~ test ~ marketRes - closeMarket", marketRes.txSignature)

  logDebug(`market: ${market.publicKey}`);
  assertConfirmedTransaction(t, marketRes.txConfirmed);

  const [payoutTicket, payoutTicketBump] = await findPayoutTicketAddress(
    market.publicKey,
    payer.publicKey,
  );
  console.log("🚀 ~ file: withdraw.test.ts ~ line 175 ~ test ~ payoutTicket", payoutTicket.toBase58())
  console.log("🚀 ~ file: withdraw.test.ts ~ line 172 ~ test ~ payoutTicketBump", payoutTicketBump)

  const destination = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    treasuryMint.publicKey,
    payer.publicKey,
  );
  console.log("🚀 ~ file: withdraw.test.ts ~ line 184 ~ test ~ destination", destination.toBase58())

  const metadata = await Metadata.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: withdraw.test.ts ~ line 187 ~ test ~ metadata", metadata.toBase58())

  const withdrawTx = await createWithdrawTransaction({
    connection,
    payer,
    market: market.publicKey,
    sellingResource: sellingResource.publicKey,
    metadata,
    treasuryHolder: treasuryHolder.publicKey,
    treasuryMint: treasuryMint.publicKey,
    destination,
    payoutTicket,
    payoutTicketBump,
    treasuryOwnerBump,
    treasuryOwner,
  });
  console.log("🚀 ~ file: withdraw.test.ts ~ line 203 ~ test ~ withdrawTx", withdrawTx)

  const withdrawRes = await transactionHandler.sendAndConfirmTransaction(
    withdrawTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: withdraw.test.ts ~ line 210 ~ test ~ withdrawRes", withdrawRes.txSignature)

  assertConfirmedTransaction(t, withdrawRes.txConfirmed);

  const payoutTicketData = await connection.getAccountInfo(payoutTicket);
  console.log("🚀 ~ file: withdraw.test.ts ~ line 215 ~ test ~ payoutTicketData", payoutTicketData)
  console.log("🚀 ~ file: withdraw.test.ts ~ line 215 ~ test ~ payoutTicketData - owner", payoutTicketData.owner.toBase58())
  t.ok(payoutTicketData?.owner);
});
