import { default as Provider } from 'oidc-provider';

// enable to log the default import, and see how it still has another "default" property
// console.log('Imported Provider:', Provider)
console.log('Created new Provider:', new Provider('http://example.tld'))