var input = require('readline-sync');

//input checker: number
function checkInput(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

//inputchecker: movie name
function checkName() {
    if(input == 'Black Panther:Wakanda Forever 2022') {
        return true;
    } else if(input == 'Avatar: The Way of Water') {
        return true;
    } else if(input == 'Fast X') {
        return true;
    } else if(input == 'Ant-Man and the Wasp: Quantumania') {
        return true;
    } else if(input == 'M3GAN') {
        return true;
    } else {
        return false;
    }
}

//list of genres database
var genre1 = 'Action';
var genre2 = 'Adventure';
var genre3 = 'Crime';
var genre4 = 'Drama';
var genre5 = 'Fantasy';
var genre6 = 'Horror';
var genre7 = 'Mystery';
var genre8 = 'Sci-Fi';
var genre9 = 'Thriller';
var movie1genre = 'Adventure, Action,Drama, Fantasy, Sci-Fi,Thriller';
var movie2genre = 'Adventure, Sci-Fi';
var movie3genre = 'Crime, Action, Mystery,Thriller';
var movie4genre = 'Adventure, Action';
var movie5genre = 'Horror,Mystery,Thriller';
var addedmoviegenre = this.genre;

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
        s += '\nRating\t\t: ' + this.rating[1] + ' (' + this.rating[0] + ' voters)';
        return s;
    }
}
var movie1 = new Movie('Black Panther:Wakanda Forever 2022','Adventure, Action,Drama, Fantasy, Sci-Fi,Thriller',161,'11 Nov 2022',[9,42]);
var movie2 = new Movie('Avatar: The Way of Water','Adventure, Sci-Fi',192,'16 Dec 2022',[4, 15]);
var movie3 = new Movie('Fast X','Crime, Action, Mystery,Thriller',43,'19 May 2023',[28, 60]);
var movie4 = new Movie('Ant-Man and the Wasp: Quantumania','Adventure, Action',120,'16 Feb 2023',[18,80]);
var movie5 = new Movie('M3GAN','Horror,Mystery,Thriller',102,'6 Jan 2023',[20,70]);
var addedmovie = new Movie('',[],'','','');
var movieList = [movie1, movie2, movie3, movie4, movie5, addedmovie];

//change running time from minutes to hours and minutes
for(var g = 0; g < 6; g++) {
    var hours = Math.floor(movieList[g].runningTime/60);
    var minutes = movieList[g].runningTime % 60;
    if(hours == 0){
        movieList[g].runningTime = minutes + 'm';
    }
    else if(minutes == 0){
        movieList[g].runningTime = hours + 'h';
    }
    else {
        movieList[g].runningTime = hours + 'h ' + minutes + 'm';
    }
    movieList[g].rating[1] = Math.round((movieList[g].rating[1] / movieList[g].rating[0]) * 10) / 10
}

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
        //add movie option
        do {
            var replyName = input.question('\n\t' + "Please enter Movie's name: ");
            addedmovie.name = replyName;
            var isvalidName = checkName(replyName);
            if(isvalidName == true) {
                console.log('\tPlease enter a unique movie name!');
            } else {
                do{
                    var replyGenre = input.question("\n\tPlease enter Movie's Genre(s):\n\t1) " + genre1 + '\n\t2) ' + genre2 + '\n\t3) ' + genre3 + '\n\t4) ' + genre4 + '\n\t5) ' + genre5 + '\n\t6) ' + genre6 + '\n\t7) ' + genre7 + '\n\t8) ' + genre8 + '\n\t9) ' + genre9 + '\n\t>> ');
                    replyGenre = replyGenre.split(",");
                    for (var x = 0;x < replyGenre.length;x++){
                        replyGenre[x] = parseInt(replyGenre[x]);
                        var error = false;
                        switch(replyGenre[x]){
                            case 1: 
                                movieList[5].genre.push('Action');
                                break;
                            case 2: 
                                movieList[5].genre.push('Adventure');
                                break;
                            case 3: 
                                movieList[5].genre.push('Crime');
                                break; 
                            case 4: 
                                movieList[5].genre.push('Drama');
                                break;
                            case 5: 
                                movieList[5].genre.push('Fantasy');
                                break;
                            case 6: 
                                movieList[5].genre.push('Horror');
                                break;
                            case 7: 
                                movieList[5].genre.push('Mystery');
                                break;
                            case 8: 
                                movieList[5].genre.push('Sci-Fi');
                                break;
                            case 9: 
                                movieList[5].genre.push('Thriller');
                                break;
                            default: 
                                error = true;
                                console.log("Please enter valid genre option(s)!");
                                break;
                        };
                    };
                }while(error == true);
                //store release date
                var replyreleaseDate = input.question("\n\tPlease enter Movie's release date: ");
                addedmovie.releaseDate = replyreleaseDate;
                do {
                    //store running time
                    var replyrunningTime = input.question("\n\tPlease enter Movie's running time (mins): ");
                    addedmovie.runningTime = replyrunningTime;
                    var istimeNumber = checkInput(replyrunningTime);
                    if(istimeNumber == false) {
                        console.log('\tPlease enter valid running time!');
                    } else {
                        console.log('\n\t***The movie ' + "'" + replyName + "'" + ' has been added successfully!***\n');
                        break;
                    }
                } while(reply == 2);
                break;
            }
        } while(reply == 2);
        //change running time from minutes to hours and minutes(added movie)
        var hours = Math.floor(movieList[5].runningTime/60);
        var minutes = movieList[5].runningTime % 60;
        if(hours == 0){
            movieList[5].runningTime = minutes + 'm';
        }
        else if(minutes == 0){
            movieList[5].runningTime = hours + 'h';
        }
        else {
            movieList[5].runningTime = hours + 'h ' + minutes + 'm';
        }
        movieList[5].rating[1] = Math.round((movieList[5].rating[1] / movieList[5].rating[0]) * 10) / 10
    } else if(reply == 1) {
        //display movie option
        console.log(movie1.displayMovieDetails() + '\n\n' + movie2.displayMovieDetails()+ '\n\n' + movie3.displayMovieDetails()+ '\n\n' + movie4.displayMovieDetails()+ '\n\n' + movie5.displayMovieDetails() + '\n\n' + addedmovie.displayMovieDetails() + '\n');
    } else if(reply == 3) {
        //add rating option
        do {
            console.log('\n\tSelect the movie to add a rating:\n\t1) ' + movie1.name + '\n\t2) ' + movie2.name + '\n\t3) ' + movie3.name + '\n\t4) ' + movie4.name + '\n\t5) ' + movie5.name + '\n\t6) ' + addedmovie.name + '\n\t7) Go Back to Main Menu');
            var replyRating = input.question('\t>> ');
            var isratingNumber = checkInput(replyRating);
            if(replyRating == 1) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movie1.name + '" (1 to 5 inclusive): ');
                    console.log();
                    var ismovieratingNumber = checkInput(replymovieRating);
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        movie1.rating = replymovieRating;
                        break;
                    }
                } while(replyRating == 1);
            } else if(replyRating == 2) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movie2.name + '" (1 to 5 inclusive): ');
                    console.log();
                    var ismovieratingNumber = checkInput(replymovieRating);
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        movie2.rating = replymovieRating;
                        break;
                    }
                } while(replyRating == 2);
            } else if(replyRating == 3) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movie3.name + '" (1 to 5 inclusive): ');
                    console.log();
                    var ismovieratingNumber = checkInput(replymovieRating);
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        movie3.rating = replymovieRating;
                        break;
                    }
                } while(replyRating == 3);
            } else if(replyRating == 4) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movie4.name + '" (1 to 5 inclusive): ');
                    console.log();
                    var ismovieratingNumber = checkInput(replymovieRating);
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        movie4.rating = replymovieRating;
                        break;
                    }
                } while(replyRating == 4);
            } else if(replyRating == 5) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movie5.name + '" (1 to 5 inclusive): ');
                    console.log();
                    var ismovieratingNumber = checkInput(replymovieRating);
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        movie5.rating = replymovieRating;
                        break;
                    }
                } while(replyRating == 5);
            } else if(replyRating == 6) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + addedmovie.name + '" (1 to 5 inclusive): ');
                    console.log();
                    var ismovieratingNumber = checkInput(replymovieRating);
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        addedmovie.rating = replymovieRating;
                        break;
                    }
                } while(replyRating == 6);
            } else if(reply < 1 || reply > 7) {
                console.log('\n\tKindly enter a valid input!');
                console.log();
            }  else if( isratingNumber == false) {
                console.log('\n\tKindly enter a valid input!');
                console.log();
            }
        } while(replyRating != 7);
    } else if(reply == 4) {
        //latest movies option
        console.log('\n\tThe latest 3 movies are:' + '\n\t1) ' + movie3.releaseDate + ' - ' + movie3.name + '\n\t2) ' + movie4.releaseDate + ' - ' + movie4.name + '\n\t3) ' + movie5.releaseDate + ' - ' + movie5.name + '\n');
    } else if(reply == 5) {
        //filter by genre option
        do {
            var replyfilterGenre = input.question("\n\tPlease select a genre:\n\t1) Action\n\t2) Adventure\n\t3) Crime\n\t4) Drama\n\t5) Fantasy\n\t6) Horror\n\t7) Mystery\n\t8) Sci-Fi\n\t9) Thriller\n\t>> ");
            var isreplyfilterGenre = checkInput(replyfilterGenre);
            if(isreplyfilterGenre == false) {
                console.log('\tPlease enter a valid genre input!');
                console.log();
            } else if(replyfilterGenre == 1) {
                console.log('\n\tYou have selected "Action" genre:\n\t1) Black Panther: Wakanda Forever 2022\n\t2) Fast X\n\t3) Ant-man and the Wasp: Quantumania\n');
            } else if(replyfilterGenre == 2) {
                console.log('\n\tYou have selected "Adventure" genre:')
                var check2_1 = movie1genre.includes('Adventure');
                var check2_2 = movie2genre.includes('Adventure');
                var check2_3 = movie3genre.includes('Adventure');
                var check2_4 = movie4genre.includes('Adventure');
                var check2_5 = movie5genre.includes('Adventure');
                var check2_6 = addedmoviegenre.includes('Adventure');
                if(check2_1 == true) {
                    console.log('Black Panther: Wakanda Forever 2022');
                }
            } else if(replyfilterGenre == 3) {
                console.log('\n\tYou have selected "Crime" genre:')
            } else if(replyfilterGenre == 4) {
                console.log('\n\tYou have selected "Drama" genre:')
            } else if(replyfilterGenre == 5) {
                console.log('\n\tYou have selected "Fantasy" genre:')
            } else if(replyfilterGenre == 6) {
                console.log('\n\tYou have selected "Horror" genre:')
            } else if(replyfilterGenre == 7) {
                console.log('\n\tYou have selected "Mystery" genre:')
            } else if(replyfilterGenre == 8) {
                console.log('\n\tYou have selected "Sci-Fi" genre:')
            } else if(replyfilterGenre == 9) {
                console.log('\n\tYou have selected "Thriller" genre:')
            }
            break;
        } while(reply == 5);
    } else if(reply < 1 || reply > 6) {
        console.log('Please enter a valid input.');
        console.log();
    }  else if( isNumber == false) {
        console.log('Please enter a valid input.');
        console.log();
    }
} while(reply != 6);