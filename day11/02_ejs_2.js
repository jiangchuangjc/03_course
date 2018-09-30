//1.引入ejs模块
var ejs = require('ejs');
//2.创建模板
var str = '这是一个数组:<%= stus[1].name %>';
//3.模拟数据
var stus1 = {stus:[{name:"zhangsan"},{name:"lisi"},{name:"wangwu"}]
}
// 4.填充
var html = ejs.render(str,stus1);

console.log(html);