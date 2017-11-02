var prom = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Your promise is resolved')
    },5000);
})

prom.then((resolvedMessage) => { 
    console.log(resolvedMessage);
})

//--------Actually layout resolved is passed as 1st argument, 2nd argument is for rejected---//
/* 
1. First is success case
2. Second is falilure case
*/
prom.then( (resolved) => {

},(rejected) => {

})