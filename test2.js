var input = require('readline-sync');

//input checker: movie name
function checkName(input) {
    if(input == 'black panther:wakanda forever 2022') {
        return true;
    } else if(input == 'avatar: the way of water') {
        return true;
    } else if(input == 'fast x') {
        return true;
    } else if(input == 'ant-man and the wasp: quantumania') {
        return true;
    } else if(input == 'm3gan') {
        return true;
    } else {
        return false;
    }
}

//input checker: number
function checkInput(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
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
var genres = [genre1,genre2,genre3,genre4,genre5,genre6,genre7,genre8,genre9];

//movie release dates
var dates = [];

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
var movie1 = new Movie('Black Panther:Wakanda Forever 2022','Adventure, Action, Drama, Fantasy, Sci-Fi,Thriller',161,'11 Nov 2022',[9,42]);
var movie2 = new Movie('Avatar: The Way of Water','Adventure, Sci-Fi',192,'16 Dec 2022',[4, 15]);
var movie3 = new Movie('Fast X','Crime, Action, Mystery, Thriller',43,'19 May 2023',[28, 60]);
var movie4 = new Movie('Ant-Man and the Wasp: Quantumania','Adventure, Action',120,'16 Feb 2023',[18,80]);
var movie5 = new Movie('M3GAN','Horror, Mystery, Thriller',102,'6 Jan 2023',[20,70]);
var movieList = [movie1, movie2, movie3, movie4, movie5];


        //add movie option
        do {
            var replyName = input.question('\n\t' + "Please enter Movie's name: ");
            //check if name is already used
            var lowerreplyName = replyName.toLowerCase();
            var isvalidName = checkName(lowerreplyName);
            if(isvalidName == true) {
                console.log('\tPlease enter a unique movie name!');
            } else if(isvalidName == false) {
                do{
                    var replyGenre = input.question("\n\tPlease enter Movie's Genre(s):\n\t1) " + genre1 + '\n\t2) ' + genre2 + '\n\t3) ' + genre3 + '\n\t4) ' + genre4 + '\n\t5) ' + genre5 + '\n\t6) ' + genre6 + '\n\t7) ' + genre7 + '\n\t8) ' + genre8 + '\n\t9) ' + genre9 + '\n\t>> ');
                    replyGenre = replyGenre.split(",");
                    var replyGenre2 = '';
                    for (var x = 0; x < replyGenre.length; x++){
                        replyGenre[x] = parseInt(replyGenre[x]);
                        var error = false;
                        switch(replyGenre[x]){
                            case 1: 
                                replyGenre2 += 'Action';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 2: 
                                replyGenre2 += 'Adventure';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 3: 
                                replyGenre2 += 'Crime';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 4: 
                                replyGenre2 += 'Drama';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 5: 
                                replyGenre2 += 'Fantasy';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 6: 
                                replyGenre2 += 'Horror';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 7: 
                                replyGenre2 += 'Mystery';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 8: 
                                replyGenre2 += 'Sci-Fi';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            case 9: 
                                replyGenre2 += 'Thriller';
                                if(x < (replyGenre.length - 1)) {
                                    replyGenre2 += ', ';
                                    break;
                                } else {
                                    break;
                                }
                            default: 
                                error = true;
                                console.log("Please enter valid genre option(s)!");
                                break;
                        };
                    };
                }while(error == true);
                //store release date
                var replyreleaseDate = input.question("\n\tPlease enter Movie's release date (e.g. 25 Feb 2010): ");
                do {
                    //store running time
                    var replyrunningTime = input.question("\n\tPlease enter Movie's running time (mins): ");
                    //check for valid input
                    var istimeNumber = checkInput(replyrunningTime);
                    if(istimeNumber == false) {
                        console.log('\tPlease enter valid running time!');
                    } else {
                        for(var d = 0; d < movieList.length; d++) {
                            dates.push({date: movieList[d].releaseDate, name: movieList[d].name});
                        }
                        console.log('\n\t***The movie ' + "'" + replyName + "'" + ' has been added successfully!***\n');
                        //add in values
                        movieList.push(new Movie(replyName,replyGenre2,replyreleaseDate,replyrunningTime));
                        break;
                    }
                } while(reply == 2);
                break;
            }
        } while(reply == 2);
        //change running time from minutes to hours and minutes
        for(var g = 0; g < movieList.length; g++) {
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

