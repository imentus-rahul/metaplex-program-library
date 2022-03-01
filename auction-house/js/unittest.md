### result
```
imentus@imentus:~$ cd Documents/im-client/mpl-fork/metaplex-program-library/auction-house/js/
imentus@imentus:~/Documents/im-client/mpl-fork/metaplex-program-library/auction-house/js$ node test/unit/account.auction-house.js 
TAP version 13
# account auction-house: round trip serilization
🚀 ~ file: account.auction-house.ts ~ line 14 ~ test ~ accountPubkey J1bhiHfxt5AdC8r4s2YbLXC9dKqxwFpwoTkjeZCNrsk8
🚀 ~ file: account.auction-house.ts ~ line 16 ~ test ~ creator 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
🚀 ~ file: account.auction-house.ts ~ line 18 ~ test ~ auctionHouseTreasury 91JeqRwaWM1gVHUWQUefLr7cig1jBzpkntqWTiJAxeR6
🚀 ~ file: account.auction-house.ts ~ line 20 ~ test ~ treasuryWithdrawalDestination 6GcNEqBKpoPePJ4KHJsY1waoYdSotYZhabMzq8ZCdwdS
🚀 ~ file: account.auction-house.ts ~ line 22 ~ test ~ feeWithdrawalDestination DpCpJVLa1NoHJ7aMSWywhKo823F76NhhFi7zHGDnCceb
🚀 ~ file: account.auction-house.ts ~ line 24 ~ test ~ treasuryMint D5FpAFev9HyWiQR635q4G1dfeb8osGsVchAPRrMB5kux
🚀 ~ file: account.auction-house.ts ~ line 43 ~ test ~ expected AuctionHouseAccount J1bhiHfxt5AdC8r4s2YbLXC9dKqxwFpwoTkjeZCNrsk8
🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected data - AuctionHouseAccountData 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected auctionHouseTreasury 91JeqRwaWM1gVHUWQUefLr7cig1jBzpkntqWTiJAxeR6
🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected treasuryWithdrawalDestination 6GcNEqBKpoPePJ4KHJsY1waoYdSotYZhabMzq8ZCdwdS
🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected feeWithdrawalDestination DpCpJVLa1NoHJ7aMSWywhKo823F76NhhFi7zHGDnCceb
🚀 ~ file: account.auction-house.ts ~ line 43 ~ test ~ expected treasuryMint D5FpAFev9HyWiQR635q4G1dfeb8osGsVchAPRrMB5kux
🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected authority 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected creator 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - AuctionHouseAccount:  J1bhiHfxt5AdC8r4s2YbLXC9dKqxwFpwoTkjeZCNrsk8
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - auctionHouseFeeAccount 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - auctionHouseTreasury 91JeqRwaWM1gVHUWQUefLr7cig1jBzpkntqWTiJAxeR6
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - treasuryWithdrawalDestination 6GcNEqBKpoPePJ4KHJsY1waoYdSotYZhabMzq8ZCdwdS
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - feeWithdrawalDestination DpCpJVLa1NoHJ7aMSWywhKo823F76NhhFi7zHGDnCceb
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - treasuryMint D5FpAFev9HyWiQR635q4G1dfeb8osGsVchAPRrMB5kux
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - authority 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - creator 32k7tpjsqEHskNDP6hEZFdcqzTLwBd3DWPnPb6fH1pBn
ok 1 spok: pubkey
ok 2 ·· spok: pubkey._bn
ok 3 ·· ·· negative = 0
ok 4 ·· ·· words = [ 24733989, 66358831, 59475781, 36276557, 65031836, 53254349, 37857139, 21763935, 39056830, 4140922, 0 ]
ok 5 ·· ·· length = 10
ok 6 ·· ·· red = null
ok 7 spok: data
ok 8 ·· spok: data.auctionHouseFeeAccount
ok 9 ·· ·· spok: data.auctionHouseFeeAccount._bn
ok 10 ·· ·· ·· negative = 0
ok 11 ·· ·· ·· words = [ 21069581, 16127516, 33526651, 33593852, 17020979, 59151615, 11912140, 49967610, 26542195, 494189, 0 ]
ok 12 ·· ·· ·· length = 10
ok 13 ·· ·· ·· red = null
ok 14 ·· spok: data.auctionHouseTreasury
ok 15 ·· ·· spok: data.auctionHouseTreasury._bn
ok 16 ·· ·· ·· negative = 0
ok 17 ·· ·· ·· words = [ 50454961, 27574277, 21617791, 60808678, 47144059, 21725381, 34706145, 37889677, 7886670, 1948765, 0 ]
ok 18 ·· ·· ·· length = 10
ok 19 ·· ·· ·· red = null
ok 20 ·· spok: data.treasuryWithdrawalDestination
ok 21 ·· ·· spok: data.treasuryWithdrawalDestination._bn
ok 22 ·· ·· ·· negative = 0
ok 23 ·· ·· ·· words = [ 31339497, 61961459, 38657387, 22439879, 15638986, 64065427, 19910440, 58357454, 44820049, 1282696, 0 ]
ok 24 ·· ·· ·· length = 10
ok 25 ·· ·· ·· red = null
ok 26 ·· spok: data.feeWithdrawalDestination
ok 27 ·· ·· spok: data.feeWithdrawalDestination._bn
ok 28 ·· ·· ·· negative = 0
ok 29 ·· ·· ·· words = [ 64606776, 41196141, 905059, 51565060, 60888415, 16596698, 56582936, 38590920, 44648178, 3119353, 0 ]
ok 30 ·· ·· ·· length = 10
ok 31 ·· ·· ·· red = null
ok 32 ·· spok: data.treasuryMint
ok 33 ·· ·· spok: data.treasuryMint._bn
ok 34 ·· ·· ·· negative = 0
ok 35 ·· ·· ·· words = [ 58352395, 41899167, 8052899, 49055610, 10055171, 35251683, 3320823, 47448079, 13197585, 2939092, 0 ]
ok 36 ·· ·· ·· length = 10
ok 37 ·· ·· ·· red = null
ok 38 ·· spok: data.auctionHouseFeeAccount
ok 39 ·· ·· spok: data.auctionHouseFeeAccount._bn
ok 40 ·· ·· ·· negative = 0
ok 41 ·· ·· ·· words = [ 21069581, 16127516, 33526651, 33593852, 17020979, 59151615, 11912140, 49967610, 26542195, 494189, 0 ]
ok 42 ·· ·· ·· length = 10
ok 43 ·· ·· ·· red = null
ok 44 ·· spok: data.auctionHouseFeeAccount
ok 45 ·· ·· spok: data.auctionHouseFeeAccount._bn
ok 46 ·· ·· ·· negative = 0
ok 47 ·· ·· ·· words = [ 21069581, 16127516, 33526651, 33593852, 17020979, 59151615, 11912140, 49967610, 26542195, 494189, 0 ]
ok 48 ·· ·· ·· length = 10
ok 49 ·· ·· ·· red = null
ok 50 ·· bump = 0
ok 51 ·· treasuryBump = 1
ok 52 ·· feePayerBump = 2
ok 53 ·· sellerFeeBasisPoints = 3
ok 54 ·· requiresSignOff = false
ok 55 ·· canChangeSalePrice = true

1..55
# tests 55
# pass  55

# ok
```