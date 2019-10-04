#! /usr/bin/env node

const CredentialManager = require("../lib/credentialManager");

const manager = new CredentialManager("helloConsoleApp2");
manager.getKeyAndSecret()
    .then(credentials => {
        console.log(credentials);
    });