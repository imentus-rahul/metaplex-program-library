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
var tape_1 = require("tape");
var actions_1 = require("./actions");
var amman_1 = require("@metaplex-foundation/amman");
var utils_1 = require("./utils");
var transactions_1 = require("./transactions");
var src_1 = require("../src");
(0, utils_1.killStuckProcess)();
(0, tape_1)('close-market: success', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, payer, connection, transactionHandler, store, sellingResource, treasuryMint, startDate, params, market, marketTx, MarketRes, marketAccount, marketData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, actions_1.createPrerequisites)()];
            case 1:
                _a = _b.sent(), payer = _a.payer, connection = _a.connection, transactionHandler = _a.transactionHandler;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58());
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ connection", connection["_rpcEndpoint"]);
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 22 ~ test ~ payer", payer.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.createStore)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        params: {
                            name: 'Store',
                            description: 'Description',
                        },
                    })];
            case 2:
                store = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 36 ~ test ~ store", store.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.initSellingResource)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        store: store.publicKey,
                        maxSupply: 100,
                    })];
            case 3:
                sellingResource = (_b.sent()).sellingResource;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 39 ~ test ~ sellingResource", sellingResource.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.mintNFT)({
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                    })];
            case 4:
                treasuryMint = (_b.sent()).mint;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 49 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58());
                startDate = Math.round(Date.now() / 1000) + 2;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 56 ~ test ~ startDate", startDate);
                params = {
                    name: 'Market',
                    description: '',
                    startDate: startDate,
                    endDate: null,
                    mutable: true,
                    price: 1,
                    piecesInOneWallet: 1,
                };
                return [4 /*yield*/, (0, actions_1.createMarket)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        store: store.publicKey,
                        sellingResource: sellingResource.publicKey,
                        treasuryMint: treasuryMint.publicKey,
                        params: params,
                    })];
            case 5:
                market = (_b.sent()).market;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 67 ~ test ~ market", market.publicKey.toBase58());
                return [4 /*yield*/, (0, utils_1.sleep)(3000)];
            case 6:
                _b.sent();
                return [4 /*yield*/, (0, transactions_1.closeMarket)({
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        market: market,
                    })];
            case 7:
                marketTx = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 87 ~ test ~ marketTx - closeMarket: ", marketTx);
                return [4 /*yield*/, transactionHandler.sendAndConfirmTransaction(marketTx, [payer], amman_1.defaultSendOptions)];
            case 8:
                MarketRes = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 94 ~ test ~ MarketRes", MarketRes.txSignature);
                (0, utils_1.logDebug)("market: ".concat(market.publicKey));
                (0, amman_1.assertConfirmedTransaction)(t, MarketRes.txConfirmed);
                return [4 /*yield*/, connection.getAccountInfo(market.publicKey)];
            case 9:
                marketAccount = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 100 ~ test ~ marketAccount", marketAccount);
                marketData = src_1.MarketAccountData.deserialize(marketAccount.data)[0];
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 102 ~ test ~ marketData", marketData);
                t.assert('Ended' === marketData.state.toString());
                return [2 /*return*/];
        }
    });
}); });
(0, tape_1)('close-market: should fail when the market has the specific endDate', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, payer, connection, transactionHandler, store, sellingResource, treasuryMint, startDate, params, market, marketTx, tx, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, actions_1.createPrerequisites)()];
            case 1:
                _a = _b.sent(), payer = _a.payer, connection = _a.connection, transactionHandler = _a.transactionHandler;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ transactionHandler", transactionHandler["payer"].publicKey.toBase58());
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ connection", connection["_rpcEndpoint"]);
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 111 ~ test ~ payer", payer.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.createStore)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        params: {
                            name: 'Store',
                            description: 'Description',
                        },
                    })];
            case 2:
                store = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 125 ~ test ~ store", store.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.initSellingResource)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        store: store.publicKey,
                        maxSupply: 100,
                    })];
            case 3:
                sellingResource = (_b.sent()).sellingResource;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 128 ~ test ~ sellingResource", sellingResource.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.mintNFT)({
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                    })];
            case 4:
                treasuryMint = (_b.sent()).mint;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 138 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58());
                startDate = Math.round(Date.now() / 1000) + 2;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 145 ~ test ~ startDate", startDate);
                params = {
                    name: 'Market',
                    description: '',
                    startDate: startDate,
                    endDate: startDate + 4000,
                    mutable: true,
                    price: 1,
                    piecesInOneWallet: 1,
                };
                return [4 /*yield*/, (0, actions_1.createMarket)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        store: store.publicKey,
                        sellingResource: sellingResource.publicKey,
                        treasuryMint: treasuryMint.publicKey,
                        params: params,
                    })];
            case 5:
                market = (_b.sent()).market;
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 157 ~ test ~ market", market.publicKey.toBase58());
                return [4 /*yield*/, (0, utils_1.sleep)(3000)];
            case 6:
                _b.sent();
                return [4 /*yield*/, (0, transactions_1.closeMarket)({
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        market: market,
                    })];
            case 7:
                marketTx = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 176 ~ test ~ marketTx", marketTx);
                (0, utils_1.logDebug)("market: ".concat(market.publicKey));
                console.log("Expected Transaction to fail in next line");
                _b.label = 8;
            case 8:
                _b.trys.push([8, 10, , 11]);
                return [4 /*yield*/, transactionHandler.sendAndConfirmTransaction(marketTx, [payer], amman_1.defaultSendOptions)];
            case 9:
                tx = _b.sent();
                console.log("🚀 ~ file: closeMarket.test.ts ~ line 182 ~ test ~ tx", tx.txSignature);
                return [3 /*break*/, 11];
            case 10:
                error_1 = _b.sent();
                (0, utils_1.logDebug)('expected transaction to fail due to limited market duration ');
                (0, amman_1.assertError)(t, error_1, [/0x1782/i]);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); });
