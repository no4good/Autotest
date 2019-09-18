const fetch = require('node-fetch');
{
    const url = 'URL'
    const args = require('./testData.json');

    class Client {
        static async userCreation(url, args) {
            const response = await fetch(`${url}/auth/signUp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: args.login,
                    password: args.password,
                    last_name: args.last_name,
                    first_name: args.first_name,
                    language: args.language
                })
            });
            return await response.json();
        };
    };

    async function createUser(url, args) {

        console.log(`Creating user for ${url}`);

        const response = await Client.userCreation(url, args);

        if (response.status === 200) {
            console.log(`User is created on ${url}`);
            return Promise.resolve();
        }
        const error = new Error(`Failed to successfully create user for ${url}`);
        error.message = '' + response;
        return Promise.reject(error);
    }

    function handleError_(error) {
        const errorBody = () => {
            return error && error.response ? error.response.body : error;
        };
        console.log('Error during bootstrap, exiting', errorBody());
        process.exit(1);
    };

    module.exports = (async done => {
        console.log('========Start=========')
        try {
            console.log('========Creating=========')
            await createUser(url, args);
        } catch (error) {
            done(handleError_(error));
        }
    });
}
