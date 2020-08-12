function doSomething(){
    console.log(3333);
}

console.log(2222);
setTimeout(doSomething,3000);
setTimeout(function(){
    console.log('lezy and waithing');
},4000)
console.log(4444);
setInterval(() => {
    console.log("tui sala valo na");
}, 3000);