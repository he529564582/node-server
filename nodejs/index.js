var fs = require('fs')
var strApi = require('./stringApi.js')
fs.readFile('file.txt','utf-8',function(err,str){
    if(err){
        console.log('err...')
    }else{
        var strAfter = strApi.replaceDigit(str)
        console.log(strAfter)
        fs.writeFile('message.txt', strAfter, function(err)  {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    }
})