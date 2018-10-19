function count(min,max){
  var arr = [];
  var count = 0;
  for(var num=min;num<=max;num++){
    var str = num.toString();
    for(var i=0;i<str.length;i++){
      arr.push(str[i]);
    }
  }
  console.log(arr);
  for(var j=0;j<arr.length;j++){
    if(arr[j]==0){
      count++;
    }
  }
  console.log(count);
}

count(1,10000);