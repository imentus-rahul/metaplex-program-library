import * as definedTypes from '../types';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';


export type CreateSecondaryMetadataCreatorsInstructionArgs = {
  secondaryMetadataCreatorsBump: number,
  creators: definedTypes.mpl_token_metadata::state::Creator[]
}
const createSecondaryMetadataCreatorsStruct = new beet.FixableBeetArgsStruct<CreateSecondaryMetadataCreatorsInstructionArgs & {
    instructionDiscriminator: number[];
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['secondaryMetadataCreatorsBump', beet.u8],
    ['creators', beet.array(definedTypes.mpl_token_metadata::state::CreatorStruct)]
  ],
  'CreateSecondaryMetadataCreatorsInstructionArgs'
)
export type CreateSecondaryMetadataCreatorsInstructionAccounts = {
  admin: web3.PublicKey
  metadata: web3.PublicKey
  secondaryMetadataCreators: web3.PublicKey
}

const createSecondaryMetadataCreatorsInstructionDiscriminator = [179,194,135,183,65,63,241,76];

/**
 * Creates a _CreateSecondaryMetadataCreators_ instruction.
 * 
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 */
export function createCreateSecondaryMetadataCreatorsInstruction(
  accounts: CreateSecondaryMetadataCreatorsInstructionAccounts,
  args: CreateSecondaryMetadataCreatorsInstructionArgs
) {
  const {
    admin,
    metadata,
    secondaryMetadataCreators
  } = accounts;

  const [data ] = createSecondaryMetadataCreatorsStruct.serialize({ 
    instructionDiscriminator: createSecondaryMetadataCreatorsInstructionDiscriminator,
    ...args
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: admin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: secondaryMetadataCreators,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    }
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo'),
    keys,
    data
  });
  return ix; 
}
