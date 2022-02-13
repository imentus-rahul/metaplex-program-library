import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

export type ChangeMarketInstructionArgs = {
  newName: beet.COption<string>;
  newDescription: beet.COption<string>;
  mutable: beet.COption<boolean>;
  newPrice: beet.COption<beet.bignum>;
  newPiecesInOneWallet: beet.COption<beet.bignum>;
};
const changeMarketStruct = new beet.FixableBeetArgsStruct<
  ChangeMarketInstructionArgs & {
    instructionDiscriminator: number[];
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['newName', beet.coption(beet.utf8String)],
    ['newDescription', beet.coption(beet.utf8String)],
    ['mutable', beet.coption(beet.bool)],
    ['newPrice', beet.coption(beet.u64)],
    ['newPiecesInOneWallet', beet.coption(beet.u64)],
  ],
  'ChangeMarketInstructionArgs',
);
export type ChangeMarketInstructionAccounts = {
  market: web3.PublicKey;
  owner: web3.PublicKey;
  clock: web3.PublicKey;
};

const changeMarketInstructionDiscriminator = [130, 59, 109, 101, 85, 226, 37, 88];

/**
 * Creates a _ChangeMarket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 */
export function createChangeMarketInstruction(
  accounts: ChangeMarketInstructionAccounts,
  args: ChangeMarketInstructionArgs,
) {
  const { market, owner, clock } = accounts;

  const [data] = changeMarketStruct.serialize({
    instructionDiscriminator: changeMarketInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: market,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: owner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: clock,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo'),
    keys,
    data,
  });
  return ix;
}
