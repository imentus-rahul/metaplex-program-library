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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWithdrawInstruction = void 0;
var splToken = require("@solana/spl-token");
var beet = require("@metaplex-foundation/beet");
var web3 = require("@solana/web3.js");
var consts_1 = require("../consts");
var withdrawStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['treasuryOwnerBump', beet.u8],
    ['payoutTicketBump', beet.u8],
], 'WithdrawInstructionArgs');
var withdrawInstructionDiscriminator = [183, 18, 70, 156, 148, 109, 161, 34];
/**
 * Creates a _Withdraw_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 */
function createWithdrawInstruction(accounts, args) {
    var market = accounts.market, sellingResource = accounts.sellingResource, metadata = accounts.metadata, treasuryHolder = accounts.treasuryHolder, treasuryMint = accounts.treasuryMint, owner = accounts.owner, destination = accounts.destination, funder = accounts.funder, payer = accounts.payer, payoutTicket = accounts.payoutTicket, associatedTokenProgram = accounts.associatedTokenProgram;
    var data = withdrawStruct.serialize(__assign({ instructionDiscriminator: withdrawInstructionDiscriminator }, args))[0];
    var keys = [
        {
            pubkey: market,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: sellingResource,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: metadata,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: treasuryHolder,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: treasuryMint,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: owner,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: destination,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: funder,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: payer,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: payoutTicket,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: web3.SYSVAR_RENT_PUBKEY,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: web3.SYSVAR_CLOCK_PUBKEY,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: associatedTokenProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
    ];
    var ix = new web3.TransactionInstruction({
        programId: new web3.PublicKey(consts_1.PROGRAM_ID),
        keys: keys,
        data: data,
    });
    return ix;
}
exports.createWithdrawInstruction = createWithdrawInstruction;
