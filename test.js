var input = require('readline-sync');
do {
    var username = input.question('\n\t Username: ');
    while(username == '') {
        console.log('\x1b[33m******Please enter your username!!******\x1b[37m');
        break;
    }
} while(username == '');
do {
    var password = input.question('\n\t Password: ');
    while(password == '') {
        console.log('\x1b[33m******Please enter your password!!******\x1b[37m');
        break;
    }
} while(password == '');
if(username != "admin" || password != "password") {
    console.log("\x1b[31m******Invalid username or password!******\x1b[37m");
} else {
    console.log('\x1b[32m******Login successful...******\x1b[37m\n');
    var name = '\x1b[36m' + username + '\x1b[37m'; 
}