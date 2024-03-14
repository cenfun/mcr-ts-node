// import type { CoverageReportOptions } from "monocart-coverage-reports";
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as TsNode from 'ts-node';

const compileEntrySource = (entry) => {
    // console.log(entry.url);
    // console.log("fake source", entry.source.length);
    // transpile fake source
    const filePath = fileURLToPath(entry.url);
    // console.log(filePath);

    const originalSource = fs.readFileSync(filePath).toString('utf-8');
    const fileName = path.basename(filePath);

    const tn = TsNode.create({});
    const source = tn.compile(originalSource, fileName);
    // console.log("compiled source", source.length);

    // console.log("======================================")
    // console.log(entry.source)
    // console.log("======================================")
    // console.log(source)

    // console.log("originalSource.length", originalSource.length)
    entry.source = source;
    entry.fake = false;

};

const coverageOptions = {
    // logging: "debug",

    reports: [
        ['v8'],
        ['console-details']
    ],

    entryFilter: {
        '**/node_modules/**': false,
        '**/src/**': true
    },

    onEntry: (entry) => {
        if (entry.fake) {
            compileEntrySource(entry);
        }
    }
};

export default coverageOptions;
