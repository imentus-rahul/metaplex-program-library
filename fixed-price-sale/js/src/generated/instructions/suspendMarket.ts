import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';

const suspendMarketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[];
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'SuspendMarketInstructionArgs',
);
export type SuspendMarketInstructionAccounts = {
  market: web3.PublicKey;
  owner: web3.PublicKey;
  clock: web3.PublicKey;
};

const suspendMarketInstructionDiscriminator = [246, 27, 129, 46, 10, 196, 165, 118];

/**
 * Creates a _SuspendMarket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 */
export function createSuspendMarketInstruction(accounts: SuspendMarketInstructionAccounts) {
  const { market, owner, clock } = accounts;

  const [data] = suspendMarketStruct.serialize({
    instructionDiscriminator: suspendMarketInstructionDiscriminator,
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
