"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.AuctionHouseAccountData = void 0;
var beetSolana = require("@metaplex-foundation/beet-solana");
var beet = require("@metaplex-foundation/beet");
var auctionHouseAccountDiscriminator = [40, 108, 215, 107, 213, 85, 245, 48];
/**
 * Holds the data for the {@link AuctionHouseAccount} and provides de/serialization
 * functionality for that data
 */
var AuctionHouseAccountData = /** @class */ (function () {
    function AuctionHouseAccountData(auctionHouseFeeAccount, auctionHouseTreasury, treasuryWithdrawalDestination, feeWithdrawalDestination, treasuryMint, authority, creator, bump, treasuryBump, feePayerBump, sellerFeeBasisPoints, requiresSignOff, canChangeSalePrice) {
        this.auctionHouseFeeAccount = auctionHouseFeeAccount;
        this.auctionHouseTreasury = auctionHouseTreasury;
        this.treasuryWithdrawalDestination = treasuryWithdrawalDestination;
        this.feeWithdrawalDestination = feeWithdrawalDestination;
        this.treasuryMint = treasuryMint;
        this.authority = authority;
        this.creator = creator;
        this.bump = bump;
        this.treasuryBump = treasuryBump;
        this.feePayerBump = feePayerBump;
        this.sellerFeeBasisPoints = sellerFeeBasisPoints;
        this.requiresSignOff = requiresSignOff;
        this.canChangeSalePrice = canChangeSalePrice;
    }
    /**
     * Creates a {@link AuctionHouseAccountData} instance from the provided args.
     */
    AuctionHouseAccountData.fromArgs = function (args) {
        return new AuctionHouseAccountData(args.auctionHouseFeeAccount, args.auctionHouseTreasury, args.treasuryWithdrawalDestination, args.feeWithdrawalDestination, args.treasuryMint, args.authority, args.creator, args.bump, args.treasuryBump, args.feePayerBump, args.sellerFeeBasisPoints, args.requiresSignOff, args.canChangeSalePrice);
    };
    /**
     * Deserializes the {@link AuctionHouseAccountData} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    AuctionHouseAccountData.fromAccountInfo = function (accountInfo, offset) {
        if (offset === void 0) { offset = 0; }
        return AuctionHouseAccountData.deserialize(accountInfo.data, offset);
    };
    /**
     * Deserializes the {@link AuctionHouseAccountData} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    AuctionHouseAccountData.deserialize = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return auctionHouseAccountDataStruct.deserialize(buf, offset);
    };
    /**
     * Serializes the {@link AuctionHouseAccountData} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    AuctionHouseAccountData.prototype.serialize = function () {
        return auctionHouseAccountDataStruct.serialize(__assign({ accountDiscriminator: auctionHouseAccountDiscriminator }, this));
    };
    Object.defineProperty(AuctionHouseAccountData, "byteSize", {
        /**
         * Returns the byteSize of a {@link Buffer} holding the serialized data of
         * {@link AuctionHouseAccountData}
         */
        get: function () {
            return auctionHouseAccountDataStruct.byteSize;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link AuctionHouseAccountData} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    AuctionHouseAccountData.getMinimumBalanceForRentExemption = function (connection, commitment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, connection.getMinimumBalanceForRentExemption(AuctionHouseAccountData.byteSize, commitment)];
            });
        });
    };
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link AuctionHouseAccountData} data.
     */
    AuctionHouseAccountData.hasCorrectByteSize = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return buf.byteLength - offset === AuctionHouseAccountData.byteSize;
    };
    /**
     * Returns a readable version of {@link AuctionHouseAccountData} properties
     * and can be used to convert to JSON and/or logging
     */
    AuctionHouseAccountData.prototype.pretty = function () {
        return {
            auctionHouseFeeAccount: this.auctionHouseFeeAccount.toBase58(),
            auctionHouseTreasury: this.auctionHouseTreasury.toBase58(),
            treasuryWithdrawalDestination: this.treasuryWithdrawalDestination.toBase58(),
            feeWithdrawalDestination: this.feeWithdrawalDestination.toBase58(),
            treasuryMint: this.treasuryMint.toBase58(),
            authority: this.authority.toBase58(),
            creator: this.creator.toBase58(),
            bump: this.bump,
            treasuryBump: this.treasuryBump,
            feePayerBump: this.feePayerBump,
            sellerFeeBasisPoints: this.sellerFeeBasisPoints,
            requiresSignOff: this.requiresSignOff,
            canChangeSalePrice: this.canChangeSalePrice,
        };
    };
    return AuctionHouseAccountData;
}());
exports.AuctionHouseAccountData = AuctionHouseAccountData;
var auctionHouseAccountDataStruct = new beet.BeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['auctionHouseFeeAccount', beetSolana.publicKey],
    ['auctionHouseTreasury', beetSolana.publicKey],
    ['treasuryWithdrawalDestination', beetSolana.publicKey],
    ['feeWithdrawalDestination', beetSolana.publicKey],
    ['treasuryMint', beetSolana.publicKey],
    ['authority', beetSolana.publicKey],
    ['creator', beetSolana.publicKey],
    ['bump', beet.u8],
    ['treasuryBump', beet.u8],
    ['feePayerBump', beet.u8],
    ['sellerFeeBasisPoints', beet.u16],
    ['requiresSignOff', beet.bool],
    ['canChangeSalePrice', beet.bool],
], AuctionHouseAccountData.fromArgs, 'AuctionHouseAccountData');
