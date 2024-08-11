const waitFor = (second) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Output...");
        },second * 1000)
    })
}

await waitFor(2);