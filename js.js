const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]
let totalMachineValue = inventory
    // .filter(function filt(elt){
    //     return elt.type === "machine"
    // })
    // .reduce(function sum(total,elt){
    //     return total+ elt.value
    // },0)
    .filter(elt=>elt.type==="machine")
    .reduce((total,elt)=>total+elt.value,0)
console.log(totalMachineValue)
