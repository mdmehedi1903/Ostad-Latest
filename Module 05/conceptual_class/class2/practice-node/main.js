const PORT = 5000;
const http = require("http");
const fs = require("fs");
const URL = require("url");
const slugify = require("slugify");

const changeTemplate = require('./modules/changeData')
const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const temp404=fs.readFileSync(`${__dirname}/templates/template-404.html`,'utf-8');
const data=fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');



let changeAsJSON = JSON.parse(data);
changeAsJSON.map(el=>slugify(el.productName,{lower: true}))

 

const server = http.createServer((req,res)=> {
const {query, pathname} = URL.parse(req.url, true)

    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=="/" || req.url=="/home"){

        let allCardReceived = changeAsJSON.map(el=>changeTemplate(tempCard, el)).join('')
        let output = tempOverview.replace("{%PRODUCT_CARDS%}", allCardReceived)
        
        res.end(output) 

    }else if(pathname===`/single-product`){ 
        let productData = changeAsJSON[query.id];
        
        res.end(changeTemplate(tempProduct, productData))
    }else if(pathname===`/api`){
        res.end(data)
    }
    else{
        res.end(temp404) 
    }  
})


server.listen(PORT,()=> {

    console.log(`Server is running on port ${PORT}`)
})