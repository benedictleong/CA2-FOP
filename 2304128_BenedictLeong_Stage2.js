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
}
var movie1 = new Movie('Black Panther:Wakanda Forever 2022','Adventure, Action, Drama, Fantasy, Sci-Fi,Thriller',161,'11 Nov 2022',[9,42]);
var movie2 = new Movie('Avatar: The Way of Water','Adventure, Sci-Fi',192,'16 Dec 2022',[4, 15]);
var movie3 = new Movie('Fast X','Crime, Action, Mystery, Thriller',43,'19 May 2023',[28, 60]);
var movie4 = new Movie('Ant-Man and the Wasp: Quantumania','Adventure, Action',120,'16 Feb 2023',[18,80]);
var movie5 = new Movie('M3GAN','Horror, Mystery, Thriller',102,'6 Jan 2023',[20,70]);
var movieList = [movie1, movie2, movie3, movie4, movie5];
var correctedRating = [];
var correctedVoter = [];


//question------------------------------------------------------------------------------------------------->
console.log('Welcome to Silver Vintage Movie Review Program');
var name = input.question('Please enter your name: ');
console.log();

do {
    console.log('Hi ' + name + ', please select your choice:');
    console.log('\t' + '1. Display All Movies\n\t2. Add Movie\n\t3. Add Rating\n\t4. Latest 3 Release Date\n\t5. Filter by Genre\n\t6. Login\n\t7. Exit\n\n\t\x1b[35mPremium features(requires login):\x1b[37m\n\t8. View/Buy In-APP Credits\n\t9. Rent Movie');
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
                        console.log('\n\t***The movie ' + "'" + replyName + "'" + ' has been added successfully!***\n');
                        //add in values
                        var replyRating = [0,0];
                        movieList.push(new Movie(replyName,replyGenre2,replyrunningTime,replyreleaseDate,replyRating));
                        break;
                    }
                } while(reply == 2);
                break;
            }
        } while(reply == 2);
    } else if(reply == 1) {
        //display movies option
        //change running time from minutes to hours and minutes
        for(var g = 0; g < movieList.length; g++) {
            var checkHour = String(movieList[g].runningTime).includes('h');
            var checkMin = String(movieList[g].runningTime).includes('m');
            if(checkHour == false && checkMin == false) {
                var hours = Math.floor(movieList[g].runningTime/60);
                var minutes = movieList[g].runningTime % 60;
                if(hours == 0) {
                    movieList[g].runningTime = minutes + 'm';
                }
                else if(minutes == 0) {
                    movieList[g].runningTime = hours + 'h';
                }
                else {
                    movieList[g].runningTime = hours + 'h ' + minutes + 'm';
                }
            }
            if(movieList[g].rating[1] != 0) {
                correctedRating[g] = (Math.round(movieList[g].rating[1] / movieList[g].rating[0] * 10) / 10);
                correctedVoter[g] = (movieList[g].rating[0]);
            } else {
                correctedRating[g] = '0';
                correctedVoter[g] = '0';
            }
            //print movies
            console.log('\nName\t\t: ' + movieList[g].name + '\nGenre\t\t: ' + movieList[g].genre + '\nRunning Time\t: ' + movieList[g].runningTime + '\nRelease Date\t: ' + movieList[g].releaseDate + '\nRating\t\t: ' + correctedRating[g] + ' (' + correctedVoter[g] + ' voters)\n');
        }
    } else if(reply == 3) {
        //add rating option
        do {
            var error = false;
            console.log("\n\tSelect the movie to add a rating:");
            for (var f = 0; f < movieList.length; f++){
                console.log('\t' + (f + 1) + ") " + movieList[f].name);
            }
            var movie_choice = input.question('\t' + (movieList.length + 1) + ") Go back to Main Menu\n\t>> ");
            var ismovie_choice = checkInput(movie_choice);
            if (movie_choice > (movieList.length + 1) || movie_choice < 1 || ismovie_choice == false) {
                error = true;
                console.log("\n\tKindly enter a valid input!");
            }
        } while(error == true);
        do {
            var error = false;
            var rating_input = input.question('\n\tEnter your rating for "' + movieList[movie_choice - 1].name + '" (1 to 5 inclusive): ');
            var israting_input = checkInput(rating_input);
            if (rating_input < 1 || rating_input > 5 || israting_input == false) {
                error = true;
                console.log("\n\tEnter a valid rating!");
            }
        } while(error == true);
        rating_input = parseInt(rating_input);
        movieList[movie_choice - 1].rating[1] += rating_input;
        movieList[movie_choice - 1].rating[0] += 1;
    } else if(reply == 4) {
        //latest movies option
        var dates = [];
        for(var d = 0; d < movieList.length; d++) {
            dates.push({date: movieList[d].releaseDate, name: movieList[d].name});
        }
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
            console.log('\n\tPlease select a genre:\n\t1) ' + sortgenre[0] + '\n\t2) ' + sortgenre[1] + '\n\t3) ' + sortgenre[2] + '\n\t4) ' + sortgenre[3] + '\n\t5) ' + sortgenre[4] + '\n\t6) ' + sortgenre[5] + '\n\t7) ' + sortgenre[6] + '\n\t8) ' + sortgenre[7] + '\n\t9) ' + sortgenre[8] + '\n\t10) exit');
            var replyfilterGenre = input.question("\t>> ");
            var p = 0;
            //check for valid input
            var isreplyfilterGenre = checkInput(replyfilterGenre);
            if(isreplyfilterGenre == false) {
                console.log('\tPlease enter a valid genre input!');
                console.log();
            } else if(isreplyfilterGenre == true) {
                if(replyfilterGenre == '10') {
                    break;
                } else {
                    //print out movies
                    var t = replyfilterGenre - 1;
                    console.log('\n\tYou have selected "' + genres[t] + '" genre:')
                    for(var m = 0; m < movieList.length; m++) {
                        var check = movieList[m].genre.includes(genres[t]);
                        if(check == true) {
                            p += 1;
                            console.log('\t' + p + ') ' + movieList[m].name);
                        }
                    }
                }
            }
        } while(replyfilterGenre != 10);
    } else if(reply == 9) {
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
    } else if(reply == 8) {
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
    } else if(reply == 6) {
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
        } while(reply == 6);
    } else if(reply < 1 || reply > 9) {
        console.log('Please enter a valid input.');
        console.log();
    } else if( isNumber == false) {
        console.log('Please enter a valid input.');
        console.log();
    }
} while(reply != 7);
console.log('Thank you & goodbye!');