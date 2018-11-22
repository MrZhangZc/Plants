const fs = require('fs');
let data = fs.readFileSync('../pickerdata/data2.json', 'utf8')
let test = JSON.parse(data);
let zhongdata = fs.readFileSync('../protojson/plantzhong.json', 'utf8')
let test2 = JSON.parse(zhongdata);
let protoss = test2[0].data
for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < protoss.length; j++) {
        if (test[i].children[j] !== undefined) {
            let id = test[i].children[j].value.toString()
            for (let z = 0; z < protoss.length; z++) {
                if (protoss[z][1].slice(6, 12) === id) {
                    test[i].children[j].children.push({
                        "value": protoss[z][1].slice(12),
                        "label": protoss[z][0],
                        "children": []
                    })
                }
            }
        }
    }
}
fs.writeFileSync('../pickerdata/result2.json', JSON.stringify(test));


