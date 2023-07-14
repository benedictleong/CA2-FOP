var input = require('readline-sync');

function checkInput(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

var creditsTotal = 20;

do {
    var confirmRental1 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
    var isconfirmRental = checkInput(confirmRental1);
    if(isconfirmRental == false) {
        if(creditsTotal < 20) {
            console.log('\n\x1b[33m***TRANSACTION DECLINED, INSUFFICIENT VALUE! Returning back to previous menu...***\x1b[37m');
            console.log();
            break;
        } else if(creditsTotal >= 20) {
            if(confirmRental1 == 'CONFIRM') {
                creditsTotal -= 20;
                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits left. The movie will be sent to your registered email.***\x1b[37m\n');
                break;
            }
        } else if(confirmRental1 == 'EXIT') {
            console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
            console.log();
            break;
        } else if(confirmRental1 != 'CONFIRM') {
            console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
        }
    } else if(isconfirmRental == true) {
        console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
    }
} while(true);
