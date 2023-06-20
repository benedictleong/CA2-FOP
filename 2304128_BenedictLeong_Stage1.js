//name  = Benedict Leong Jin Yew
//class = DISM/1A/04
//adm   = 2304128
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
console.log('Hi ' + name + ', please select your choice:');
console.log('\t' + '1. Display All Movies');
console.log('\t' + '2. Coming Soon');
console.log('\t' + '3. Coming Soon');
console.log('\t' + '4. Coming Soon');
console.log('\t' + '5. Coming Soon');
console.log('\t' + '6. Exit');
var reply = input.question('\t' + '>> ');



do {
    //movie details
} while(reply == 1) do {
    console.log('Sorry, work in progress!');
    console.log();
    console.log('Hi ' + name + ', please select your choice:');
    console.log('\t' + '1. Display All Movies');
    console.log('\t' + '2. Coming Soon');
    console.log('\t' + '3. Coming Soon');
    console.log('\t' + '4. Coming Soon');
    console.log('\t' + '5. Coming Soon');
    console.log('\t' + '6. Exit');
    reply = input.question('\t' + '>> ');
} while(reply == 2 || reply == 3 || reply == 4 || reply == 5) do {
    console.log('Please enter a valid input.');
    console.log();
    console.log('Hi ' + name + ', please select your choice:');
    console.log('\t' + '1. Display All Movies');
    console.log('\t' + '2. Coming Soon');
    console.log('\t' + '3. Coming Soon');
    console.log('\t' + '4. Coming Soon');
    console.log('\t' + '5. Coming Soon');
    console.log('\t' + '6. Exit');
    reply = input.question('\t' + '>> ');
} while(reply < 1 || reply > 6)