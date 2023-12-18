/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let prom = new Promise((n)=>{
        return "before timeout"
        setTimeout(()=>{
            return "resolved";
        },n)
    });
    return prom
}

wait(5).then((res,rej)=>{console.log(res,rej)})

module.exports = wait;
