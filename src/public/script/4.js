const fs = require('fs');
let data = fs.readFileSync('../pickerdata/data.json', 'utf8')
let test = JSON.parse(data);

let shudata = fs.readFileSync('../protojson/plantshu.json', 'utf8')
let test2 = JSON.parse(shudata);
let protoss = test2[0].data
for (let i = 0; i < test.length; i++) {
    let id = test[i].value.toString()
    for (let j = 0; j < protoss.length;j++){
        if (protoss[j][1].slice(0,6) === id){
            test[i].children.push({
                "value": protoss[j][1].slice(6),
                "label": protoss[j][0],
                "children": []
            })
        }
    }
}
fs.writeFileSync('../pickerdata/data2.json', JSON.stringify(test, null, 2));

