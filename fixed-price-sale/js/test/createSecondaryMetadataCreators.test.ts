import test from 'tape';
import {
  assertConfirmedTransaction,
  assertError,
  defaultSendOptions,
} from '@metaplex-foundation/amman';

import { CreatorAccountData } from '../src';
import { killStuckProcess, logDebug } from './utils';
import { createPrerequisites, createStore, initSellingResource } from './actions';
import { createSecondaryMetadataCreators } from './transactions';

killStuckProcess();

test('create-secondary-metadata-creators: success', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 17 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58())
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 17 ~ test ~ connection", connection["_rpcEndpoint"])
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 17 ~ test ~ payer", payer.publicKey.toBase58())

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
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 31 ~ test ~ store", store.publicKey.toBase58())

  const { metadata } = await initSellingResource({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    maxSupply: 100,
  });
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 34 ~ test ~ metadata - initSellingResource", metadata.toBase58())

  const creator = CreatorAccountData.fromArgs({
    address: payer.publicKey,
    share: 100,
    verified: false,
  });
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 48 ~ test ~ creator", creator.address.toBase58())

  const { secondaryMetadataCreators, createSecondaryMetadataCreatorsTx } =
    await createSecondaryMetadataCreators({
      test: t,
      transactionHandler,
      payer,
      connection,
      metadata,
      creators: [creator],
    });
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 51 ~ test ~ createSecondaryMetadataCreatorsTx", createSecondaryMetadataCreatorsTx)
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 51 ~ test ~ secondaryMetadataCreators", secondaryMetadataCreators.toBase58())

  const createSecondaryMetadataCreatorsRes = await transactionHandler.sendAndConfirmTransaction(
    createSecondaryMetadataCreatorsTx,
    [payer],
    defaultSendOptions,
  );
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 67 ~ test ~ createSecondaryMetadataCreatorsRes", createSecondaryMetadataCreatorsRes.txSignature)

  logDebug(`secondary-metadata-creators: ${secondaryMetadataCreators.toBase58()}`);
  assertConfirmedTransaction(t, createSecondaryMetadataCreatorsRes.txConfirmed);
});

test('create-secondary-metadata-creators: empty creators', async (t) => {
  const { payer, connection, transactionHandler } = await createPrerequisites();
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 75 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58())
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 75 ~ test ~ connection", connection["_rpcEndpoint"])
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 75 ~ test ~ payer", payer.publicKey.toBase58())

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
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 89 ~ test ~ store", store.publicKey.toBase58())

  const { metadata } = await initSellingResource({
    test: t,
    transactionHandler,
    payer,
    connection,
    store: store.publicKey,
    maxSupply: 100,
  });
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 92 ~ test ~ metadata", metadata.toBase58())

  const creators = [];
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 102 ~ test ~ creators", creators)

  const { createSecondaryMetadataCreatorsTx } = await createSecondaryMetadataCreators({
    test: t,
    transactionHandler,
    payer,
    connection,
    metadata,
    creators,
  });
  console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 104 ~ test ~ createSecondaryMetadataCreatorsTx", createSecondaryMetadataCreatorsTx)
  console.log("Expecting Next Line will throw an error, Tx ID will not be printed, instead catch block will be executed")
  try {
    const tx = await transactionHandler.sendAndConfirmTransaction(
      createSecondaryMetadataCreatorsTx,
      [payer],
      defaultSendOptions,
    );
    console.log("🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 121 ~ test ~ tx - sendAndConfirmTransaction: ", tx.txSignature)
    
    t.fail('expected transaction to fail');
  } catch (err) {
    assertError(t, err, [/custom program error/i, /0x1791/i]);
  }
});
