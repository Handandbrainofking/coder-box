// 7种原始数据类型
// Boolean
// null
// undefined
// Number
// BigInt
// String
// Symbol
// 引用类型
// Object
var test = false
var num2 = 6
// undefined 和 null是所有类型的子类型
// tuple
var user = ['jack', 22]
// function
export default function add(x, y) {
  return x + y
}
var result = add(2, 3)
//函数表达式
var add2 = function (x, y) {
  return x + y
}
var add3 = add2
// 类型推论
var add4 = add3
