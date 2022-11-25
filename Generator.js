const jsonData = require('./Nombres.json');
let jsonDataObj = JSON.parse(JSON.stringify(jsonData));
let listado=[...jsonDataObj];
if(listado.length%2==0){
    while(listado.length>0){
    const aleatorio1 = listado[Math.floor(Math.random() * listado.length)];
    listado = listado.filter((el)=>el!=aleatorio1);
    const aleatorio2 = listado[Math.floor(Math.random() * listado.length)];
    listado = listado.filter((el)=>el!=aleatorio2);
    console.log(aleatorio1,aleatorio2);
    console.log(listado);
    }
}
else{
    console.log("Intentálo de nuevo");
}

