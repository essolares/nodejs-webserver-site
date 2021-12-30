const http = require('http');

http.createServer((req,res)=>{

    //HTTP REQUEST TO GENERATE FILES
    //res.setHeader('Content-Disposition','attachment; filename=list.csv');
    //res.writeHead(200,{'Content-Type':'application/csv'});
    //res.write('id,name\n');
    //res.write('1,Ed\n');
    //res.write('2,Maria\n');
    //res.write('3,Pedro');

    res.end();
})
.listen( 8080 );