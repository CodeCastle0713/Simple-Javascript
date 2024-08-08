const timeOut = (second) => {
    //We can use Promise to return callback function
    return new Promise((resolve,reject) => {
         setTimeout(()=>{
            resolve("Hello, world!");
            // if(Math.random(1,10)%2 === 0)
            //     resolve("*2");
            // else
            //     reject("!*2");
        },second * 1000)
    })
}

const mainAsync = async () => {
    try{
        console.log("Main : ", await timeOut(3));
    } catch(err){
        console.log(err);
    }

    // await timeOut(3).then(data => {
    //     console.log("Main :" ,data);
    // }).catch(err => {
    //     console.log(err);
    // })

    console.log('Radish');
}

const app = () => {
    mainAsync()
}