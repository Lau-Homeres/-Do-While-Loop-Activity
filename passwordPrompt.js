const readline = require('readline');

const correctPassword = "chanlau0601";

// Create interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForPassword() {
    rl.question('Please enter your password: ', (userPassword) => {
        if (userPassword === correctPassword) {
            console.log('Success! You have entered the correct password.');
            rl.close(); // Close the readline interface when the password is correct
        } else {
            console.log('Incorrect password, please try again.');
            askForPassword(); // Ask for the password again
        }
    });
}

// Initial call to ask for password
askForPassword();
