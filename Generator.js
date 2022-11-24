const jsonData = require('./Nombres.json');
let jsonDataObj = JSON.parse(JSON.stringify(jsonData));

if(jsonDataObj.length%2==0){
    const aleatorio1 = jsonDataObj[Math.floor(Math.random() * jsonDataObj.length)];
    const aleatorio2 = jsonDataObj[Math.floor(Math.random() * jsonDataObj.length)];
    const filtrar = jsonDataObj.filter((el)=>jsonDataObj!==aleatorio1);
    console.log(aleatorio1,aleatorio2);
    console.log(jsonDataObj);
}
else{
    console.log("Intentálo de nuevo");
}

