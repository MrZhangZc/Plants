const xlsx = require('node-xlsx')
var fs = require('fs'); 
const kexlsx = xlsx.parse('../1.xlsx')
const shuxlsx = xlsx.parse('../2.xlsx')
const zhongxlsx = xlsx.parse('../3.xlsx')
fs.writeFileSync('../protojson/plantke.json', JSON.stringify(kexlsx))
fs.writeFileSync('../protojson/plantshu.json', JSON.stringify(shuxlsx))
fs.writeFileSync('../protojson/plantzhong.json', JSON.stringify(zhongxlsx))