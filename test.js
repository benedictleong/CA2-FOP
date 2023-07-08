var input = require('readline-sync');

//input checker: number
function checkInput(input) {
    if(isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

//custom sorting function
customSort = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if(dateA < dateB) {
        return 1;
    } else if(dateA > dateB) {
        return -1;
    } else {
        return 0;
    }
}

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

//database----------------------------------------------------------------------------------------------->
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

//default credits
var creditsTotal = 50;

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

//calculate rating
for(var g = 0; g < movieList.length; g++) {
    movieList[g].rating[1] = Math.round((movieList[g].rating[1] / movieList[g].rating[0]) * 10) / 10;
}

//question------------------------------------------------------------------------------------------------->
console.log('Welcome to Silver Vintage Movie Review Program');
var name = input.question('Please enter your name: ');
console.log();

do {
    console.log('Hi ' + name + ', please select your choice:');
    console.log('\t' + '1. Display All Movies\n\t2. Add Movie\n\t3. Add Rating\n\t4. Latest 3 Release Date\n\t5. Filter by Genre\n\n\t\x1b[35mPremium features(requires login):\x1b[37m\n\t6. Rent Movie\n\t7. View In-APP Credits\n\t8. Login\n\t9. Exit');
    var reply = input.question('\t' + '>> ');
    //check for valid input
    var isNumber = checkInput(reply);
    if(reply == 2) {
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
        }
    } else if(reply == 1) {
        //display movie option
        for(var z = 0; z < movieList.length; z++) {
            console.log(movieList[z].displayMovieDetails() + '\n\n');
        }
    } else if(reply == 3) {
        //add rating option
        do {
            console.log('\n\tSelect the movie to add a rating:');
            for(var h = 0; h < movieList.length; h++) {
                var v = h + 1;
                console.log('\n\t' + v + ') ' + movieList[h].name);
            }
            var replyRating = input.question('\t>> ');
            //check for valid input
            var isratingNumber = checkInput(replyRating);
            for(var j = 5; j < movieList.length; j++) {
                var replymovieRating = input.question('\n\tEnter your rating for "' + movieList[j].name + '" (1 to 5 inclusive): ');
                console.log();
                //check for valid input
                var ismovieratingNumber = checkInput(replymovieRating);
                if(ismovieratingNumber == false) {
                    console.log('\tEnter a valid rating!');
                } else {
                    addedmovie.rating[1] = replymovieRating;
                    addedmovie.rating[0] = '1';
                    break;
                }
            }
            if(replyRating == 1) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movie1.name + '" (1 to 5 inclusive): ');
                    console.log();
                    //check for valid input
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
                    //check for valid input
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
                    //check for valid input
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
                    //check for valid input
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
                    //check for valid input
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
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movieList[5].name + '" (1 to 5 inclusive): ');
                    console.log();
                    //check for valid input
                    var ismovieratingNumber = checkInput(replymovieRating);
                    var voters5 = 0;
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        voters5 += 1;
                        movieList[5].rating = replymovieRating + ' (' + voters5 + ' voters)';
                        break;
                    }
                } while(replyRating == 6);
            } else if(replyRating == 7) {
                do {
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movieList[6].name + '" (1 to 5 inclusive): ');
                    console.log();
                    //check for valid input
                    var ismovieratingNumber = checkInput(replymovieRating);
                    var voters6 = 0;
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        voters6 += 1;
                        movieList[5].rating = replymovieRating + ' (' + voters6 + ' voters)';
                        break;
                    }
                } while(replyRating == 7);
            } else if(replyRating == 8) {
                do{
                    var replymovieRating = input.question('\n\tEnter your rating for "' + movieList[7].name + '" (1 to 5 inclusive): ');
                    console.log();
                    //check for valid input
                    var ismovieratingNumber = checkInput(replymovieRating);
                    var voters7 = 0;
                    if(ismovieratingNumber == false) {
                        console.log('\tEnter a valid rating!');
                    } else {
                        voters7 += 1;
                        movieList[5].rating = replymovieRating + ' (' + voters7 + ' voters)';
                        break;
                    }
                } while(replyRating == 6);
            } else if(reply < 1 || reply > 7) {
                console.log('\n\tKindly enter a valid input!');
                console.log();
            } else if( isratingNumber == false) {
                console.log('\n\tKindly enter a valid input!');
                console.log();
            }
        } while(replyRating != 7);
    } else if(reply == 4) {
        //latest movies option
        //sort according to date
        var sortdates = dates.sort(customSort);
        console.log('\n\tThe latest 3 movies are:')
        for(var i = 0; i < 3; i++) {
            var q = i + 1
            console.log('\t' + q + ') ' + sortdates[i].date + ' - ' + sortdates[i].name);
        }
        console.log();
    } else if(reply == 5) {
        //filter by genre option
        do {
            //sort to alphabetical order
            var sortgenre = genres.sort();
            console.log('\n\tPlease select a genre:\n\t1) ' + sortgenre[0] + '\n\t2) ' + sortgenre[1] + '\n\t3) ' + sortgenre[2] + '\n\t4) ' + sortgenre[3] + '\n\t5) ' + sortgenre[4] + '\n\t6) ' + sortgenre[5] + '\n\t7) ' + sortgenre[6] + '\n\t8) ' + sortgenre[7] + '\n\t9) ' + sortgenre[8]);
            var replyfilterGenre = input.question("\n\t>> ");
            //check for valid input
            var isreplyfilterGenre = checkInput(replyfilterGenre);
            if(isreplyfilterGenre == false) {
                console.log('\tPlease enter a valid genre input!');
                console.log();
            } else if(replyfilterGenre == 1) {
                console.log('\n\tYou have selected "Action" genre:\n\t1) Black Panther: Wakanda Forever 2022\n\t2) Fast X\n\t3) Ant-man and the Wasp: Quantumania\n');
                var check1 = addedmovie.genre.includes('Action');
                if(check1 == true) {
                    console.log('\t4) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 2) {
                console.log('\n\tYou have selected "Adventure" genre:\n\t1) Black Panther: Wakanda Forever 2022\n\t2) Avatar: The Way of Water\n\t3) Ant-man and the Wasp: Quantumania\n');
                var check2 = addedmovie.genre.includes('Adventure');
                if(check2 == true) {
                    console.log('\t4) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 3) {
                console.log('\n\tYou have selected "Crime" genre:\n\t1) Fast X\n');
                var check3 = addedmovie.genre.includes('Crime');
                if(check3 == true) {
                    console.log('\t2) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 4) {
                console.log('\n\tYou have selected "Drama" genre:\n\t1) Black Panther: Wakanda Forever 2022\n');
                var check4 = addedmovie.genre.includes('Drama');
                if(check4 == true) {
                    console.log('\t2) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 5) {
                console.log('\n\tYou have selected "Fantasy" genre:\n\t1) Black Panther: Wakanda Forever 2022\n');
                var check5 = addedmovie.genre.includes('Fantasy');
                if(check5 == true) {
                    console.log('\t2) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 6) {
                console.log('\n\tYou have selected "Horror" genre:\n\t1) M3GAN\n');
                var check6 = addedmovie.genre.includes('Horror');
                if(check6 == true) {
                    console.log('\t2) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 7) {
                console.log('\n\tYou have selected "Mystery" genre:\n\t1) Fast X\n\t2) M3GAN\n');
                var check7 = addedmovie.genre.includes('Mystery');
                if(check7 == true) {
                    console.log('\t3) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 8) {
                console.log('\n\tYou have selected "Sci-Fi" genre:\n\t1) Black Panther: Wakanda Forever 2022\n\t2) Avatar: The Way of Water\n');
                var check8 = addedmovie.genre.includes('Sci-Fi');
                if(check8 == true) {
                    console.log('\t3) ' + addedmovie.name);
                }
            } else if(replyfilterGenre == 9) {
                console.log('\n\tYou have selected "Thriller" genre:\n\t1) Black Panther: Wakanda Forever 2022\n\t2) Fast X\n\t3) M3GAN\n');
                var check9 = addedmovie.genre.includes('Thriller');
                if(check9 == true) {
                    console.log('\t4) ' + addedmovie.name);
                }
            }
            break;
        } while(reply == 5);
    } else if(reply == 6) {
        //rent movie option
        if(username != 'admin') {
            console.log('\n\x1b[33m***Please login to use this feature!!***\x1b[37m\n');
        } else {
            do {
                console.log('\nList of movies for rent:\n\t1. ' + movieList[0].name + '........20 credits\n\t2. ' + movieList[1].name + '..................15 credits\n\t3. ' + movieList[2].name + '....................................10 credits\n\t4. ' + movieList[3].name + '.........20 credits\n\t5. ' + movieList[4].name + '.....................................10 credits\n\t6. Return to Main Menu');
                var replyRental = input.question('\n\tChoose the movie you want to rent: ')
                var isreplyRental = checkInput(replyRental);
                if(isreplyRental == true) {
                    if(replyRental == '1') {
                        do {
                            var confirmRental1 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmRental1 == 'CONFIRM') {
                                creditsTotal -= 20;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits left. The movie will be sent to your registered email.***\x1b[37m\n');
                                break;
                            } else if(confirmRental1 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replyRental == '1');
                    } else if(replyRental == '2') {
                        do {
                            var confirmRental2 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmRental2 == 'CONFIRM') {
                                creditsTotal -= 15;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits left. The movie will be sent to your registered email.***\x1b[37m\n');
                                break;
                            } else if(confirmRental2 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replyRental == '2');
                    } else if(replyRental == '3') {
                        do {
                            var confirmRental3 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmRental3 == 'CONFIRM') {
                                creditsTotal -= 10;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits left. The movie will be sent to your registered email.***\x1b[37m\n');
                                break;
                            } else if(confirmRental3 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replyRental == '3');
                    } else if(replyRental == '4') {
                        do {
                            var confirmRental4 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmRental4 == 'CONFIRM') {
                                creditsTotal -= 20;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits left. The movie will be sent to your registered email.***\x1b[37m\n');
                                break;
                            } else if(confirmRental4 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replyRental == '4');
                    } else if(replyRental == '5') {
                        do {
                            var confirmRental5 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmRental5 == 'CONFIRM') {
                                creditsTotal -= 10;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits left. The movie will be sent to your registered email.***\x1b[37m\n');
                                break;
                            } else if(confirmRental5 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replyRental == '5');
                    } else if(replyRental == '6') {
                        //exit
                        console.log();
                        break;
                    }
                } else if(isreplyRental == false){
                    console.log('\x1b[33m******Please enter a valid input!!******\x1b[37m\n');
                }
            } while(username == 'admin');
        }
    } else if(reply == 7) {
        //check credits option
        if(username != 'admin') {
            console.log('\n\x1b[33m***Please login to use this feature!!***\x1b[37m\n');
        } else {
            console.log('\nHi ' + name + ', you have \x1b[33m' + creditsTotal + '\x1b[37m credits,');
            console.log();
            //buy credits option
            var replycreditsPurchase = input.question('Buy credits?[yes/no]: ');
            if(replycreditsPurchase == 'yes') {
                //credits purchase choice
                do {
                    console.log('\t1) 20 credits + 5 free credits...............$20\n\t2) 40 credits + 10 free credits..............$40\n\t3) 80 credits + 20 free credits..............$80\n\t4) 160 credits + 40 free credits............$160\n\t5) Go back to main menu');
                    var replypurchaseChoice = input.question('\n\tChoose the package you want to purchase: ');
                    if(replypurchaseChoice == 1) {
                        //add 25 credits
                        do {
                            var confirmPurchase1 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmPurchase1 == 'CONFIRM') {
                                creditsTotal += 25;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits.***\x1b[37m\n');
                                break;
                            } else if(confirmPurchase1 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replypurchaseChoice == 1);
                    } else if(replypurchaseChoice == 2) {
                        //add 50 credits
                        do {
                            var confirmPurchase2 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmPurchase2 == 'CONFIRM') {
                                creditsTotal += 50;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits.***\x1b[37m\n');
                                break;
                            } else if(confirmPurchase2 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replypurchaseChoice == 2);
                    } else if(replypurchaseChoice == 3) {
                        //add 100 credits
                        do {
                            var confirmPurchase3 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmPurchase3 == 'CONFIRM') {
                                creditsTotal += 100;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits.***\x1b[37m\n');
                                break;
                            } else if(confirmPurchase3 == 'EXIT') {
                                console.log('\n\x1b[33m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replypurchaseChoice == 3);
                    } else if(replypurchaseChoice == 4) {
                        //add 200 credits
                        do {
                            var confirmPurchase4 = input.question('\n\tCONFIRM PURCHASE? [type "CONFIRM" to continue/"EXIT" to leave]: ');
                            if(confirmPurchase4 == 'CONFIRM') {
                                creditsTotal += 200;
                                console.log('\n\x1b[32m***PURCHASE SUCCESSFUL! You now have ' + creditsTotal + ' credits.***\x1b[37m\n');
                                break;
                            } else if(confirmPurchase4 == 'EXIT') {
                                console.log('\x1b[31m***TRANSACTION DECLINED! Returning back to previous menu...***\x1b[37m');
                                console.log();
                                break;
                            } else {
                                console.log('\n\x1b[33m******Invalid input!!******\x1b[37m');
                            }
                        } while(replypurchaseChoice == 4);
                    } else if(replypurchaseChoice == 5) {
                        console.log();
                        break;
                    }
                } while(replycreditsPurchase == 'yes');
            } else if(replycreditsPurchase == 'no') {
                //exit
                console.log();
            }
        }
    } else if(reply == 8) {
        //login option
        console.log('\nPlease enter your username & password,');
        do {
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
                console.log("\x1b[31m******Invalid username or password!******\x1b[37m\n");
            } else {
                console.log('\x1b[32m******Login successful...******\x1b[37m\n');
                var name = '\x1b[36m' + username + '\x1b[37m'; 
            }
        } while(reply == 7);
    } else if(reply < 1 || reply > 9) {
        console.log('Please enter a valid input.');
        console.log();
    } else if( isNumber == false) {
        console.log('Please enter a valid input.');
        console.log();
    }
} while(reply != 9);
console.log('Thank you & goodbye!');