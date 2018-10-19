var arr=[[1,2],[3,4]];
function Jw(obj){
     return Array.prototype.concat.apply([],obj);
}
console.log(Jw(arr));