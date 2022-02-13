import BN from 'bn.js';
import test from 'tape';
import { ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  assertConfirmedTransaction,
  assertError,
  defaultSendOptions,
} from '@metaplex-foundation/amman';
import { Edition, EditionMarker, Metadata } from '@metaplex-foundation/mpl-token-metadata';
import {
  findPayoutTicketAddress,
  findSecondaryMetadataCreatorsAddress,
  findTradeHistoryAddress,
} from '../src/utils';
import {
  createPrerequisites,
  createStore,
  initSellingResource,
  createMarket,
  mintNFT,
  mintTokenToAccount,
} from './actions';

import {
  closeMarket,
  createBuyTransaction,
  createTokenAccount,
  createClaimResourceTransaction,
  createWithdrawTransaction,
} from './transactions';
import { killStuckProcess, logDebug, sleep } from './utils';

killStuckProcess();

test('claim resource: success', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: claimResource.test.ts ~ line 37 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58());
  console.log("🚀 ~ file: claimResource.test.ts ~ line 37 ~ test ~ connection", connection["_rpcEndpoint"]);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 37 ~ test ~ payer", payer.publicKey.toBase58())

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
  console.log("🚀 ~ file: claimResource.test.ts ~ line 51 ~ test ~ store", store.publicKey.toBase58())

  const { sellingResource, vault, vaultOwner, vaultOwnerBump, resourceMint } =
    await initSellingResource({
      test: t,
      transactionHandler,
      payer,
      connection,
      store: store.publicKey,
      maxSupply: 100,
    });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 54 ~ test ~ resourceMint", resourceMint.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 54 ~ test ~ vaultOwnerBump", vaultOwnerBump)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 54 ~ test ~ vaultOwner", vaultOwner.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 54 ~ test ~ vault", vault.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 54 ~ test ~ sellingResource", sellingResource.publicKey.toBase58())

  const { mint: treasuryMint, tokenAccount: userTokenAcc } = await mintNFT({
    transactionHandler,
    payer,
    connection,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 69 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 74 ~ test ~ userTokenAcc", userTokenAcc.publicKey.toBase58())

  const startDate = Math.round(Date.now() / 1000) + 1;
  console.log("🚀 ~ file: claimResource.test.ts ~ line 77 ~ test ~ startDate", startDate)
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
  console.log("🚀 ~ file: claimResource.test.ts ~ line 89 ~ test ~ treasuryOwner", treasuryOwner.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 89 ~ test ~ treasuryOwnerBump", treasuryOwnerBump)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 89 ~ test ~ treasuryHolder", treasuryHolder.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 89 ~ test ~ market", market.publicKey.toBase58())

  await sleep(3000);

  const [tradeHistory, tradeHistoryBump] = await findTradeHistoryAddress(
    payer.publicKey,
    market.publicKey,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 109 ~ test ~ tradeHistory", tradeHistory.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 106 ~ test ~ tradeHistoryBump", tradeHistoryBump)

  const { mint: newMint } = await mintTokenToAccount({
    connection,
    payer: payer.publicKey,
    transactionHandler,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 113 ~ test ~ newMint", newMint.publicKey.toBase58())

  logDebug('new mint', newMint.publicKey.toBase58());

  const newMintEdition = await Edition.getPDA(newMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 122 ~ test ~ newMintEdition", newMintEdition.toBase58())
  const newMintMetadata = await Metadata.getPDA(newMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 124 ~ test ~ newMintMetadata", newMintMetadata.toBase58())

  const resourceMintMasterEdition = await Edition.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 127 ~ test ~ resourceMintMasterEdition", resourceMintMasterEdition.toBase58())
  const resourceMintMetadata = await Metadata.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 129 ~ test ~ resourceMintMetadata", resourceMintMetadata.toBase58())
  const resourceMintEditionMarker = await EditionMarker.getPDA(resourceMint.publicKey, new BN(1));
  console.log("🚀 ~ file: claimResource.test.ts ~ line 131 ~ test ~ resourceMintEditionMarker", resourceMintEditionMarker.toBase58())

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
  console.log("🚀 ~ file: claimResource.test.ts ~ line 136 ~ test ~ buyTx", buyTx)

  const buyRes = await transactionHandler.sendAndConfirmTransaction(
    buyTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 161 ~ test ~ buyRes", buyRes.txSignature)

  logDebug('buy:: successful purchase');
  assertConfirmedTransaction(t, buyRes.txConfirmed);

  await sleep(3000);

  const marketTx = await closeMarket({
    transactionHandler,
    payer,
    connection,
    market,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 174 ~ test ~ marketTx - closeMarket", marketTx)

  const marketRes = await transactionHandler.sendAndConfirmTransaction(
    marketTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 181 ~ test ~ marketRes", marketRes.txSignature)

  logDebug(`market: ${market.publicKey}`);
  assertConfirmedTransaction(t, marketRes.txConfirmed);

  const [payoutTicket, payoutTicketBump] = await findPayoutTicketAddress(
    market.publicKey,
    payer.publicKey,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 187 ~ test ~ payoutTicketBump", payoutTicketBump)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 190 ~ test ~ payoutTicket", payoutTicket.toBase58())

  const destination = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    treasuryMint.publicKey,
    payer.publicKey,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 199 ~ test ~ destination", destination.toBase58())

  const metadata = await Metadata.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 202 ~ test ~ metadata", metadata.toBase58())

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
  console.log("🚀 ~ file: claimResource.test.ts ~ line 218 ~ test ~ withdrawTx", withdrawTx)

  const withdrawRes = await transactionHandler.sendAndConfirmTransaction(
    withdrawTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 225 ~ test ~ withdrawRes", withdrawRes.txSignature)

  assertConfirmedTransaction(t, withdrawRes.txConfirmed);

  const { tokenAccount: claimToken, createTokenTx } = await createTokenAccount({
    payer: payer.publicKey,
    mint: resourceMint.publicKey,
    connection,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 230 ~ test ~ createTokenTx", createTokenTx)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 234 ~ test ~ claimToken", claimToken.publicKey.toBase58())

  const claimTokenRes = await transactionHandler.sendAndConfirmTransaction(
    createTokenTx,
    [claimToken],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 242 ~ test ~ claimTokenRes", claimTokenRes.txSignature)

  const [secondaryMetadataCreators] = await findSecondaryMetadataCreatorsAddress(metadata);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 245 ~ test ~ secondaryMetadataCreators", secondaryMetadataCreators.toBase58())

  assertConfirmedTransaction(t, claimTokenRes.txConfirmed);

  const claimResourceTx = await createClaimResourceTransaction({
    connection,
    payer,
    market: market.publicKey,
    sellingResource: sellingResource.publicKey,
    metadata,
    secondaryMetadataCreators,
    treasuryHolder: treasuryHolder.publicKey,
    destination: claimToken.publicKey,
    vault: vault.publicKey,
    vaultOwnerBump,
    owner: vaultOwner,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 262 ~ test ~ claimResourceTx", claimResourceTx)

  const claimResourceRes = await transactionHandler.sendAndConfirmTransaction(
    claimResourceTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 269 ~ test ~ claimResourceRes", claimResourceRes.txSignature)

  assertConfirmedTransaction(t, claimResourceRes.txConfirmed);

  const token = new Token(connection, resourceMint.publicKey, TOKEN_PROGRAM_ID, payer);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 274 ~ test ~ token", token.publicKey.toBase58())
  const createdToken = await token.getAccountInfo(claimToken.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 276 ~ test ~ createdToken", createdToken.address.toBase58())

  console.log("Assert 1: createdToken.mint.toBase58() === resourceMint.publicKey.toBase58()")
  console.log("Assert 2: createdToken.owner.toBase58() === payer.publicKey.toBase58()")
  t.assert(createdToken.mint.toBase58() === resourceMint.publicKey.toBase58());
  t.assert(createdToken.owner.toBase58() === payer.publicKey.toBase58());
});

test('claim resource:  should fail due to the treasury not empty', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: claimResource.test.ts ~ line 284 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 284 ~ test ~ connection", connection["_rpcEndpoint"])
  console.log("🚀 ~ file: claimResource.test.ts ~ line 284 ~ test ~ payer", payer.publicKey.toBase58())

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
  console.log("🚀 ~ file: claimResource.test.ts ~ line 300 ~ test ~ store", store.publicKey.toBase58())

  const { sellingResource, vault, vaultOwner, vaultOwnerBump, resourceMint } =
    await initSellingResource({
      test: t,
      transactionHandler,
      payer,
      connection,
      store: store.publicKey,
      maxSupply: 100,
    });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 303 ~ test ~ resourceMint", resourceMint.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 303 ~ test ~ vaultOwnerBump", vaultOwnerBump)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 303 ~ test ~ vaultOwner", vaultOwner.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 303 ~ test ~ vault", vault.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 303 ~ test ~ sellingResource", sellingResource.publicKey.toBase58())

  const { mint: treasuryMint, tokenAccount: userTokenAcc } = await mintNFT({
    transactionHandler,
    payer,
    connection,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 318 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 323 ~ test ~ userTokenAcc", userTokenAcc.publicKey.toBase58())

  const startDate = Math.round(Date.now() / 1000) + 1;
  console.log("🚀 ~ file: claimResource.test.ts ~ line 326 ~ test ~ startDate", startDate)
  const params = {
    name: 'Market',
    description: '',
    startDate,
    endDate: null,
    mutable: true,
    price: 1,
    piecesInOneWallet: 1,
  };
  const { market, treasuryHolder } = await createMarket({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    sellingResource: sellingResource.publicKey,
    treasuryMint: treasuryMint.publicKey,
    params,
  });
  console.log("Here the treasury holder is important to note")
  console.log("🚀 ~ file: claimResource.test.ts ~ line 337 ~ test ~ treasuryHolder", treasuryHolder.publicKey.toBase58())
  console.log("🚀 ~ file: claimResource.test.ts ~ line 337 ~ test ~ market", market.publicKey.toBase58())
  await sleep(3000);

  const [tradeHistory, tradeHistoryBump] = await findTradeHistoryAddress(
    payer.publicKey,
    market.publicKey,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 352 ~ test ~ tradeHistoryBump", tradeHistoryBump)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 355 ~ test ~ tradeHistory", tradeHistory.toBase58())

  const { mint: newMint } = await mintTokenToAccount({
    connection,
    payer: payer.publicKey,
    transactionHandler,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 359 ~ test ~ newMint", newMint.publicKey.toBase58())


  logDebug('new mint', newMint.publicKey.toBase58());

  const newMintEdition = await Edition.getPDA(newMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 368 ~ test ~ newMintEdition", newMintEdition.toBase58())
  const newMintMetadata = await Metadata.getPDA(newMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 370 ~ test ~ newMintMetadata", newMintMetadata.toBase58())

  const resourceMintMasterEdition = await Edition.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 373 ~ test ~ resourceMintMasterEdition", resourceMintMasterEdition.toBase58())
  const resourceMintMetadata = await Metadata.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 375 ~ test ~ resourceMintMetadata", resourceMintMetadata.toBase58())
  const resourceMintEditionMarker = await EditionMarker.getPDA(resourceMint.publicKey, new BN(1));
  console.log("🚀 ~ file: claimResource.test.ts ~ line 377 ~ test ~ resourceMintEditionMarker", resourceMintEditionMarker.toBase58())

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
  console.log("🚀 ~ file: claimResource.test.ts ~ line 382 ~ test ~ buyTx", buyTx)

  const buyRes = await transactionHandler.sendAndConfirmTransaction(
    buyTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 407 ~ test ~ buyRes", buyRes.txSignature)

  logDebug('buy:: successful purchase');
  assertConfirmedTransaction(t, buyRes.txConfirmed);

  await sleep(3000);

  const marketTx = await closeMarket({
    transactionHandler,
    payer,
    connection,
    market,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 420 ~ test ~ marketTx - Close Market", marketTx)

  const marketRes = await transactionHandler.sendAndConfirmTransaction(
    marketTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 427 ~ test ~ marketRes", marketRes.txSignature)

  logDebug(`market: ${market.publicKey}`);
  assertConfirmedTransaction(t, marketRes.txConfirmed);

  const metadata = await Metadata.getPDA(resourceMint.publicKey);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 433 ~ test ~ metadata", metadata.toBase58())

  const { tokenAccount: claimToken, createTokenTx } = await createTokenAccount({
    payer: payer.publicKey,
    mint: resourceMint.publicKey,
    connection,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 436 ~ test ~ createTokenTx", createTokenTx)
  console.log("🚀 ~ file: claimResource.test.ts ~ line 440 ~ test ~ claimToken", claimToken.publicKey.toBase58())

  const claimTokenRes = await transactionHandler.sendAndConfirmTransaction(
    createTokenTx,
    [claimToken],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: claimResource.test.ts ~ line 448 ~ test ~ claimTokenRes", claimTokenRes.txSignature)

  const [secondaryMetadataCreators] = await findSecondaryMetadataCreatorsAddress(metadata);
  console.log("🚀 ~ file: claimResource.test.ts ~ line 451 ~ test ~ secondaryMetadataCreators", secondaryMetadataCreators.toBase58())

  assertConfirmedTransaction(t, claimTokenRes.txConfirmed);

  const claimResourceTx = await createClaimResourceTransaction({
    connection,
    payer,
    market: market.publicKey,
    sellingResource: sellingResource.publicKey,
    metadata,
    secondaryMetadataCreators,
    treasuryHolder: treasuryHolder.publicKey,
    destination: claimToken.publicKey,
    vault: vault.publicKey,
    vaultOwnerBump,
    owner: vaultOwner,
  });
  console.log("🚀 ~ file: claimResource.test.ts ~ line 468 ~ test ~ claimResourceTx", claimResourceTx)
  console.log("In next line, the transaction should fail, expected transaction to fail due to 'treasury not empty")
  try {
    const tx = await transactionHandler.sendAndConfirmTransaction(
      claimResourceTx,
      [payer],
      defaultSendOptions,
    );
    console.log("🚀 ~ file: claimResource.test.ts ~ line 476 ~ test ~ tx", tx)
  } catch (error) {
    logDebug(`expected transaction to fail due to 'treasury not empty'`);

    assertError(t, error, [/0x178a/i]);
  }
});
