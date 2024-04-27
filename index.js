"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oidc_provider_1 = __importDefault(require("oidc-provider"));
// enable to log the default import, and see how it still has another "default" property
// console.log('Imported Provider:', Provider)
console.log('Created new Provider:', new oidc_provider_1.default('http://example.tld'));
