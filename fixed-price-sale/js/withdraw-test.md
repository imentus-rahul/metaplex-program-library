### result
```
imentus@imentus:~/Documents/im-client/mpl-fork/metaplex-program-library/fixed-price-sale/js$ node test/withdraw.test.js 
TAP version 13
# withdraw: success
🚀 ~ file: withdraw.test.ts ~ line 22 ~ test ~ transactionHandler kPpYFUfSJFssLQ4uxEgZJogoqiEaXa4jB7wwPZwrFDX
🚀 ~ file: withdraw.test.ts ~ line 22 ~ test ~ connection http://127.0.0.1:8899/
🚀 ~ file: withdraw.test.ts ~ line 22 ~ test ~ payer kPpYFUfSJFssLQ4uxEgZJogoqiEaXa4jB7wwPZwrFDX
ok 1 confirmed transaction has no error
🚀 ~ file: withdraw.test.ts ~ line 36 ~ test ~ store BpQuRh7vdjPiBckHnDbMcdkShPTeYHj4kaSJxWB1EueG
ok 2 confirmed transaction has no error
ok 3 confirmed transaction has no error
🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ resourceMint 8G52xzvQiyqQBsvTTzUevtYzch3ZaGYyXhLHeLpaUTp3
🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ vaultOwnerBump 254
🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ vaultOwner AkRWxK3d4FzK1RtPT9uo9f8HQciJxjC69rAxkRs2HA8a
🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ vault EktJqHxyjdbZ1wrsNfjN8EzyUEp15EhEgkFqQf6ynk6v
🚀 ~ file: withdraw.test.ts ~ line 39 ~ test ~ sellingResource BcGzeYV6g9SA2pCdGnbAPNDmm93F8DbXuvBQeDgSxvCw
🚀 ~ file: withdraw.test.ts ~ line 54 ~ test ~ treasuryMint 8LMQXEZJUxaU4nFZPR8CZ9YAoLW5HEm91gucgKBQhKCa
🚀 ~ file: withdraw.test.ts ~ line 59 ~ test ~ userTokenAcc Hwy4sBgzREKpvp3jhGPV3CE3zY3kA9H6wnGBTXFv3Eu7
🚀 ~ file: withdraw.test.ts ~ line 62 ~ test ~ startDate 1644749444
ok 4 confirmed transaction has no error
ok 5 confirmed transaction has no error
🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ treasuryOwner 4LDXv86xArJuprxdUNiZoEcJkxTRnYUTC1BremNFZAua
🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ treasuryOwnerBump 254
🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ treasuryHolder AP8B7WsrPPELeqrzb7UcgczwCfU5Ggzs21Vxj1ZMAPiU
🚀 ~ file: withdraw.test.ts ~ line 74 ~ test ~ market 58Pyk6zTfWLPdw7hZw3LDdcrZJweFmtZ2fqgbcDKPjfM
🚀 ~ file: withdraw.test.ts ~ line 94 ~ test ~ tradeHistory 8gxpUWimnvpdRDufk9sVjp63RyK8w95TY16UxHAr1rB8
🚀 ~ file: withdraw.test.ts ~ line 91 ~ test ~ tradeHistoryBump 255
🚀 ~ file: withdraw.test.ts ~ line 98 ~ test ~ newMint DKAnvLwYQ2Mw3uM2LirLJ5iS88izaK8dFVzK8X3YDwZB
🚀 ~ file: withdraw.test.ts ~ line 107 ~ test ~ newMintEdition 36KfgVtcz7FxSr69YSdUGzfMfBWGn74bg7V8ZLMsJweo
🚀 ~ file: withdraw.test.ts ~ line 109 ~ test ~ newMintMetadata 2kmTnYxBFCwyGM9adSSbSHE6cdwgiFhR6ewrGWqibjp8
🚀 ~ file: withdraw.test.ts ~ line 112 ~ test ~ resourceMintMasterEdition 3jsprVYcWAA23ZBPXyX4CmqUPfLaB9QpZiYw2uKjwGEW
🚀 ~ file: withdraw.test.ts ~ line 114 ~ test ~ resourceMintMetadata GAtbMqQ3F2AZ3SrEZ12h7a4PFnVGh4oWCcnPrXnHWYEs
🚀 ~ file: withdraw.test.ts ~ line 115 ~ test ~ resourceMintEditionMarker zUYUj5KtzhmM2pHDg8T4MnMycoSjUVP5MqwFkpMBB8m
🚀 ~ file: withdraw.test.ts ~ line 121 ~ test ~ buyTx Transaction {
  signatures: [],
  feePayer: PublicKey {
    _bn: <BN: b1dc6eba14270dc4f937412039aeba44e1fc3903cedb60050de2171b432ac56>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer 66 06 3d 12 01 da eb ea ff fe>
    }
  ],
  recentBlockhash: 'DCKqfwjBB8kKGAbuyk9Qh4rJ2Rk9USs16RMfZrHPTy2v',
  nonceInfo: undefined
}
🚀 ~ file: withdraw.test.ts ~ line 146 ~ test ~ buyRes CL6Cpk3uU2xyxif5AxTiBKgMc4wKtQGkpHLMB3BsNaujJcbhcYsmSnvyozty1CdPu75Arvam1Mc5mRARKQfEDcc
ok 6 confirmed transaction has no error
🚀 ~ file: withdraw.test.ts ~ line 159 ~ test ~ marketTx - closeMarket Transaction {
  signatures: [
    {
      signature: <Buffer ca b3 4b 43 03 0e 70 91 02 17 20 ec 9a 33 1e fe d3 96 05 67 4a a7 35 a5 a3 5d 8e 34 3e e1 a2 55 3e 44 e3 ef 2c c8 61 0b 74 f4 0d a3 fa d9 55 7b a7 86 ... 14 more bytes>,
      publicKey: [PublicKey]
    }
  ],
  feePayer: PublicKey {
    _bn: <BN: b1dc6eba14270dc4f937412039aeba44e1fc3903cedb60050de2171b432ac56>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer 58 9a f8 ba 30 0e 7b f4>
    }
  ],
  recentBlockhash: 'GN1qcnq4iW9aifD8Mq2exL6GLpydyc2fuJeMQp1GMuZK',
  nonceInfo: undefined
}
🚀 ~ file: withdraw.test.ts ~ line 166 ~ test ~ marketRes - closeMarket 3eBHZEFwd5p5okHPKjQs9TzcbEdFjS6MDBywEptwBzY5jWDjxFJNgGe6dXQpXjw2fQzfUCPMwSSMai9FtyZ8UZnp
ok 7 confirmed transaction has no error
🚀 ~ file: withdraw.test.ts ~ line 175 ~ test ~ payoutTicket Be2UKuxnNGWKch49ZPh1inyTGS9EKqyAZc5grk4pEbCn
🚀 ~ file: withdraw.test.ts ~ line 172 ~ test ~ payoutTicketBump 255
🚀 ~ file: withdraw.test.ts ~ line 184 ~ test ~ destination 7xQP59DUABqfEY1vgLKiToWK6gcoKfC1e6rqbPRzxVaw
🚀 ~ file: withdraw.test.ts ~ line 187 ~ test ~ metadata GAtbMqQ3F2AZ3SrEZ12h7a4PFnVGh4oWCcnPrXnHWYEs
🚀 ~ file: withdraw.test.ts ~ line 203 ~ test ~ withdrawTx Transaction {
  signatures: [
    {
      signature: <Buffer 18 9d 72 f5 a1 b3 99 67 48 58 8f 09 ec 03 51 80 b8 77 f3 15 ad 56 a2 38 f0 67 04 76 6a 55 2a a2 35 e4 39 20 3e 85 67 41 81 b3 90 37 46 96 b8 81 ea 75 ... 14 more bytes>,
      publicKey: [PublicKey]
    }
  ],
  feePayer: PublicKey {
    _bn: <BN: b1dc6eba14270dc4f937412039aeba44e1fc3903cedb60050de2171b432ac56>
  },
  instructions: [
    TransactionInstruction {
      keys: [Array],
      programId: [PublicKey],
      data: <Buffer b7 12 46 9c 94 6d a1 22 fe ff>
    }
  ],
  recentBlockhash: '8nKfSbb3iUUEGMScmBiHNTpaQTmV4ShGZ6StTD61Fuki',
  nonceInfo: undefined
}
🚀 ~ file: withdraw.test.ts ~ line 210 ~ test ~ withdrawRes 5nXcHBwbJo76E5FGDnLscTd8bHrG6jivSQmMkiCrxigLCqmCWhp3BjuCXaorJJpdZ2Z8BinAEQxXJrJq26gS2jri
ok 8 confirmed transaction has no error
🚀 ~ file: withdraw.test.ts ~ line 215 ~ test ~ payoutTicketData {
  data: <Buffer 00>,
  executable: false,
  lamports: 897840,
  owner: PublicKey {
    _bn: <BN: 68d37689e50ce2195529fe14f586fd5473a20d97ffc1b82e89c84606c9ac034>
  },
  rentEpoch: 0
}
🚀 ~ file: withdraw.test.ts ~ line 215 ~ test ~ payoutTicketData - owner SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo
ok 9 should be truthy

1..9
# tests 9
# pass  9

# ok
```