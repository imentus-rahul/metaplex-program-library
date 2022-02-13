import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';

const resumeMarketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[];
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ResumeMarketInstructionArgs',
);
export type ResumeMarketInstructionAccounts = {
  market: web3.PublicKey;
  owner: web3.PublicKey;
  clock: web3.PublicKey;
};

const resumeMarketInstructionDiscriminator = [198, 120, 104, 87, 44, 103, 108, 143];

/**
 * Creates a _ResumeMarket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 */
export function createResumeMarketInstruction(accounts: ResumeMarketInstructionAccounts) {
  const { market, owner, clock } = accounts;

  const [data] = resumeMarketStruct.serialize({
    instructionDiscriminator: resumeMarketInstructionDiscriminator,
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
