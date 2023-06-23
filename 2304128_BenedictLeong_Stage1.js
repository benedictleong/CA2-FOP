//name  = Benedict Leong Jin Yew
//class = DISM/1A/04
//adm   = 2304128
function checkInput(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

var input = require('readline-sync');
var movie1 = ['Black Panther:Wakanda Forever 2022','Adventure, Action,Drama, Fantasy, Sci-Fi,Thriller',161,'11 Nov 2022',[9,42]];
var movie2 = ['Avatar: The Way of Water','Adventure, Sci-Fi',192,'16 Dec 2022',[4, 15]];
var movie3 = ['Fast X','Crime, Action, Mystery,Thriller',43,'19 May 2023',[28, 60]];
var movie4 = ['Ant-Man and the Wasp: Quantumania','Adventure, Action',120,'16 Feb 2023',[18,80]];
var movie5 = ['M3GAN','Horror,Mystery,Thriller',102,'6 Jan 2023',[20,70]];
var movieList = [movie1,movie2,movie3,movie4,movie5];

console.log('Welcome to Silver Vintage Movie Review Program');
var name = input.question('Please enter your name: ');
console.log();

for(var g = 0; g < 5; g++) {
    var hours = Math.floor(movieList[g][2]/60);
    var minutes = movieList[g][2] % 60;
    if(hours == 0){
        movieList[g][2] = minutes + 'm';
    }
    else if(minutes == 0){
        movieList[g][2] = hours + 'h';
    }
    else {
        movieList[g][2] = hours + 'h ' + minutes + 'm';
    }
    movieList[g][4][1] = Math.round((movieList[g][4][1] / movieList[g][4][0]) * 10) / 10
}
do{
    console.log('Hi ' + name + ', please select your choice:');
    console.log('\t' + '1. Display All Movies\n\t2. Coming Soon\n\t3. Coming Soon\n\t4. Coming Soon\n\t5. Coming Soon\n\t6. Exit');
    var reply = input.question('\t' + '>> ');
    var isNumber = checkInput(reply);
    if(reply == 1) {
        var x = 0;
        for (x = 0;x < 5;x++) {
            console.log('Name \t\t: ' + movieList[x][0] + '\nGenre\t\t: ' + movieList[x][1] + '\nRunning Time\t: ' + movieList[x][2] + '\nRelease Date\t: ' + movieList[x][3] + '\nRating\t\t: ' + movieList[x][4][1] + ' (' + movieList[x][4][0] + ' voters)\n');
        };
    } else if(reply > 1 && reply < 6) {
        console.log('Sorry, work in progress!');
        console.log();
    } else if(reply < 1 || reply > 6) {
        console.log('Please enter a valid input.');
        console.log();
    }  else if( isNumber == false) {
        console.log('Please enter a valid input.');
        console.log();
    }
} while(reply != 6)
console.log('Thank you & goodbye!');
