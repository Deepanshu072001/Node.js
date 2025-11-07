
const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Promise one resolved");
        resolve()
    }, 2000)
})

promiseOne.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
console.log("End of the file");
