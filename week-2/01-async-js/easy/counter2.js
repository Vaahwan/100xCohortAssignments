
let count = 0;

const counterFunc = ()=>{
    setInterval(()=>{
        count += 1;
        console.log(count);
        // counterFunc();
    },1000)
}

counterFunc();