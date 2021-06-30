// let { Cat, fridge } = require('lesson/lesson3.js')
import $ from 'jquery'
import BridgeModule, { Bridge } from 'dolphin-jsbridge'
import { Cat, fridge } from './lesson/lesson3'
import Test from './lesson/jsFile'
const mimi = new Cat('mimi')
function multiply(x, y) {
  return x * y
}

let res = multiply(2, 5)
Test.