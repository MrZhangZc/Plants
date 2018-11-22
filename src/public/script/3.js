const fs = require('fs');
fs.readFile('../protojson/plantke.json', 'utf8', function (err, data) {
    if (err) console.log(err);
    let test = JSON.parse(data);
    let protoss = test[0].data
    let arr = []
    for (let i = 0; i < protoss.length; i++) {
        arr.push({
            "value": protoss[i][1].toString(),
            "label": protoss[i][0].toString(),
            "children": []
        })
    }
    fs.writeFileSync('../pickerdata/data.json', JSON.stringify(arr, null, 2));
});