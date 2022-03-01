"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var AuctionHouse_1 = require("../../src/accounts/AuctionHouse");
var tape_1 = require("tape");
var spok_1 = require("spok");
function quickKeypair() {
    var connectionURL = "https://wispy-shy-paper.solana-devnet.quiknode.pro/ea6417f447e7eed8a4d5b7b28a640613c7ec7c52";
    var connection = new web3_js_1.Connection(connectionURL, 'confirmed');
    var kp = web3_js_1.Keypair.generate();
    return [kp.publicKey, kp.secretKey];
}
(0, tape_1)('account auction-house: round trip serilization', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var accountPubkey, creator, auctionHouseTreasury, treasuryWithdrawalDestination, feeWithdrawalDestination, treasuryMint, args, expected, data, info, actual;
    return __generator(this, function (_a) {
        accountPubkey = quickKeypair()[0];
        console.log("🚀 ~ file: account.auction-house.ts ~ line 14 ~ test ~ accountPubkey", accountPubkey.toBase58());
        creator = quickKeypair()[0];
        console.log("🚀 ~ file: account.auction-house.ts ~ line 16 ~ test ~ creator", creator.toBase58());
        auctionHouseTreasury = quickKeypair()[0];
        console.log("🚀 ~ file: account.auction-house.ts ~ line 18 ~ test ~ auctionHouseTreasury", auctionHouseTreasury.toBase58());
        treasuryWithdrawalDestination = quickKeypair()[0];
        console.log("🚀 ~ file: account.auction-house.ts ~ line 20 ~ test ~ treasuryWithdrawalDestination", treasuryWithdrawalDestination.toBase58());
        feeWithdrawalDestination = quickKeypair()[0];
        console.log("🚀 ~ file: account.auction-house.ts ~ line 22 ~ test ~ feeWithdrawalDestination", feeWithdrawalDestination.toBase58());
        treasuryMint = quickKeypair()[0];
        console.log("🚀 ~ file: account.auction-house.ts ~ line 24 ~ test ~ treasuryMint", treasuryMint.toBase58());
        args = {
            auctionHouseFeeAccount: creator,
            auctionHouseTreasury: auctionHouseTreasury,
            treasuryWithdrawalDestination: treasuryWithdrawalDestination,
            feeWithdrawalDestination: feeWithdrawalDestination,
            treasuryMint: treasuryMint,
            authority: creator,
            creator: creator,
            bump: 0,
            treasuryBump: 1,
            feePayerBump: 2,
            sellerFeeBasisPoints: 3,
            requiresSignOff: false,
            canChangeSalePrice: true,
        };
        expected = AuctionHouse_1.AuctionHouseAccount.fromAccountArgs(accountPubkey, args);
        console.log("🚀 ~ file: account.auction-house.ts ~ line 43 ~ test ~ expected AuctionHouseAccount", expected.pubkey.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected data - AuctionHouseAccountData", expected.data.auctionHouseFeeAccount.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected auctionHouseTreasury", expected.data.auctionHouseTreasury.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected treasuryWithdrawalDestination", expected.data.treasuryWithdrawalDestination.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected feeWithdrawalDestination", expected.data.feeWithdrawalDestination.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 43 ~ test ~ expected treasuryMint", expected.data.treasuryMint.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected authority", expected.data.authority.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 46 ~ test ~ expected creator", expected.data.creator.toBase58());
        data = expected.data.serialize()[0];
        info = {
            executable: false,
            data: data,
            owner: creator,
            lamports: 100,
        };
        actual = AuctionHouse_1.AuctionHouseAccount.fromAccountInfo(accountPubkey, info);
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - AuctionHouseAccount: ", actual.pubkey.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - auctionHouseFeeAccount", actual.data.auctionHouseFeeAccount.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - auctionHouseTreasury", actual.data.auctionHouseTreasury.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - treasuryWithdrawalDestination", actual.data.treasuryWithdrawalDestination.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - feeWithdrawalDestination", actual.data.feeWithdrawalDestination.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - treasuryMint", actual.data.treasuryMint.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - authority", actual.data.authority.toBase58());
        console.log("🚀 ~ file: account.auction-house.ts ~ line 53 ~ test ~ actual - creator", actual.data.creator.toBase58());
        (0, spok_1.default)(t, actual, expected);
        return [2 /*return*/];
    });
}); });
