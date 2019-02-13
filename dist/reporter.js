"use strict";
const config_1 = require("./config");
const fs_1 = require("fs");
const path = require("path");
const rimraf_1 = require("rimraf");
const filenames_1 = require("./filenames");
const template = (testResults) => `<html>
    <head>
        <meta charset="utf-8" />
        <title>Jest Screenshot Report</title>
        <link href="dist/report-viewer.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <div id="root"></div>
        <script>
            window.testResults = ${JSON.stringify(testResults)};
        </script>
        <script src="dist/report-viewer.js"></script>
    </body>
</html>`;
module.exports = class JestScreenshotReporter {
    constructor() {
        this.config = config_1.config();
        const { reportDir: reportDirName } = this.config;
        const reportDir = filenames_1.getReportDir(reportDirName);
        if (fs_1.existsSync(reportDir)) {
            rimraf_1.sync(reportDir);
        }
    }
    onRunComplete(contexts, { testResults, numFailedTests }) {
        const { reportDir: reportDirName, noReport } = this.config;
        const reportDir = filenames_1.getReportDir(reportDirName);
        const reportsDir = path.join(reportDir, "reports");
        // if (numFailedTests === 0) { return; }
        if (noReport) {
            return;
        }
        if (!fs_1.existsSync(reportsDir)) {
            return;
        }
        const failedSnapshots = fs_1.readdirSync(reportsDir).map(testPath => {
            const infoFilePath = path.join(reportDir, "reports", testPath, "info.json");
            const info = JSON.parse(fs_1.readFileSync(infoFilePath, "utf8"));
            return info;
        });
        if (failedSnapshots.length === 0) {
            return;
        }
        const fileReports = testResults.reduce((reports, testFile) => {
            const testFilePath = path.relative(process.cwd(), testFile.testFilePath);
            const failedTests = testFile.testResults.reduce((failed, test) => {
                const { fullName } = test;
                const matchingFailedSnapshots = failedSnapshots.filter(failedSnapshot => {
                    return failedSnapshot.testName === fullName && failedSnapshot.testFileName === testFilePath;
                });
                if (matchingFailedSnapshots.length === 0) {
                    return failed;
                }
                failed.push({
                    titles: [...test.ancestorTitles, test.title],
                    failedSnapshots: matchingFailedSnapshots,
                });
                return failed;
            }, []);
            if (failedTests.length === 0) {
                return reports;
            }
            reports.push({
                testFilePath,
                failedTests,
            });
            return reports;
        }, []);
        fs_1.writeFileSync(path.join(reportDir, "index.html"), template({
            files: fileReports,
        }));
        try {
            fs_1.mkdirSync(path.join(reportDir, "dist"));
        }
        catch (err) {
            // tslint: disable-line
        }
        [
            "report-viewer.js",
            "report-viewer.js.map",
            "report-viewer.css",
            "report-viewer.css.map",
        ].forEach(fileName => fs_1.writeFileSync(path.join(reportDir, "dist", fileName), fs_1.readFileSync(path.join(__dirname, fileName))));
    }
};
//# sourceMappingURL=reporter.js.map