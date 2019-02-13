"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs_1 = require("fs");
function getFileConfig() {
    const filePath = path.join(process.cwd(), "jest-screenshot.json");
    if (!fs_1.existsSync(filePath)) {
        return;
    }
    try {
        return JSON.parse(fs_1.readFileSync(filePath, "utf8"));
    }
    catch (err) {
        throw new Error(`Jest: Failed to parse jest-screenshot config at "jest-screenshot.json": ${err.message}`);
    }
}
function getPackageConfig() {
    const packagePath = path.join(process.cwd(), "package.json");
    if (!fs_1.existsSync(packagePath)) {
        return;
    }
    try {
        const packageContent = JSON.parse(fs_1.readFileSync(packagePath, "utf8"));
        return packageContent.jestScreenshot;
    }
    catch (err) {
        throw new Error(`Jest: Failed to parse package.json at "package.json": ${err.message}`);
    }
}
function config(customConfig) {
    const fileConfig = getFileConfig();
    const packageConfig = getPackageConfig();
    const configuration = Object.assign({}, packageConfig, fileConfig, customConfig);
    const { pixelThresholdAbsolute, pixelThresholdRelative } = configuration;
    if (typeof pixelThresholdAbsolute === "undefined" && typeof pixelThresholdRelative === "undefined") {
        configuration.pixelThresholdRelative = 0;
    }
    return configuration;
}
exports.config = config;
//# sourceMappingURL=config.js.map