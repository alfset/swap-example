# Cosmos App Buy using osmos

<p align="center" width="100%">
    <img height="148" src="" />
</p>


Set up a modern Cosmos app by running one command ⚛️

## Demo

https://user-images.githubusercontent.com/545047/192061992-f0e1106d-f4b2-4879-ab0a-896f22ee4f49.mp4

## Overview

```
git clone https://github.com/alfset/swap-example
cd $HOME/swap-example/swap-example
yarn && yarn dev

# now your app is running on localhost:3000!
```

### Get Started Immediately


## Development

Because the nature of how template boilerplates are generated, we generate `yarn.lock` files inside of nested packages so we can fix versions to avoid non-deterministic installations.

When adding packages, yarn workspaces will use the root `yarn.lock`. It could be ideal to remove it while adding packages, and when publishing or pushing new changes, generating the nested lock files.

In the root, to remove all nested lock files:

```
yarn locks:remove
```

When you need to remove/generate locks for all nested packages, simply run `yarn locks` in the root:

```
yarn locks
```

## Credits

🛠 Built by Cosmology

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.
