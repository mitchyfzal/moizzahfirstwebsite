const roomObj = {
    name: 'Art room',
    numOfChairs : '3',
    isComputerAvb : 'true',
    persons: ['moizzah','esha','zainab'],
    moizzah: {
        age:22,
        gender : "female",
        address : "lake city",
        religion : " islam"},

     esha : {
        age: 25,
        gender: "female",
        address: "bahria town",
        religion: "buddhism"
     },

     zainab:{
        age:16,
        gender : "female",
        address : "township",
        religion : "islam"
     }
}

console.log(roomObj)
console.log(roomObj.name)
console.log(roomObj.numOfChairs)
console.log(roomObj.isComputerAvb)
console.log(roomObj.persons)

console.log(roomObj.moizzah)
console.log(roomObj.esha)
console.log(roomObj.zainab)

const itLab ={...roomObj}
itLab.name= "1stComputerLab"
console.log(itLab)
console.log(roomObj)