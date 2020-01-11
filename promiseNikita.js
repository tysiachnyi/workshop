let a = 1;

let promise = new Promise(function(resolve, reject){
    if(a == 1){
        resolve();
    }else{
        reject();
    }
});
promise
       .then(()=>console.log('hello'))
       .catch(()=>console.log('noap'))
       .finally(()=>console.log(promise));
