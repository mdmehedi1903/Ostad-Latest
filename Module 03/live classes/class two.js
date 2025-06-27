(async()=> {
    let data = await fetch("https://dummyjson.com/products/1");
    let json = await data.json();
    console.log(json)
})()