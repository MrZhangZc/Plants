const xlsx = require('node-xlsx')
const fs = require('fs');
fs.readFile('../protojson/plantke.json', 'utf8', function (err, data) {
    if (err) console.log(err);
    let test = JSON.parse(data);
    let protoss = test[0].data
    let arr = []
    for (let i = 0; i < protoss.length;i++){
        arr.push({
            name: protoss[i][0],
            id: protoss[i][1].toString(),
            content: '123',
            latin: '13123'
        })
    }
    fs.writeFileSync('../result/ke.json', JSON.stringify(arr));
});
fs.readFile('../protojson/plantshu.json', 'utf8', function (err, data) {
    if (err) console.log(err);
    let test = JSON.parse(data);
    let protoss = test[0].data
    let arr = []
    for (let i = 0; i < protoss.length; i++) {
        arr.push({
            name: protoss[i][0],
            id: protoss[i][1].toString(),
            content: '345',
            latin: '345'
        })
    }
    fs.writeFileSync('../result/shu.json', JSON.stringify(arr));
});
fs.readFile('../protojson/plantzhong.json', 'utf8', function (err, data) {
    if (err) console.log(err);
    let test = JSON.parse(data);
    let protoss = test[0].data
    let arr = []
    for (let i = 0; i < protoss.length; i++) {
        arr.push({
            name: protoss[i][0],
            id: protoss[i][1].toString(),
            content:'456',
            latin:'456'
        })
    }
    fs.writeFileSync('../result/zhong.json', JSON.stringify(arr));
});