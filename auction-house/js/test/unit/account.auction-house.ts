import { AccountInfo, Keypair, PublicKey, Connection } from '@solana/web3.js';
import { AuctionHouseAccount } from '../../src/accounts/AuctionHouse';
import { AuctionHouseAccountDataArgs } from '../../src/generated/accounts';
import test from 'tape';
import spok from 'spok';

function quickKeypair(): [PublicKey, Uint8Array] {
  const kp = Keypair.generate();
  return [kp.publicKey, kp.secretKey];
}

test('account auction-house: round trip serilization', async (t) => {
  const [accountPubkey] = quickKeypair();
  console.log("🚀 ~ file: account.auction-house.ts ~ line 14 ~ test ~ accountPubkey", accountPubkey.toBase58())
  const [creator] = quickKeypair();
  console.log("🚀 ~ file: account.auction-house.ts ~ line 16 ~ test ~ creator", creator.toBase58())
  const [auctionHouseTreasury] = quickKeypair();
  console.log("🚀 ~ file: account.auction-house.ts ~ line 18 ~ test ~ auctionHouseTreasury", auctionHouseTreasury.toBase58())
  const [treasuryWithdrawalDestination] = quickKeypair();
  console.log("🚀 ~ file: account.auction-house.ts ~ line 20 ~ test ~ treasuryWithdrawalDestination", treasuryWithdrawalDestination.toBase58())
  const [feeWithdrawalDestination] = quickKeypair();
  console.log("🚀 ~ file: account.auction-house.ts ~ line 22 ~ test ~ feeWithdrawalDestination", feeWithdrawalDestination.toBase58())
  const [treasuryMint] = quickKeypair();
  console.log("🚀 ~ file: account.auction-house.ts ~ line 24 ~ test ~ treasuryMint", treasuryMint.toBase58())

  const args: AuctionHouseAccountDataArgs = {
    auctionHouseFeeAccount: creator,
    auctionHouseTreasury,
    treasuryWithdrawalDestination,
    feeWithdrawalDestination,
    treasuryMint,
    authority: creator,
    creator,
    bump: 0,
    treasuryBump: 1,
    feePayerBump: 2,
    sellerFeeBasisPoints: 3,
    requiresSignOff: false,
    canChangeSalePrice: true,
  };

  const expected = AuctionHouseAccount.fromAccountArgs(accountPubkey, args);
  console.log("🚀 ~ file: account.auction-house.ts ~ line 43 ~ test ~ expected AuctionHouseAccount", expected.pubkey.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected data - AuctionHouseAccountData", expected.data.auctionHouseFeeAccount.toBase58())  
  console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected auctionHouseTreasury", expected.data.auctionHouseTreasury.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected treasuryWithdrawalDestination", expected.data.treasuryWithdrawalDestination.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected feeWithdrawalDestination", expected.data.feeWithdrawalDestination.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 43 ~ test ~ expected treasuryMint", expected.data.treasuryMint.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected authority", expected.data.authority.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected creator", expected.data.creator.toBase58())
  
  const [data] = expected.data.serialize();

  const info: AccountInfo<Buffer> = {
    executable: false,
    data,
    owner: creator,
    lamports: 100,
  };

  const actual = AuctionHouseAccount.fromAccountInfo(accountPubkey, info);
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - AuctionHouseAccount: ", actual.pubkey.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - auctionHouseFeeAccount", actual.data.auctionHouseFeeAccount.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - auctionHouseTreasury", actual.data.auctionHouseTreasury.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - treasuryWithdrawalDestination", actual.data.treasuryWithdrawalDestination.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - feeWithdrawalDestination", actual.data.feeWithdrawalDestination.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - treasuryMint", actual.data.treasuryMint.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - authority", actual.data.authority.toBase58())
  console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - creator", actual.data.creator.toBase58())
  spok(t, actual, expected);
});