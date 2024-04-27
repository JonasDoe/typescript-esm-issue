# Demonstration of the Transpilation Failure

## Requirements
- Create a CommonJS project with Node22, so `--experimental-require-module` is supported.
- Import the default export of an ESM dependency
- Enable esModuleInterop (otherwise it will work)
- Transpilation will create an object like `{"default": {"default": ...}}`

## To Reproduce
```
npm run js
```
The script will fail with `TypeError: oidc_provider_1.default is not a constructor`.
Head over to the generated `index.js` and to the faulty line:
```javascript
console.log('Created new Provider:', new oidc_provider_1.default('http://example.tld'));
```
Replace it with:
```javascript
console.log('Created new Provider:', new oidc_provider_1.default.default('http://example.tld'));
```
Now, it's working and will log the `Provider` object.