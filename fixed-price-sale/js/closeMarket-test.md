### result
```
imentus@imentus:~/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js$ node test/closeMarket.test.js 
TAP version 13
# close-market: success
🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ transactionHandler A99Wk7dKDtARsHg7Wj6zq3iYymS66stMRgkM9Ls4Hm1a
🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ connection http://127.0.0.1:8899/
🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ payer A99Wk7dKDtARsHg7Wj6zq3iYymS66stMRgkM9Ls4Hm1a
ok 1 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 36 ~ test ~ store 6x8V6ALmFc7vKZDypz4HFejxzL9uC8ijfV4RRKSp4GAY
ok 2 confirmed transaction has no error
ok 3 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 39 ~ test ~ sellingResource GGwQ3crpUdH4c2ZLnkQongHwjP7WF55e18snV9iUUrre
🚀 ~ file: closeMarket.test.ts ~ line 49 ~ test ~ treasuryMint Dzr7UwPPTxnkvGGb1Q6bVtVwf5ZLSXRwotzoaKLaPGw6
🚀 ~ file: closeMarket.test.ts ~ line 56 ~ test ~ startDate 1644748553
ok 4 confirmed transaction has no error
ok 5 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 67 ~ test ~ market 725N7yuywduBEdZWra132yoFNdonPEgd7P5gfJLgbbmz
🚀 ~ file: closeMarket.test.ts ~ line 87 ~ test ~ marketTx - closeMarket:  Transaction {
  signatures: [
    {
      signature: <Buffer 17 79 f1 f0 70 d1 02 bb 77 8e 39 0b d7 62 e0 8f be 28 67 2c c3 a7 88 67 dd 54 b7 58 50 c1 40 b0 d2 65 b3 e8 3a b3 00 72 03 81 db b6 18 b5 2d 16 d2 8c ... 14 more bytes>,
      publicKey: [PublicKey]
    }
  ],
  feePayer: PublicKey {
    _bn: <BN: 87cf744bd1e234d1d91ab15188dc9c8f501964d35cc30eac900f1cbbb39d7e01>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer 58 9a f8 ba 30 0e 7b f4>
    }
  ],
  recentBlockhash: '5XAvTiWL8d8c4JQoFbiiquG2rdJVo3jXsJM4M3MeoP6i',
  nonceInfo: undefined
}
🚀 ~ file: closeMarket.test.ts ~ line 94 ~ test ~ MarketRes 2K6Enp74SshqzzbiEoUZQyVdSJtrKECWDfKjccMZgoErRN3Mm8cRX9Utwi2UVvEUvZC1FBqz9R16Vdgu8PGpW58C
ok 6 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 100 ~ test ~ marketAccount {
  data: <Buffer db be d5 37 00 e3 c6 9a 58 69 d7 76 3a 43 93 11 bf bb 80 e0 8e 92 54 88 0a c4 4c 26 d0 ea df 89 63 e4 31 a2 71 21 4a cd e2 f4 85 f6 3d 7b ed f7 18 0e ... 294 more bytes>,
  executable: false,
  lamports: 3285120,
  owner: PublicKey {
    _bn: <BN: 68d37689e50ce2195529fe14f586fd5473a20d97ffc1b82e89c84606c9ac034>
  },
  rentEpoch: 0
}
🚀 ~ file: closeMarket.test.ts ~ line 102 ~ test ~ marketData MarketAccountData {
  store: PublicKey {
    _bn: <BN: 5869d7763a439311bfbb80e08e9254880ac44c26d0eadf8963e431a271214acd>
  },
  sellingResource: PublicKey {
    _bn: <BN: e2f485f63d7bedf7180efbf00b0e8ea44e4e1928088de914dc11587c86a10dab>
  },
  treasuryMint: PublicKey {
    _bn: <BN: c11de14c421e73098138fce0ace92c87e0a3382854a142a01325c94cd42699bd>
  },
  treasuryHolder: PublicKey {
    _bn: <BN: f42fff7b98084d8168cf820729a645e6e49908c9f0226ab9cb7c6d30237a31e0>
  },
  treasuryOwner: PublicKey {
    _bn: <BN: 1dd8547b4148dd8b19e35e7df466029ae8a3f35a99f2cad283cd2909b14336c8>
  },
  owner: PublicKey {
    _bn: <BN: 87cf744bd1e234d1d91ab15188dc9c8f501964d35cc30eac900f1cbbb39d7e01>
  },
  name: 'Market\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00',
  description: '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00',
  mutable: true,
  price: <BN: 1>,
  piecesInOneWallet: <BN: 1>,
  startDate: <BN: 6208df09>,
  endDate: null,
  state: 'Ended'
}
ok 7 should be truthy
# close-market: should fail when the market has the specific endDate
🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ transactionHandler CCpdyU7QHAU9c2wApfnb24pNAypu83imAHwJ4zkHR6ii
🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ connection http://127.0.0.1:8899/
🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ payer CCpdyU7QHAU9c2wApfnb24pNAypu83imAHwJ4zkHR6ii
ok 8 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 125 ~ test ~ store CeXxNTg2PV4wncy8qeeciCAFGrvmyvHGzTdmvxTzZaPd
ok 9 confirmed transaction has no error
ok 10 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 128 ~ test ~ sellingResource A6koVF5YBm25xAC4L1hKLSw7fuGyHSKs6PyJNYKUenAv
🚀 ~ file: closeMarket.test.ts ~ line 138 ~ test ~ treasuryMint HvCQEBsRhmXrJSkLJNcBFeHbVEBS5Zu7XRkyaMkrKvEe
🚀 ~ file: closeMarket.test.ts ~ line 145 ~ test ~ startDate 1644748562
ok 11 confirmed transaction has no error
ok 12 confirmed transaction has no error
🚀 ~ file: closeMarket.test.ts ~ line 157 ~ test ~ market kqwDkgLtvgovB9CGwDYeFuFJDjsuzM3vS3wVTTte5C9
🚀 ~ file: closeMarket.test.ts ~ line 176 ~ test ~ marketTx Transaction {
  signatures: [
    {
      signature: <Buffer 37 8d 71 b1 6a 29 d0 dc bc 22 c8 37 e7 f0 19 c5 55 b7 86 55 fc 38 6c 69 0e 8e 5f 71 2a 48 f8 a4 26 9d 9d ff 57 f1 6b 5f 94 c8 a9 97 95 e0 71 5a 0b 9a ... 14 more bytes>,
      publicKey: [PublicKey]
    }
  ],
  feePayer: PublicKey {
    _bn: <BN: a677cf17ab5b7e32f6cd9ef89600cfbae9e3efc76b08f2588429cc39ba638a87>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer 58 9a f8 ba 30 0e 7b f4>
    }
  ],
  recentBlockhash: '5QWW77KDXWZUDLeqXfvMCNEk4ev57YDLHQfaSrgT2qTN',
  nonceInfo: undefined
}
Expected Transaction to fail in next line
Transaction simulation failed: Error processing Instruction 0: custom program error: 0x1782 
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo invoke [1]
    Program log: Instruction: CloseMarket
    Program log: Custom program error: 0x1782
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo consumed 7219 of 200000 compute units
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo failed: custom program error: 0x1782
ok 13 error encountered
ok 14 match '/0x1782/i' in error message

1..14
# tests 14
# pass  14

# ok
```