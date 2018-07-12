"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Create Express server
var app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3000);
exports.default = app;
