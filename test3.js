const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("Black_Panther_Trailer.mp4");
const request = http.get("https://dl241v.dlmate03.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0ptY2Nzd2h4b01yOVpvb1FneEsrQk1OcEtJNlVEeUk3cEpkWlJ2aFBaZXRtRk4wU0dzTk1FVG5LQy9KME51REhiKzRzeUV2NXdYUmYybitmb3NENWtqQkh3YkpPR09yNVFaSFJ5b2t3bzV6U1N4ZjNScXlxcDR5WDl0d09PZkhCTXRESUhPTXJBOEl0QWlDeVpTZTdyeG9RUXJ5UGFzTHhFeXFUWTVpZWdodUFZdWZweVNtWjJRSWRGd1kzS2pxQ1U5VmRYallsSW5FcWhwcitWSWRnd0JMV1hhekprTnk4TXRMNjVCRUpLbG5CTHFqdjQ1S29qMFdNQmRLTit0VFB5NnZ2elkyTEtMSkd1SHNmWGM2NnVzSmo5NEswPQ%3D%3D", function(response) {
    response.pipe(file);

   // after download completed close filestream
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
});





var isreplyTrailer = checkInput(replyTrailer);
if(isreplyTrailer == true) {
    while(isreplyTrailer == true) {
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
    console.log(trailer);
} else if(isreplyTrailer == false) {
    console.log('\n***Enter a valid movie number!***\n');
}