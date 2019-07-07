var square = function (x_data,y_data) {
    var x = x_data
    var y = y_data
    var i = 0
    while (i > x) {
      i = i + 1
      console.log('你好！');
    }
}
square(3,4)

// 二
var log = function () {
    console.log.apply(console, arguments);
}
var grade = 60
if(grade < 60){
    log('不及格');
    // &&和的意思  ||或
}else if(grade >= 60 && grade < 80) {
    log('良好');
}else {
    log('优秀')
}

// 1 == '1' 是相等的 1 === '1'是不相等的

//return返回函数值
var add = function (a, b) {
    return a + b
}
add(1, 3)

// 绝对值
var abs = function (n) {
    if(n < 0){
      n = -n
      return n
    }
    return n
}
abs(-1)

// 返回min
var min = function (a, b) {
    if(a > b){
      return b
    }else {
      return a
    }
}
min(1, 3)

// 标准库 随机数
Math.random()

//遍历
a = [1, 2, 3, 4, 5]
// 添加元素
a.push(6)
// 长度
len = a.length
for (var i = 0; i < len; i++){
    log(a[i])
}
// 组合起来
var arry = function(){
    a = [1, 2, 3, 4, 5]
    // 添加元素
    a.push(6)
    // 长度
    len = a.length
    for(var i = 0; i < len; i++){
        log_data = log(a[i])
    }
    return log_data
}
arry()

// 得到想要的字符串  ES6
var name = 'gua'
// 这个符号是模板字符号 属于js 替换值 可以用来拼接字符串
var a = `${name}, 你好`
log(a)
// 切片
name.slice(0, 3)

// 调试 debug
// 1、使用log定位错误

// 最小值
var min = function (data) {
  // 需要用第一位来进行比较
    var n = data[0]
    len = data.length
    for(var i = 0; i < len; i++){
      var m = data[i]
      if(n > m){
        n = m
        // return n
      }else {
        m = n
        // return m
      }
    }
    return n
}
min([1,2,3,6,3,0])

var minEqual = function (code, messge) {
    // log(code);
    if(code == false){
      log(messge)
    }
}

var test = function () {
    minEqual(min([1,2,3,6,3,0]) == 1,'最小值错了 1')
    minEqual(min([1,2,3,6,3,0]) === 0,'最小值对了了 1')
}
