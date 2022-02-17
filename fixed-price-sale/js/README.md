# mpl-fixed-price-sale

This package contains the fixed sale price contract SDK code.

## Developing

In order to update the generated SDK when the rust contract was updated please run:

```
yarn api:gen
```

NOTE: at this point this only generates the IDL json file but later will generate TypeScript
definitions and SDK code as well, derived from that IDL.

## LICENSE

Apache v2.0

## Test

To run tests locally use

```
yarn amman:start
yarn build
yarn test
```

### devnet.json
solana-keygen new -o devnet.json
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none): 

Wrote new keypair to devnet.json
pubkey: GuaTL23HW1oExCmW8oY5UvgeJaKKpLfemNJZ6uoSnFJD
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
outer slab brass extra crash tuna quick clown crush vote regular library