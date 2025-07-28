exports.demo=(req,res)=> {
    let nameValue = req.params.name;

    res.status(200).json({
        name:nameValue,
        city:req.params.city,
    })

} 


exports.demo1=(req,res)=> {
    // res.status(200).send(req.body)
    let body = req.body;
    let {city} = req.body;
    let name = req.body['name']
    let name1 = req.body.name;
    res.status(200).json({
        initby: "JSON",
        body,
        city,
        name,
        name1
    })
} 


exports.demo2=(req,res)=> {
    let token = req.headers.token;

    res.status(200).json({
        token
    })
}


exports.demo3=(req,res)=> {
    let cookie = req.cookies['Cookie_1'];
    res.status(200).json({
        cookie
    })
} 