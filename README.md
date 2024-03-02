# mcr-ts-node
Monocart Coverage Reports + TypeScript

## Install
```sh
npm i monocart-coverage-reports -D
npm i ts-node mocha @types/mocha cross-env -D
```

## Usage

- ts-node
```sh
cross-env NODE_OPTIONS="--loader ts-node/esm --no-warnings" npx mcr ts-node ./src/example.ts
```

- Mocha Test Runner
```sh
cross-env NODE_OPTIONS="--loader ts-node/esm --no-warnings" npx mcr mocha ./test/**/*.ts
```

## Resolve the source for `.ts`
When collecting coverage data for the `.ts` file, we can also get the sourcemap from [`source-map-cache`](https://nodejs.org/docs/latest/api/cli.html#source-map-cache), but we can't get the runtime source code, instead, what we get is `lineLengths`, which can only generate a fake source, but it cannot be parsed into an AST. Therefore, we need to compile the source for these ts files with `ts-node`.
```js
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as TsNode from 'ts-node';
const coverageOptions = {
    onEntry: async (entry) => {
        const filePath = fileURLToPath(entry.url)
        const originalSource = fs.readFileSync(filePath).toString("utf-8");
        const fileName = path.basename(filePath);
        const tn = TsNode.create({});
        const source = tn.compile(originalSource, fileName);
        entry.fake = false;
        entry.source = source;
    }
}
```
see [mcr.config.ts](mcr.config.ts)
