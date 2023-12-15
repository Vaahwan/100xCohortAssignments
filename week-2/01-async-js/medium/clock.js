


const clock = ()=>{
    setInterval(()=>{
        const date = new Date();
        currtime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        console.log(currtime);
    },1000)
}
clock();
