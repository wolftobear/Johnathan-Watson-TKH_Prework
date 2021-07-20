
  
var names= ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"]
var i;
var first=[names[0].charAt(),names[1].charAt(), names[2].charAt(), names[3].charAt(), names[4].charAt(), names[5].charAt()];
var Last=[names[0].slice(-1), names[1].slice(-1), names[2].slice(-1), names[3].slice(-1), names[4].slice(-1), names[5].slice(-1)]



console.log("First Letter")
console.log(first)
console.log("Last Letter")
console.log(Last)
//first:b,j,m,b,j,f
//last:b,y,b,e,n,x

for(i=0;i<names.length;i++){
    if(names[i].length % 2 === 0){
    console.log(names[i]+ " is even")
  }else{
    console.log(names[i]+ " is odd")
  }
}
//odd:bob, jimmy, max b
//even:bernie, jordan
var odd=[names[0], names[1], names[2]];
var even=[names[3], names[4], names[5]];

console.log("Odd Numbers");
console.log(odd);
console.log("Even Numbers");
console.log(even)





