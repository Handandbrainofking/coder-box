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

let test: boolean = false
let num2: number = 6

// undefined 和 null是所有类型的子类型

// tuple

let user: [string, number] = ['jack', 22]

// function

function add(x: number, y: number): number {
  return x + y
}

let result = add(2, 3)

//函数表达式
const add2 = (x: number, y: number): number => {
  return x + y
}

const add3: (x: number, z: number) => number = add2

// 类型推论
const add4 = add3
