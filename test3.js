function checktrailerInput(input) {
    if(isNaN(input)) {
        console.log('\n***Enter a valid movie number!***\n');
    } else {
        var trailer = parseInt(replyTrailer) - 1;
        //download trailer
        const https = require('https');
        const fs = require('fs');
        const file = fs.createWriteStream(fileList[trailer]);
        const request = https.get(downloadlinkList[trailer], function(response) {
            response.pipe(file);
            //after download completed close filestream
            file.on("finish", () => {
                file.close();
                console.log("Download Completed");
            });
        });
    }
}

//trailer downloads storage
var fileList = ['Black_Panther_Trailer.mp4','Avatar_TheWayOfWater_Trailer.mp4','Fast_X_Trailer.mp4','Ant-ManAndTheWasp_Quantumania_Trailer.mp4','M3GAN_Trailer.mp4'];
var downloadlinkList = [
    'https://dl241v.dlmate03.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0ptY2Nzd2h4b01yOVpvb1FneEsrQk1OcEtJNlVEeUk3cEpkWlJ2aFBaZXRtRk4wU0dzTk1FVG5LQy9KME51REhiKzRzeUV2NXdYUmYybitmb3NENWtqQkh3YkpPR09yNVFaSFJ5b2t3bzV6U1N4ZjNScXlxcDR5WDl0d09PZkhCTXRESUhPTXJBOEl0QWlDeVpTZTdyeG9RUXJ5UGFzTHhFeXFUWTVpZWdodUFZdWZweVNtWjJRSWRGd1kzS2pxQ1U5VmRYallsSW5FcWhwcitWSWRnd0JMV1hhekprTnk4TXRMNjVCRUpLbG5CTHFqdjQ1S29qMFdNQmRLTit0VFB5NnZ2elkyTEtMSkd1SHNmWGM2NnVzSmo5NEswPQ%3D%3D',
    'https://dl144.dlmate07.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0ZqdFF1eGdKb05hTko3Ym91enErdkpZSjRMN01LMzhIcFB0aFMvRDNSY056QUJCMkl2NVFqVUV6UXA0NXRxWEhDNDlwbVg4QjlVeW5vbXZLcnkzUWtyeDc2YTh6WUY3MFRQMUYyc3hRbWdRREtpYVB5dlV6VnFrcjY5V2l2ZlhRMTQydFRiZVdlL0k4Y2syN09ZS3JYOU5ZQXRUYVc4SjlkMC8yWTZWQ2dtK3RyNll3bUJoQXlZWlZiNXBuOTJ2UEgrQlpmazVBRzN4RHorYlQvVjh0c1N1T05iMnAwUEhjPQ%3D%3D',
    'https://dl165.dlmate58.xyz/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0N1ZVlPakNob1NvUktvSVFzM3VXc2FQMWRMNjREeUppZFFJNE1wUzZXZk1EZmRnbUF1cDBaVW5LVi80dDQ2eG5XL0pzMFRNdDBFMFRlbHZiMzAyTlFpMEtuV0l1Zko1bEhPMTFobWcxMDdIZkRsS0hFOXhqbzV6dXFva0xlWHdOTXR5TWJOT2ZWNVpaRjBEU2FPYSs5aHNGVitITEtwSWhNM00rZXZBVDF5Tzl2L3M5OFJFRXBJc0FOaXMybmlhaWU0MVFQM1owZWl3PT0%3D',
    'https://dl167.dlmate21.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0ptY2Nzd2h4b01yOVpvb1FneEsrQkxkMWlMNmxFeklTbVdzcGM4SFh2Y01PYmV6NmN0NVl5VjM2QStkODg4blRnOVlncFdzQndXbDNNaWVlcW1qUmt0bGFsSm9qZFc3VkdPVEY5cWt4bTdEYVMyUG1KL0VmZXFuSzRzMWlCYVdGWWxEWWJhYkNDMThZTmgwL3hZOW5DdzRJTTRCL0xzcVVZaXFqTnBFLzcwK1o0djlsNkEzZFROWlZGeVpQbjJ1VEZxRUpFMGM5RWd4ajErYlQxVTlnbkdhT2hlajkxUFNsVXVLbjhWUUVia25GR3JUN25wZjUycUhNZkxLUjN1VEE9',
    'https://dl236.dlmate01.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0p5L0liNlZ0b0RxMUtyNDRtMXVqck45dE9KNnNLMzdYelFZWUU1WERWWVlUTk5nYUZzNmMyUTJlSnFwTnZueWJBNXBvMVc4dzBCREQxaTdMbXhCY216RlhUWE9yUFFZMFBORmhPK3hCY2duYkxuT0dhdEFXczlYcW9xQkN3UzJJUHFpc0NML0RFK0pKTmlEaWRONjZ4Z3NCZDlYYlo4SjlQNWZPVnNRTDludU40cTlWdld4a2xKTUVJak0rampiYmZzeG9kZ3MwPQ%3D%3D'
];

const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

//const file = fs.createWriteStream("Black_Panther_Trailer.mp4");
//const request = http.get("https://drive.google.com/uc?export=download&id=15-thzsWepbTbZ7RucBQwRMItXslbBScQ", function(response) {
    response.pipe(file);

   // after download completed close filestream
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
//});

//https://drive.google.com/uc?export=download&id=



        //download trailer option
        console.log('\nWant to view a movie trailer?');
        do {
            var replyTrailer = input.question('Enter movie number [type "exit" to return to main menu]: ');
            var isreplyExit = checkExit(replyTrailer);
            if(isreplyExit == false) {
                var isreplyTrailer = checkInput(replyTrailer);
                if(isreplyTrailer == true) {
                    do {
                        var trailer = parseInt(replyTrailer) - 1;
                        //download trailer
                        var https = require('https');
                        var fs = require('fs');
                        var file = fs.createWriteStream(fileList[trailer]);
                        var request = https.get(downloadlinkList[trailer], function(response) {
                            response.pipe(file);
                            //after download completed close filestream
                            file.on("finish", () => {
                                file.close();
                                console.log("Download Completed");
                            });
                        });
                    } while(true);
                } else if(isreplyTrailer == false) {
                    console.log('\n***Enter a valid movie number!***\n');
                }
            } else if(isreplyExit == true) {
                console.log();
                break;
            }
        } while(reply == 1);