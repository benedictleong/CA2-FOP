var input = require('readline-sync');

//input checker: number
function checkInput(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

//movie display storage/class
class Movie {
    constructor(name, genre, runningTime, releaseDate, rating) {
        this.name = name;
        this.genre = genre;
        this.runningTime = runningTime;
        this.releaseDate = releaseDate;
        this.rating = rating;
    }
    displayMovieDetails() {
        var s = 'Name \t\t: ' + this.name;
        s += '\nGenre\t\t: ' + this.genre;
        s += '\nRunning Time\t: ' + this.runningTime;
        s += '\nRelease Date\t: ' + this.releaseDate;
        s += '\nRating\t\t: ' + this.rating;
        return s;
    }
}
var movie1 = new Movie('Black Panther:Wakanda Forever 2022','Adventure, Action,Drama, Fantasy, Sci-Fi,Thriller',161,'11 Nov 2022',[9,42]);
var movie2 = new Movie('Avatar: The Way of Water','Adventure, Sci-Fi',192,'16 Dec 2022',[4, 15]);
var movie3 = new Movie('Fast X','Crime, Action, Mystery,Thriller',43,'19 May 2023',[28, 60]);
var movie4 = new Movie('Ant-Man and the Wasp: Quantumania','Adventure, Action',120,'16 Feb 2023',[18,80]);
var movie5 = new Movie('M3GAN','Horror,Mystery,Thriller',102,'6 Jan 2023',[20,70]);
var addedmovie = new Movie({
    name: '',
    genre: '',
    runningTime: '',
    releaseDate: '',
    rating: ''
});

//question
console.log('Welcome to Silver Vintage Movie Review Program');
var name = input.question('Please enter your name: ');
console.log();

do {
    console.log('Hi ' + name + ', please select your choice:');
    console.log('\t' + '1. Display All Movies\n\t2. Add Movie\n\t3. Add Rating\n\t4. Latest 3 Release Date\n\t5. Filter by Genre\n\t6. Exit');
    var reply = input.question('\t' + '>> ');
    var isNumber = checkInput(reply);
    if(reply == 2) {
        //add movie function
        var replyName = input.question('\n\t' + "Please enter Movie's name: ");
        addedmovie.name = replyName;

        console.log("\n\tPlease enter Movie's genre(s):" + '\n\t1) Action' + '\n\t2) Adventure' + '\n\t3) Crime' + '\n\t4) Drama' + '\n\t5) Fantasy' + '\n\t6) Horror' + '\n\t7) Mystery' + '\n\t8) Sci-Fi' + '\n\t9) Thriller');
        var replyGenre = input.question('\t' + '>> ');
        addedmovie.genre = replyGenre;

        var replyreleaseDate = input.question("\n\tPlease enter Movie's release date: ");
        addedmovie.releaseDate = replyreleaseDate;

        var replyrunningTime = input.question("\n\tPlease enter Movie's running time (mins): ");
        addedmovie.runningTime = replyrunningTime;

        console.log('\n\t***The movie ' + "'" + replyName + "'" + ' has been added successfully!***\n');
    } else if(reply == 1) {
        //display movie function
        console.log(movie1.displayMovieDetails() + '\n\n' + movie2.displayMovieDetails()+ '\n\n' + movie3.displayMovieDetails()+ '\n\n' + movie4.displayMovieDetails()+ '\n\n' + movie5.displayMovieDetails() + '\n\n' + addedmovie.displayMovieDetails() + '\n');
    } else if(reply < 1 || reply > 6) {
        console.log('Please enter a valid input.');
        console.log();
    }  else if( isNumber == false) {
        console.log('Please enter a valid input.');
        console.log();
    }
} while(reply != 6);