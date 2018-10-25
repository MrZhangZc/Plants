(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global['data'] = factory());
}(this, (function () {
    'use strict';
    var district = [
        {
        "value": "0100",
        "label": "柏科",
        "children": [{
            "value": "0110",
            "label": "圆柏属",
            "children": [{
                "value": "0111",
                "label": "圆柏",
                "children": []
                }]
            }]
        }, 
        {
        "value": "0200",
        "label": "杨柳科",
        "children": [{
            "value": "0210",
            "label": "杨属",
            "children": [{
                "value": "0211", 
                "label": "钻天杨",
            },
            {
                "value": "0212",
                "label": "新疆杨",
            },
            {
                "value": "0213",
                "label": "胡杨",
            }]
        }, {
            "value": "0220",
            "label": "柳属",
            "children": [{
                "value": "0221",
                "label": "胡杨",
                }]
            }]
        }, 
        {
        "value": "0300",
        "label": "榆科",
        "children": [{
            "value": "0310",
            "label": "榆属",
            "children": [{
                "value": "0311",
                "label": "家榆",
                "children": []
            }, {
                "value": "0312",
                "label": "旱榆",
                "children": []
                }]
            }]
        }, 
        {
        "value": "0400",
        "label": "蓼科",
        "children": [{
            "value": "0410",
            "label": "木蓼属",
            "children": [{
                "value": "0411",
                "label": "锐枝木蓼",
                "children": []
            }, {
                "value": "0412",
                "label": "沙木蓼",
                "children": []
            }]
        }, {
            "value": "0420",
            "label": "沙拐枣属",
            "children": [{
                "value": "0421",
                "label": "沙拐枣",
                "children": []
            }]
        }, {
            "value": "0430",
            "label": "蓼属",
            "children": [{
                "value": "0431",
                "label": "桃叶蓼",
                "children": []
                }]
            }]
        }, 
        {
        "value": "0500",
        "label": "藜科",
        "children": [{
            "value": "0510",
            "label": "雾冰藜属",
            "children": [{
                "value": "0511",
                "label": "雾冰藜",
                "children": []
            }]}, 
            {
            "value": "0520",
            "label": "沙蓬属",
            "children": [{
                "value": "0521",
                "label": "沙蓬",
                "children": []
            }]}, 
            {
            "value": "0530",
            "label": "滨藜属",
            "children": [{
                "value": "0531",
                "label": "滨藜",
                "children": []
            }, {
                "value": "0532",
                "label": "中亚滨藜",
                "children": []
            }, {
                "value": "0533",
                "label": "西伯利亚滨藜",
                "children": []
                }]
            },
            {
            "value": "0540",
            "label": "虫实属",
            "children": [{
                "value": "0541",
                "label": "绳虫实",
                "children": []
            }, {
                "value": "0542",
                "label": "烛台虫实",
                "children": []
                }]
            },{
                "value": "0550",
                "label": "梭梭属",
                "children": [{
                    "value": "0551",
                    "label": "梭梭",
                    "children": []
                }]
            }, {
                "value": "0560",
                "label": "盐爪爪属",
                "children": [{
                    "value": "0561",
                    "label": "盐爪爪",
                    "children": []
                },{
                    "value": "0562",
                    "label": "黄毛头",
                    "children": []
                }]
            }, {
                "value": "0570",
                "label": "地肤属",
                "children": [{
                    "value": "0571",
                    "label": "碱地肤",
                    "children": []
                }]
            }, {
                "value": "0580",
                "label": "盐角草属",
                "children": [{
                    "value": "0581",
                    "label": "盐角草",
                    "children": []
                }]
            }, {
                "value": "0590",
                "label": "猪毛菜属",
                "children": [{
                    "value": "0591",
                    "label": "珍珠猪毛菜",
                    "children": []
                },{
                    "value": "0591",
                    "label": "珍珠猪毛菜",
                    "children": []
                }, {
                    "value": "0592",
                    "label": "猪毛菜",
                    "children": []
                }, {
                    "value": "0593",
                    "label": "刺沙蓬",
                    "children": []
                }, {
                    "value": "0594",
                    "label": "单翅猪毛菜",
                    "children": []
                }, {
                    "value": "0595",
                    "label": "松叶猪毛菜",
                    "children": []
                }]
            }, {
                "value": "05X0",
                "label": "碱蓬属",
                "children": [{
                    "value": "05X1",
                    "label": "碱蓬",
                    "children": []
                },{
                    "value": "05X2",
                    "label": "平卧碱蓬",
                    "children": []
                }, {
                    "value": "05X3",
                    "label": "角果碱蓬",
                    "children": []
                }, {
                    "value": "05X4",
                    "label": "盐地碱蓬",
                    "children": []
                }]
            }, {
                "value": "05XI0",
                "label": "合头草属",
                "children": [{
                    "value": "05XI1",
                    "label": "合头草",
                    "children": []
                }]
            }]
    },{
        "value": "0600",
        "label": "苋科",
        "children": [{
            "value": "0610",
            "label": "苋属",
            "children": [{
                "value": "0611",
                "label": "反枝苋",
                "children": []
            }]
        }]
    }, {
        "value": "0700",
        "label": "马齿苋科",
        "children": [{
            "value": "0710",
            "label": "马齿苋属",
            "children": [{
                "value": "0711",
                "label": "马齿苋",
                "children": []
            }]
        }]
    },{
        "value": "0800",
        "label": "石竹科",
        "children": [{
            "value": "0810",
            "label": "繁缕属",
            "children": [{
                "value": "0811",
                "label": "叉歧繁缕",
                "children": []
            }]
        }]
        },{
        "value": "0900",
        "label": "毛茛科",
        "children": [{
            "value": "0910",
            "label": "铁线莲属",
            "children": [{
                "value": "0911",
                "label": "灌木铁线莲",
                "children": []
            }]
        },{
            "value": "0920",
            "label": "唐松草属",
            "children": [{
                "value": "0921",
                "label": "展枝唐松草",
                "children": []
            }]
        }]
        }, {
        "value": "1000",
        "label": "十字花科",
        "children": [{
            "value": "1010",
            "label": "独行菜属",
            "children": [{
                "value": "1011",
                "label": "宽叶独行菜",
                "children": []
            },{
                "value": "1012",
                "label": "独行菜",
                "children": []
            }]
        }, {
            "value": "1020",
            "label": "花旗杆属",
            "children": [{
                "value": "1021",
                "label": "小花花旗杆",
                "children": []
            }]
        },{
            "value": "1020",
            "label": "花旗杆属",
            "children": [{
                "value": "1021",
                "label": "小花花旗杆",
                "children": []
            }]
        },{
            "value": "1040",
            "label": "大蒜芥属",
            "children": [{
                "value": "1041",
                "label": "垂果大蒜芥",
                "children": []
            }]
        }]
    }];

    /* eslint comma-dangle:0 */
    /**
     * data for ListView.IndexedList
     */
    let data = [{
        value: '11',
        label: '北京市',
        spell: 'BeiJingShi'
    }, {
        value: '12',
        label: '天津市',
        spell: 'TianJinShi'
    }, {
        value: '13',
        label: '河北省',
        spell: 'HeBeiSheng'
    }, {
        value: '14',
        label: '山西省',
        spell: 'ShanXiSheng'
    }, {
        value: '15',
        label: '内蒙古自治区',
        spell: 'NeiMengGuZiZhiQu'
    }, {
        value: '21',
        label: '辽宁省',
        spell: 'LiaoNingSheng'
    }, {
        value: '22',
        label: '吉林省',
        spell: 'JiLinSheng'
    }, {
        value: '23',
        label: '黑龙江省',
        spell: 'HeiLongJiangSheng'
    }, {
        value: '31',
        label: '上海市',
        spell: 'ShangHaiShi'
    }, {
        value: '32',
        label: '江苏省',
        spell: 'JiangSuSheng'
    }, {
        value: '33',
        label: '浙江省',
        spell: 'ZheJiangSheng'
    }, {
        value: '34',
        label: '安徽省',
        spell: 'AnHuiSheng'
    }, {
        value: '35',
        label: '福建省',
        spell: 'FuJianSheng'
    }, {
        value: '36',
        label: '江西省',
        spell: 'JiangXiSheng'
    }, {
        value: '37',
        label: '山东省',
        spell: 'ShanDongSheng'
    }, {
        value: '41',
        label: '河南省',
        spell: 'HeNanSheng'
    }, {
        value: '42',
        label: '湖北省',
        spell: 'HuBeiSheng'
    }, {
        value: '43',
        label: '湖南省',
        spell: 'HuNanSheng'
    }, {
        value: '44',
        label: '广东省',
        spell: 'GuangDongSheng'
    }, {
        value: '45',
        label: '广西壮族自治区',
        spell: 'GuangXiZhuangZuZiZhiQu'
    }, {
        value: '46',
        label: '海南省',
        spell: 'HaiNanSheng'
    }, {
        value: '50',
        label: '重庆市',
        spell: 'ChongQingShi'
    }, {
        value: '51',
        label: '四川省',
        spell: 'SiChuanSheng'
    }, {
        value: '52',
        label: '贵州省',
        spell: 'GuiZhouSheng'
    }, {
        value: '53',
        label: '云南省',
        spell: 'YunNanSheng'
    }, {
        value: '54',
        label: '西藏自治区',
        spell: 'XiCangZiZhiQu'
    }, {
        value: '61',
        label: '陕西省',
        spell: 'ShanXiSheng'
    }, {
        value: '62',
        label: '甘肃省',
        spell: 'GanSuSheng'
    }, {
        value: '63',
        label: '青海省',
        spell: 'QingHaiSheng'
    }, {
        value: '64',
        label: '宁夏回族自治区',
        spell: 'NingXiaHuiZuZiZhiQu'
    }, {
        value: '65',
        label: '新疆维吾尔自治区',
        spell: 'XinJiangWeiWuErZiZhiQu'
    }];

    // make more data
    // console.log(data.length);
    let cloneData = [];
    for (let index = 0; index < 10; index++) {
        cloneData = cloneData.concat(data.map(i => ({
            value: i.value + index,
            label: i.label + index,
            spell: i.spell + index
        })));
    }

    data = data.concat(cloneData);

    data.sort((a, b) => {
        return a.spell.localeCompare(b.spell);
    });

    const transData = {};
    data.forEach(item => {
        const qf = item.spell[0].toUpperCase();
        transData[qf] = transData[qf] || [];
        transData[qf].push(item);
    });

    var index = {
        district,
        province: transData,
        // data for Picker async col
        provinceLite: [{
            value: 'bj',
            label: '北京市',
        }, {
            value: 'zj',
            label: '浙江省',
        }, {
            value: 'gd',
            label: '广东省',
        }, {
            value: 'hn',
            label: '海南省',
        }, {
            value: 'cq',
            label: '重庆市',
        }, {
            value: 'sc',
            label: '四川省',
        }]
    };

    return index;

})));
