### result
```
imentus@imentus:~/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js$ node test/createSecondaryMetadataCreators.test.js 
TAP version 13
# create-secondary-metadata-creators: success
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 17 ~ test ~ transactionHandler CEsoHY8Ewvgxyxk5V8wYETBWdU9ogxrVEZFS1rSnaEHW
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 17 ~ test ~ connection http://127.0.0.1:8899/
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 17 ~ test ~ payer CEsoHY8Ewvgxyxk5V8wYETBWdU9ogxrVEZFS1rSnaEHW
ok 1 confirmed transaction has no error
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 31 ~ test ~ store hmva7yVS2SMFLL1ow4p64JrJdDi3Xg7f8ePZjD9AtuY
ok 2 confirmed transaction has no error
ok 3 confirmed transaction has no error
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 34 ~ test ~ metadata - initSellingResource 7YbuzfeAuyaA3QNBeS7yFnFW7iK8Tdh3nenDzBZw5ezf
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 48 ~ test ~ creator CEsoHY8Ewvgxyxk5V8wYETBWdU9ogxrVEZFS1rSnaEHW
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 51 ~ test ~ createSecondaryMetadataCreatorsTx Transaction {
  signatures: [
    {
      signature: <Buffer 7d 3e e6 b4 55 70 94 50 12 83 4e 07 6a b5 51 ad c6 0b fd db 7f 8e c8 53 2b 64 bb 87 44 ee 64 da 42 6d f8 14 ee b0 57 55 c5 27 cf 2e 78 71 a7 24 55 22 ... 14 more bytes>,
      publicKey: [PublicKey]
    }
  ],
  feePayer: PublicKey {
    _bn: <BN: a6fe8b516e5e7f2795e70050244bff9ec8fd5c4bae1d1343343696f174a57569>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer b3 c2 87 b7 41 3f f1 4c fd 01 00 00 00 a6 fe 8b 51 6e 5e 7f 27 95 e7 00 50 24 4b ff 9e c8 fd 5c 4b ae 1d 13 43 34 36 96 f1 74 a5 75 69 00 64>
    }
  ],
  recentBlockhash: 'ys4P14HVGKBK4FzTKpdFNp1zH7dYbvFPV3LERfgk87S',
  nonceInfo: undefined
}
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 51 ~ test ~ secondaryMetadataCreators GaZBe4A8Jg9LSkjq3EaDca2p7vnpJe46uuKj6PU2481u
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 67 ~ test ~ createSecondaryMetadataCreatorsRes 4DKaYprAZJxkeQQxcNmEjnxcKqBMmZSGhNK9tAwhCMLFVxWK4JEhaqs3v9KshHLDCNAf83PZvZJFTfbwQsEdMDXA
ok 4 confirmed transaction has no error
# create-secondary-metadata-creators: empty creators
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 75 ~ test ~ transactionHandler FSJTKEuH4J3ue8yDX8zJJkFA7JVuwLhzxJZ7vLbSjJj1
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 75 ~ test ~ connection http://127.0.0.1:8899/
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 75 ~ test ~ payer FSJTKEuH4J3ue8yDX8zJJkFA7JVuwLhzxJZ7vLbSjJj1
ok 5 confirmed transaction has no error
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 89 ~ test ~ store GYXsNKmTzpxtr6j2fhY9CZkdtjwaCi9S5uTgG7QDnvFH
ok 6 confirmed transaction has no error
ok 7 confirmed transaction has no error
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 92 ~ test ~ metadata D4YW7uPLZAEt561sayeL1XW5c14w5sSCGmkVx4mCJC7
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 102 ~ test ~ creators []
🚀 ~ file: createSecondaryMetadataCreators.test.ts ~ line 104 ~ test ~ createSecondaryMetadataCreatorsTx Transaction {
  signatures: [
    {
      signature: <Buffer 5b a2 fd cd 5a 2d 03 c8 61 f6 47 41 a1 7d a2 c5 a6 57 b1 a9 f6 c1 96 96 43 49 75 19 4d da 03 ec 52 6e 93 39 c5 4c e6 0d 30 3e 67 c8 23 04 08 ae 2c 94 ... 14 more bytes>,
      publicKey: [PublicKey]
    }
  ],
  feePayer: PublicKey {
    _bn: <BN: d67edf458b811077d621d198cb16de7aeee87868adc568dccf82e27d634bee88>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer b3 c2 87 b7 41 3f f1 4c ff 00 00 00 00>
    }
  ],
  recentBlockhash: 'DHsnrZuuxw5AnrkKonUH2HgRxHeGoRQZxdgLk37oqB4o',
  nonceInfo: undefined
}
Expecting Next Line will throw an error, Tx ID will not be printed, instead catch block will be executed
Transaction simulation failed: Error processing Instruction 0: custom program error: 0x1791 
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo invoke [1]
    Program log: Instruction: CreateSecondaryMetadataCreators
    Program 11111111111111111111111111111111 invoke [2]
    Program 11111111111111111111111111111111 success
    Program log: Custom program error: 0x1791
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo consumed 19500 of 200000 compute units
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo failed: custom program error: 0x1791
ok 8 error encountered
ok 9 match '/custom program error/i' in error message
ok 10 match '/0x1791/i' in error message

1..10
# tests 10
# pass  10

# ok
```