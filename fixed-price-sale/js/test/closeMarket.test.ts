import test from 'tape';
import {
  mintNFT,
  createStore,
  createPrerequisites,
  initSellingResource,
  createMarket,
} from './actions';
import {
  assertConfirmedTransaction,
  assertError,
  defaultSendOptions,
} from '@metaplex-foundation/amman';
import { killStuckProcess, logDebug, sleep } from './utils';
import { closeMarket } from './transactions';
import { MarketAccountData } from '../src';

killStuckProcess();

// TODO: This test is flaky and attempting to fix via sleep is not working.
// It needs to be fixed properly and reenabled ASAP
test.skip('close-market: success', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58())
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ connection", connection["_rpcEndpoint"])
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ payer", payer.publicKey.toBase58())

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
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 36 ~ test ~ store", store.publicKey.toBase58())

  const { sellingResource } = await initSellingResource({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    maxSupply: 100,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 39 ~ test ~ sellingResource", sellingResource.publicKey.toBase58())


  const { mint: treasuryMint } = await mintNFT({
    transactionHandler,
    payer,
    connection,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 49 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58())


  const startDate = Math.round(Date.now() / 1000) + 2;
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 56 ~ test ~ startDate", startDate)
  const params = {
    name: 'Market',
    description: '',
    startDate,
    endDate: null,
    mutable: true,
    price: 1,
    piecesInOneWallet: 1,
  };

  const { market } = await createMarket({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    sellingResource: sellingResource.publicKey,
    treasuryMint: treasuryMint.publicKey,
    params,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 67 ~ test ~ market", market.publicKey.toBase58())

  await sleep(3000);

  const marketTx = await closeMarket({
    transactionHandler,
    payer,
    connection,
    market,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 87 ~ test ~ marketTx - closeMarket: ", marketTx)

  const MarketRes = await transactionHandler.sendAndConfirmTransaction(
    marketTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 94 ~ test ~ MarketRes", MarketRes.txSignature)

  logDebug(`market: ${market.publicKey}`);
  assertConfirmedTransaction(t, MarketRes.txConfirmed);

  const marketAccount = await connection.getAccountInfo(market.publicKey);
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 100 ~ test ~ marketAccount", marketAccount)
  const [marketData] = MarketAccountData.deserialize(marketAccount?.data as Buffer);
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 102 ~ test ~ marketData", marketData)

  t.assert('Ended' === marketData.state.toString());
});

test('close-market: should fail when the market has the specific endDate', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58())
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ connection", connection["_rpcEndpoint"])
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ payer", payer.publicKey.toBase58())

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
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 125 ~ test ~ store", store.publicKey.toBase58())

  const { sellingResource } = await initSellingResource({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    maxSupply: 100,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 128 ~ test ~ sellingResource", sellingResource.publicKey.toBase58())


  const { mint: treasuryMint } = await mintNFT({
    transactionHandler,
    payer,
    connection,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 138 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58())

  const startDate = Math.round(Date.now() / 1000) + 2;
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 145 ~ test ~ startDate", startDate)
  const params = {
    name: 'Market',
    description: '',
    startDate,
    endDate: startDate + 4000,
    mutable: true,
    price: 1,
    piecesInOneWallet: 1,
  };

  const { market } = await createMarket({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    sellingResource: sellingResource.publicKey,
    treasuryMint: treasuryMint.publicKey,
    params,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 157 ~ test ~ market", market.publicKey.toBase58())

  await sleep(3000);

  const marketTx = await closeMarket({
    transactionHandler,
    payer,
    connection,
    market,
  });
  console.log("🚀 ~ file: closeMarket.test.ts ~ line 176 ~ test ~ marketTx", marketTx)

  logDebug(`market: ${market.publicKey}`);

  console.log("Expected Transaction to fail in next line")
  try {
    const tx = await transactionHandler.sendAndConfirmTransaction(marketTx, [payer], defaultSendOptions);
    console.log("🚀 ~ file: closeMarket.test.ts ~ line 182 ~ test ~ tx", tx.txSignature)
  } catch (error) {
    logDebug('expected transaction to fail due to limited market duration ');
    assertError(t, error, [/0x1782/i]);
  }
});
