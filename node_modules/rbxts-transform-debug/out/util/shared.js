"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpressionDebugPrefixLiteral = createExpressionDebugPrefixLiteral;
exports.formatTransformerDebug = formatTransformerDebug;
exports.formatTransformerInfo = formatTransformerInfo;
exports.formatTransformerWarning = formatTransformerWarning;
exports.formatTransformerDiagnostic = formatTransformerDiagnostic;
exports.getDebugInfo = getDebugInfo;
exports.createDebugPrefixLiteral = createDebugPrefixLiteral;
exports.createErrorPrefixLiteral = createErrorPrefixLiteral;
var path_1 = __importDefault(require("path"));
var typescript_1 = __importStar(require("typescript"));
var chalk_1 = __importDefault(require("chalk"));
/**
 * Creates a debug prefix string literal with the expression information of the node
 * `[<filePath>:<lineNumber>] <expressionText> =`
 */
function createExpressionDebugPrefixLiteral(node) {
    var sourceFile = node.getSourceFile();
    var linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    var relativePath = path_1.default.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return typescript_1.factory.createStringLiteral("[".concat(relativePath, ":").concat(linePos.line + 1, "] ").concat(node.getText(), " ="), true);
}
function formatTransformerDebug(message, node) {
    if (node) {
        var info = getDebugInfo(node);
        var str = "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.green("macro debug"), " ").concat(chalk_1.default.cyan(info.relativePath), ":").concat(chalk_1.default.yellow(info.linePos), " - ").concat(message, "\n").concat(chalk_1.default.italic(node.getText()));
        return str;
    }
    else {
        return "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.green("macro debug"), " - ") + message;
    }
}
function formatTransformerInfo(message, node) {
    if (node) {
        var str = "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.cyan("macro info"), " - ").concat(message, "\n").concat(chalk_1.default.italic(node.getText()));
        return str;
    }
    else {
        return "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.cyan("macro info"), " ") + message;
    }
}
function formatTransformerWarning(message, node, suggestion) {
    if (node) {
        var info = getDebugInfo(node);
        var str = "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.yellow("macro warning"), " ").concat(chalk_1.default.cyan(info.relativePath), ":").concat(chalk_1.default.yellow(info.linePos), " - ").concat(message, "\n").concat(chalk_1.default.italic(node.getText()));
        if (suggestion) {
            str += "\n* " + chalk_1.default.yellow(suggestion);
        }
        return str;
    }
    else {
        return "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.yellow("macro warning"), " - ") + message;
    }
}
function formatTransformerDiagnostic(message, node, suggestion) {
    if (node) {
        var info = getDebugInfo(node);
        var str = "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.red("macro error"), " ").concat(chalk_1.default.cyan(info.relativePath), ":").concat(chalk_1.default.yellow(info.linePos), " - ").concat(message, "\n").concat(chalk_1.default.italic(node.getText()));
        if (suggestion) {
            str += "\n* " + chalk_1.default.yellow(suggestion);
        }
        return str;
    }
    else {
        return "".concat(chalk_1.default.gray("[rbxts-transform-debug]"), " ").concat(chalk_1.default.red("macro error"), " - ") + message;
    }
}
function getDebugInfo(node) {
    var sourceFile = node.getSourceFile();
    var linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    var relativePath = path_1.default.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return {
        sourceFile: sourceFile,
        linePos: linePos.line + 1,
        relativePath: relativePath,
    };
}
/**
 * Creates a debug prefix string literal
 * `[<filePath>:<lineNumber>]`
 */
function createDebugPrefixLiteral(node) {
    var sourceFile = node.getSourceFile();
    var linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    var relativePath = path_1.default.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return typescript_1.factory.createStringLiteral("[".concat(relativePath, ":").concat(linePos.line + 1, "]"), true);
}
function createErrorPrefixLiteral(node) {
    var sourceFile = node.getSourceFile();
    var linePos = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    var relativePath = path_1.default.relative(process.cwd(), node.getSourceFile().fileName).replace(/\\/g, "/");
    return typescript_1.factory.createBinaryExpression(typescript_1.factory.createStringLiteral("[".concat(relativePath, ":").concat(linePos.line + 1, "]"), true), typescript_1.factory.createToken(typescript_1.default.SyntaxKind.PlusToken), node.arguments[0]);
}
