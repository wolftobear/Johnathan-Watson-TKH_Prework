var array = [ "Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ]
var i;
var longestword=0;
for (i=0; i<array.length;i++){
var max=Math.max(array[i].length)

console.log(array[i]+" "+array[i].length)
if (array[i].length>longestword){
  longestword=array[i].length
}

}
console.log(longestword)
console.log(array[9]+' is the longest word with '+ longestword +" letters")