let demoList = [{
    id:1,
    name: 'zs',
    age: '23',
    job: '前端工程师'
}, {
    id: 2,
    name: 'ww',
    age: '24',
    job: '后端工程师'
}]

export default {
    'get|/parameter/query': option => {
        return {
            status: 200,
            message: 'success',
            data: demoList
        }
    }
}
// template 形式
// export default {
//     'get|/parameter/query': demoList
// }


//当我们想要展示大量数据时，不可能一个一个写，那样又费时又费力，这是我们就可以根据mockjs的语法规范来快速生成一系列的数据
// let demoList = {
//     status: 200,
//     message: 'success',
//     data: {
//         total: 100,
//         'rows|10': [{
//             id: '@guid',
//             name: '@cname',
//             'age|20-30': 23,
//             'job|1': ['前端开发工程师','后端工程师','UI工程师','需求工程师']
//         }]
//     }
// }

// export default {
//     'get|/parameter/query': demoList
// }