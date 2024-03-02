# mcr-ts-node
Monocart Coverage Reports + TypeScript

# Usage
```js
{
    "scripts": {
        "test": "cross-env NODE_OPTIONS=\"--loader ts-node/esm --no-warnings\" npx mcr ts-node ./src/example.ts -c mcr.config.ts -o coverage-reports/ts",
        "mocha": "cross-env NODE_OPTIONS=\"--loader ts-node/esm --no-warnings\" npx mcr mocha ./test/**/*.ts -c mcr.config.ts -o coverage-reports/mocha"
    }
}
```
