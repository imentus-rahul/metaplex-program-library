"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.killStuckProcess = exports.connectionURL = exports.DEVNET = exports.logDebug = exports.createAndSignTransaction = exports.sleep = void 0;
var debug_1 = require("debug");
var tape_1 = require("tape");
var web3_js_1 = require("@solana/web3.js");
var sleep_1 = require("./sleep");
Object.defineProperty(exports, "sleep", { enumerable: true, get: function () { return sleep_1.sleep; } });
var createAndSignTransaction_1 = require("./createAndSignTransaction");
Object.defineProperty(exports, "createAndSignTransaction", { enumerable: true, get: function () { return createAndSignTransaction_1.createAndSignTransaction; } });
exports.logDebug = (0, debug_1.default)('mpl:tm-test:debug');
exports.DEVNET = (0, web3_js_1.clusterApiUrl)('devnet');
// export const connectionURL = process.env.USE_DEVNET != null ? DEVNET : LOCALHOST;
// export const connectionURL = "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899";
exports.connectionURL = "https://wispy-shy-paper.solana-devnet.quiknode.pro/ea6417f447e7eed8a4d5b7b28a640613c7ec7c52/";
function killStuckProcess() {
    // solana web socket keeps process alive for longer than necessary which we
    // "fix" here
    tape_1.onFinish(function () { return process.exit(0); });
}
exports.killStuckProcess = killStuckProcess;
