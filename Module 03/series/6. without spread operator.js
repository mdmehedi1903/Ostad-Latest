let richCountry = ["CHINA", "EUROPE", "USA"]
let poorCountry = ["India", "BD", "Pakistan"]
richCountry.push(...poorCountry)
richCountry.push(poorCountry)



console.log(richCountry)