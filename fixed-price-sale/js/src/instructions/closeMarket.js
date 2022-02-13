"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCloseMarketInstruction = void 0;
var web3 = require("@solana/web3.js");
var beet = require("@metaplex-foundation/beet");
var consts_1 = require("../consts");
var closeMarketStruct = new beet.BeetArgsStruct([['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]], 'CloseMarketInstructionArgs');
var closeMarketInstructionDiscriminator = [88, 154, 248, 186, 48, 14, 123, 244];
/**
 * Creates a _CloseMarket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 */
function createCloseMarketInstruction(accounts) {
    var market = accounts.market, owner = accounts.owner;
    var data = closeMarketStruct.serialize({
        instructionDiscriminator: closeMarketInstructionDiscriminator,
    })[0];
    var keys = [
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
            pubkey: web3.SYSVAR_CLOCK_PUBKEY,
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
exports.createCloseMarketInstruction = createCloseMarketInstruction;
