




var fs = require('fs')

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
// var result = md.render('# markdown-it rulezz!');
// var strApi = require('./stringApi.js')
fs.readFile('file.md','utf-8',function(err,str){
    if(err){
        console.log('err...')
    }else{
        var result = md.render(str);
        console.log(result)
        fs.writeFile('output.html', result, function(err)  {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    }
})