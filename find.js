const x = [1,2,3,5,11,17];
const y = [
    {id : 1 , name : "Kevin"},
    {id : 2 , name : "Justin"},
    {id : 3 , name : "Jake"},
    {id : 4 , name : "Morio"},
    {id : 5 , name : "Kenji"},
    {id : 6 , name : "Lee"},
    {id : 7 , name : "Leon"},
    {id : 8 , name : "Chris"},
    {id : 9 , name : "Sedlak"}
];

const result = x.map(index =>y.find(e => e.id == index)).filter(e => e != undefined)

console.log("Result : ", result);