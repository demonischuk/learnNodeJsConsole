const ConfigStore = require("configstore");
const inquirer = require("inquirer");

const CredentialManager = function (name) {
    const conf = new ConfigStore(name);

    this.getKeyAndSecret = async () => {
        const key = conf.get("apiKey");

        if (key) {
            const secret = conf.get("apiSecret");


            return [key, secret];
        }

        const answers = await inquirer.prompt([{
            type: "input",
            name: "key",
            message: "What is the key",
            validate: (value) => {
                if (value) {
                    return true;
                }

                return "Please provide a key";
            }
        },
        {
            type: "input",
            name: "secret",
            message: "What is the secret",
            validate: (value) => {
                if (value) {
                    return true;
                }

                return "Please provide a secret";
            }
        }]);

        conf.set("apiKey", answers.key);
        conf.set("apiSecret", answers.secret);

        return [answers.key, answers.secret];
    }
};

module.exports = CredentialManager;