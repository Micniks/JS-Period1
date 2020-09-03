//Assignment 2 test file

const DosDetector = require('./dosDetector');

let instance = new DosDetector(2000);

instance.on('DosAttack',(arg) => {
    console.log('Possible DOS-Attack detected on URL:' + arg.url);
    console.log('Time between calls was: ' + arg.totalTimeBetweenCalls);
})

//First call
instance.addUrl("Hello.dk");

//Calls under the time Limit
setTimeout((()=>instance.addUrl("Hello.dk")),250);
setTimeout((()=>instance.addUrl("Hello.dk")),500);
setTimeout((()=>instance.addUrl("Hello.dk")),1000);

//Call after time limit
setTimeout((()=>instance.addUrl("Hello.dk")),5000);

//Call under time limit again
setTimeout((()=>instance.addUrl("Hello.dk")),5500);
setTimeout((()=>instance.addUrl("Hello.dk")),6500);




