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
exports.createClaimResourceInstruction = void 0;
var splToken = require("@solana/spl-token");
var beet = require("@metaplex-foundation/beet");
var web3 = require("@solana/web3.js");
var consts_1 = require("../consts");
var claimResourceStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['vaultOwnerBump', beet.u8],
], 'ClaimResourceInstructionArgs');
var claimResourceInstructionDiscriminator = [0, 160, 164, 96, 237, 118, 74, 27];
/**
 * Creates a _ClaimResource_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 */
function createClaimResourceInstruction(accounts, args) {
    var market = accounts.market, treasuryHolder = accounts.treasuryHolder, sellingResource = accounts.sellingResource, sellingResourceOwner = accounts.sellingResourceOwner, vault = accounts.vault, metadata = accounts.metadata, owner = accounts.owner, secondaryMetadataCreators = accounts.secondaryMetadataCreators, destination = accounts.destination, tokenMetadataProgram = accounts.tokenMetadataProgram;
    var data = claimResourceStruct.serialize(__assign({ instructionDiscriminator: claimResourceInstructionDiscriminator }, args))[0];
    var keys = [
        {
            pubkey: market,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: treasuryHolder,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: sellingResource,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: sellingResourceOwner,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: vault,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: metadata,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: owner,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: secondaryMetadataCreators,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: destination,
            isWritable: true,
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
            pubkey: tokenMetadataProgram,
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
exports.createClaimResourceInstruction = createClaimResourceInstruction;
