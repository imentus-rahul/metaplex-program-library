import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';

const closeMarketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[];
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CloseMarketInstructionArgs',
);
export type CloseMarketInstructionAccounts = {
  market: web3.PublicKey;
  owner: web3.PublicKey;
  clock: web3.PublicKey;
};

const closeMarketInstructionDiscriminator = [88, 154, 248, 186, 48, 14, 123, 244];

/**
 * Creates a _CloseMarket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 */
export function createCloseMarketInstruction(accounts: CloseMarketInstructionAccounts) {
  const { market, owner, clock } = accounts;

  const [data] = closeMarketStruct.serialize({
    instructionDiscriminator: closeMarketInstructionDiscriminator,
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
