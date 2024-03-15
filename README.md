# mcr-ts-node
Monocart Coverage Reports + ts-node TypeScript

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
