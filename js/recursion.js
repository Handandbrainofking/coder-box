//假设递归函数已经写好
//寻找递推关系
//将递推关系的结构转换为递归体
//将临界体哦啊见加入到递归体中

//求和：1-100
function sum(n) {
    if(n === 1) return 1
    return sum(n-1) + n
}