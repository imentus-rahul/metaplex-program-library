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
exports.initSellingResource = void 0;
var amman_1 = require("@metaplex-foundation/amman");
var web3_js_1 = require("@solana/web3.js");
var utils_1 = require("../../src/utils");
var utils_2 = require("../utils");
var createTokenAccount_1 = require("../transactions/createTokenAccount");
var mintNft_1 = require("./mintNft");
var instructions_1 = require("../../src/instructions");
var mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
var initSellingResource = function (_a) {
    var test = _a.test, transactionHandler = _a.transactionHandler, payer = _a.payer, connection = _a.connection, store = _a.store, maxSupply = _a.maxSupply;
    return __awaiter(void 0, void 0, void 0, function () {
        var creator, _b, masterEdition, masterEditionBump, resourceToken, resourceMint, metadata, _c, vaultOwner, vaultOwnerBump, _d, vault, createTokenTx, createVaultRes, sellingResource, initSellingResourceInstruction, initSellingResourceTx, initSellingResourceRes;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    creator = new mpl_token_metadata_1.Creator({
                        address: payer.publicKey.toBase58(),
                        share: 100,
                        verified: true,
                    });
                    return [4 /*yield*/, (0, mintNft_1.mintNFT)({
                            transactionHandler: transactionHandler,
                            payer: payer,
                            connection: connection,
                            creators: [creator],
                        })];
                case 1:
                    _b = _e.sent(), masterEdition = _b.edition, masterEditionBump = _b.editionBump, resourceToken = _b.tokenAccount, resourceMint = _b.mint, metadata = _b.metadata;
                    return [4 /*yield*/, (0, utils_1.findVaultOwnerAddress)(resourceMint.publicKey, store)];
                case 2:
                    _c = _e.sent(), vaultOwner = _c[0], vaultOwnerBump = _c[1];
                    return [4 /*yield*/, (0, createTokenAccount_1.createTokenAccount)({
                            payer: payer.publicKey,
                            mint: resourceMint.publicKey,
                            connection: connection,
                            owner: vaultOwner,
                        })];
                case 3:
                    _d = _e.sent(), vault = _d.tokenAccount, createTokenTx = _d.createTokenTx;
                    return [4 /*yield*/, transactionHandler.sendAndConfirmTransaction(createTokenTx, [vault], amman_1.defaultSendOptions)];
                case 4:
                    createVaultRes = _e.sent();
                    (0, amman_1.assertConfirmedTransaction)(test, createVaultRes.txConfirmed);
                    sellingResource = web3_js_1.Keypair.generate();
                    initSellingResourceInstruction = (0, instructions_1.createInitSellingResourceInstruction)({
                        store: store,
                        admin: payer.publicKey,
                        sellingResource: sellingResource.publicKey,
                        sellingResourceOwner: payer.publicKey,
                        metadata: metadata,
                        masterEdition: masterEdition,
                        resourceMint: resourceMint.publicKey,
                        resourceToken: resourceToken.publicKey,
                        vault: vault.publicKey,
                        owner: vaultOwner,
                    }, {
                        masterEditionBump: masterEditionBump,
                        vaultOwnerBump: vaultOwnerBump,
                        maxSupply: maxSupply,
                    });
                    return [4 /*yield*/, (0, utils_2.createAndSignTransaction)(connection, payer, [initSellingResourceInstruction], [sellingResource])];
                case 5:
                    initSellingResourceTx = _e.sent();
                    return [4 /*yield*/, transactionHandler.sendAndConfirmTransaction(initSellingResourceTx, [sellingResource], amman_1.defaultSendOptions)];
                case 6:
                    initSellingResourceRes = _e.sent();
                    (0, utils_2.logDebug)("selling-resource: ".concat(sellingResource.publicKey));
                    (0, amman_1.assertConfirmedTransaction)(test, initSellingResourceRes.txConfirmed);
                    return [2 /*return*/, {
                            sellingResource: sellingResource,
                            vault: vault,
                            vaultOwner: vaultOwner,
                            vaultOwnerBump: vaultOwnerBump,
                            resourceMint: resourceMint,
                            metadata: metadata,
                        }];
            }
        });
    });
};
exports.initSellingResource = initSellingResource;