"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_match_image_snapshot_1 = require("./to-match-image-snapshot");
const config_1 = require("./config");
/**
 * This function is used to setup and initialize **jest-screenshot**.
 *
 * A configuration object can be passed as the first argument.
 */
function setupJestScreenshot(customConfig) {
    if (typeof expect === "undefined") {
        throw new Error("Jest: Could not find `expect`. Can't setup jest-screenshot.");
    }
    expect.extend({
        toMatchImageSnapshot(received, parameters) {
            return to_match_image_snapshot_1.toMatchImageSnapshot.call(this, received, config_1.config(customConfig), parameters);
        },
    });
}
exports.setupJestScreenshot = setupJestScreenshot;
//# sourceMappingURL=jest-screenshot.js.map