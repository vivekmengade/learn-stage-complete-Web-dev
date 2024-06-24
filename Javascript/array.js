let arr=[1,2,3,4,5]
console.log(arr.length)
console.log(arr[4]);
console.log(arr[0]);
arr[0]=5;
console.log(arr[0]);
console.log(arr)
console.log(arr.toString())
console.log(typeof arr )
console.log(arr.join(" sand "));
console.log(arr.pop())
console.log(arr)
console.log(arr.push(5))
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(5))
console.log(arr)
console.log(delete arr[3])
console.log(arr)

let arr = [1, 2, 3,8,9,20];
let ar3 = [7, 8, 9];
let ar2 = [4, 5, 6];
let ar4 = [0];
console.log(arr.concat(ar2, ar3, ar4));
let con = arr.concat(ar3, ar2, ar4);
con.sort()
console.log(con)
let sq=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sq.push(element*2)
}
console.log(arr)
console.log(sq)
let sqa=arr.map((e)=>{
    return e+5
})
console.log(sqa)
const gt7=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(gt7));
const red=(a,b)=>{
    // return a+b;
    return a*b;
}
console.log(arr.reduce(red));
let name=array.from("VIVEK")
console.log(name)
