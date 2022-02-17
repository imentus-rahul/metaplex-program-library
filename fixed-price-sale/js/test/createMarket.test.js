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
var utils_1 = require("./utils");
var actions_1 = require("./actions");
(0, utils_1.killStuckProcess)();
(0, tape_1.default)('create-market: success', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, payer, connection, transactionHandler, store, sellingResource, treasuryMint, startDate, params, _b, market, treasuryHolder;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, actions_1.createPrerequisites)()];
            case 1:
                _a = _c.sent(), payer = _a.payer, connection = _a.connection, transactionHandler = _a.transactionHandler;
                console.log("🚀 ~ file: createMarket.test.ts ~ line 16 ~ test ~ transactionHandler", transactionHandler);
                console.log("🚀 ~ file: createMarket.test.ts ~ line 16 ~ test ~ connection", connection["_rpcEndpoint"]);
                console.log("🚀 ~ file: createMarket.test.ts ~ line 16 ~ test ~ payer", payer.publicKey.toBase58());
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
                store = _c.sent();
                console.log("🚀 ~ file: createMarket.test.ts ~ line 30 ~ test ~ store", store.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.initSellingResource)({
                        test: t,
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                        store: store.publicKey,
                        maxSupply: 100,
                    })];
            case 3:
                sellingResource = (_c.sent()).sellingResource;
                console.log("🚀 ~ file: createMarket.test.ts ~ line 33 ~ test ~ sellingResource", sellingResource.publicKey.toBase58());
                return [4 /*yield*/, (0, actions_1.mintNFT)({
                        transactionHandler: transactionHandler,
                        payer: payer,
                        connection: connection,
                    })];
            case 4:
                treasuryMint = (_c.sent()).mint;
                console.log("🚀 ~ file: createMarket.test.ts ~ line 43 ~ test ~ treasuryMint", treasuryMint.publicKey.toBase58());
                startDate = Math.round(Date.now() / 1000) + 5;
                params = {
                    name: 'Market',
                    description: '',
                    startDate: startDate,
                    endDate: startDate + 5 * 20,
                    mutable: true,
                    price: 0.001,
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
                _b = _c.sent(), market = _b.market, treasuryHolder = _b.treasuryHolder;
                console.log("🚀 ~ file: createMarket.test.ts ~ line 63 ~ test ~ treasuryHolder", treasuryHolder.publicKey.toBase58());
                console.log("🚀 ~ file: createMarket.test.ts ~ line 63 ~ test ~ market", market.publicKey.toBase58());
                return [2 /*return*/];
        }
    });
}); });