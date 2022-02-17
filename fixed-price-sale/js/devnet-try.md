### result
```
imentus@imentus:~/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js$ solana balance
24.99613808 SOL

imentus@imentus:~/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js$ node test/validate.test.js 
TAP version 13
# validate: successful purchase and validation
connectionURL:  https://api.devnet.solana.com
Balance:  24996138080
🚀 ~ file: validate.test.ts ~ line 28 ~ test ~ transactionHandler -  payer GuaTL23HW1oExCmW8oY5UvgeJaKKpLfemNJZ6uoSnFJD
🚀 ~ file: validate.test.ts ~ line 28 ~ test ~ connection - rpcendpoint https://api.devnet.solana.com
🚀 ~ file: validate.test.ts ~ line 28 ~ test ~ payer GuaTL23HW1oExCmW8oY5UvgeJaKKpLfemNJZ6uoSnFJD
ok 1 confirmed transaction has no error
🚀 ~ file: validate.test.ts ~ line 42 ~ test ~ store DYX4DHvbTGbgpkAmaRtULvaidZx95MurDUMEDCMj1chP
ok 2 confirmed transaction has no error
ok 3 confirmed transaction has no error
🚀 ~ file: validate.test.ts ~ line 44 ~ test ~ resourceMint C5xfm6wWMYtBx4v3sVE1nUEy8de4PhR1fotrUA3BHqjW
🚀 ~ file: validate.test.ts ~ line 44 ~ test ~ vaultOwnerBump 251
🚀 ~ file: validate.test.ts ~ line 44 ~ test ~ vaultOwner Ayup9GNPgkBXdwBHhcSB7JRLnp1TGTPusuYc2ujwwFhk
🚀 ~ file: validate.test.ts ~ line 44 ~ test ~ vault 3JFZyH3UnHB6rPUzhop8tsmyY3iZibdRoSz6mUGghUze
🚀 ~ file: validate.test.ts ~ line 44 ~ test ~ sellingResource XpWBvmg16Pw4mSeA1JNYwn5bPn4hLDJZ4dC1nwramTL
🚀 ~ file: validate.test.ts ~ line 60 ~ test ~ treasuryMint FowMS6cWpJ4khGGXFouNNCmhkvfGcuQfzsLLqKDqxaVT
🚀 ~ file: validate.test.ts ~ line 65 ~ test ~ userTokenAcc vGaHsEoyZMCDwBB7r7XmsqU1tbryfGP79Jtadrnhy3E
ok 4 confirmed transaction has no error
Transaction simulation failed: Error processing Instruction 0: custom program error: 0x177a 
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo invoke [1]
    Program log: Instruction: CreateMarket
    Program 11111111111111111111111111111111 invoke [2]
    Program 11111111111111111111111111111111 success
    Program log: Custom program error: 0x177a
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo consumed 24253 of 200000 compute units
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo failed: custom program error: 0x177a
not ok 5 Error: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x177a
  ---
    operator: error
    stack: |-
      Error: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x177a
          at Connection.sendEncodedTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/node_modules/@solana/web3.js/lib/index.cjs.js:6820:13)
          at processTicksAndRejections (node:internal/process/task_queues:96:5)
          at async Connection.sendRawTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/node_modules/@solana/web3.js/lib/index.cjs.js:6775:20)
          at async Connection.sendTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/node_modules/@solana/web3.js/lib/index.cjs.js:6765:12)
          at async PayerTransactionHandler.sendAndConfirmTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js/node_modules/@metaplex-foundation/amman/dist/transactions/transaction-handler.js:41:29)
  ...
# validate: successful purchase and failed validation
connectionURL:  https://api.devnet.solana.com
Balance:  24963910720
ok 6 confirmed transaction has no error
🚀 ~ file: validate.test.ts ~ line 183 ~ test2 ~ store 8pJWkyWEGjsmhu93t1anddkgZcppC6q6LXtdbf1h4Fsn
ok 7 confirmed transaction has no error
ok 8 confirmed transaction has no error
🚀 ~ file: validate.test.ts ~ line 186 ~ test2 ~ resourceMint APCHoYudAgRQFSwQuZw8zv5JUEHsbsDcwdtGgMJXpbRQ
🚀 ~ file: validate.test.ts ~ line 186 ~ test2 ~ vaultOwnerBump 247
🚀 ~ file: validate.test.ts ~ line 186 ~ test2 ~ vaultOwner 452DP8uzJ1GnjLvUGbQRkm68ExMzGfdUMUexLP46s7dL
🚀 ~ file: validate.test.ts ~ line 186 ~ test2 ~ vault 9N5M9sKUd4HQdEo1K31EoYReaM3QcwjkSGBvzNC8zECP
🚀 ~ file: validate.test.ts ~ line 186 ~ test2 ~ sellingResource GZ9FJFCNdUTcv1mvvPHv6UkSiPho3bZRmsRxusgrBnwK
🚀 ~ file: validate.test.ts ~ line 201 ~ test2 ~ treasuryMint 5KreNsrf6xwU2gvwZ8dZ7g2Qe6p5DCSUmqzdJ4yvphwb
🚀 ~ file: validate.test.ts ~ line 206 ~ test2 ~ userTokenAcc FMd9SaGDUeZ5pGDyjAgG1tmzZidvHfjc7tpP4h8u2eko
ok 9 confirmed transaction has no error
Transaction simulation failed: Error processing Instruction 0: custom program error: 0x177a 
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo invoke [1]
    Program log: Instruction: CreateMarket
    Program 11111111111111111111111111111111 invoke [2]
    Program 11111111111111111111111111111111 success
    Program log: Custom program error: 0x177a
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo consumed 24253 of 200000 compute units
    Program SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo failed: custom program error: 0x177a
not ok 10 Error: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x177a
  ---
    operator: error
    stack: |-
      Error: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x177a
          at Connection.sendEncodedTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/node_modules/@solana/web3.js/lib/index.cjs.js:6820:13)
          at runMicrotasks (<anonymous>)
          at processTicksAndRejections (node:internal/process/task_queues:96:5)
          at async Connection.sendRawTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/node_modules/@solana/web3.js/lib/index.cjs.js:6775:20)
          at async Connection.sendTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/node_modules/@solana/web3.js/lib/index.cjs.js:6765:12)
          at async PayerTransactionHandler.sendAndConfirmTransaction (/home/imentus/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js/node_modules/@metaplex-foundation/amman/dist/transactions/transaction-handler.js:41:29)
  ...

1..10
# tests 10
# pass  8
# fail  2
```