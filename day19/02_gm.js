var gm = require("gm");

gm('./1.jpg')
.flip()  //翻转
.magnify()  //扩大一倍尺寸
.rotate('green', 45)  //旋转多少度,填充色
.blur(7, 3)   //模糊
.crop(300, 300, 150, 130)  //宽高Xy  裁切
.edge(3)    //锐化
.write('./2.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})