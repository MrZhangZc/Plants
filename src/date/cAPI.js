/**
 * Copyright(C),blog.lihailezzc.com
 * Author: 986047270@qq.com hm 
 * Date: 2018.11.26
 * Version: 2.0.0
 * Description: data 普通检索 hm修改
**/
const cAPI = {
    one: {
        id: '001',
        L: { childrenID: '002', isFinish: false, describe: '常绿植物', images: [require("../public/images/CRetrieval/1s/圆柏-1林相.jpg"), require("../public/images/CRetrieval/1s/圆柏-2树形.jpg"), require("../public/images/CRetrieval/1s/沙冬青-1灌丛.png"), require("../public/images/CRetrieval/1s/沙冬青-2单株.png")], },
        R: { childrenID: '003', isFinish: false, describe: '落叶植物', images: [require("../public/images/CRetrieval/1x/文冠果-1林相.png"), require("../public/images/CRetrieval/1x/杜梨-2树形.png"), require("../public/images/CRetrieval/1x/榆树-2树形.png"), require("../public/images/CRetrieval/1x/沙拐枣-1灌丛.png"), require("../public/images/CRetrieval/1x/海乳草--2单株.png"), require("../public/images/CRetrieval/1x/紫花苜蓿-1草地.png")], },
    },
    two: {
        id: '002',
        L: { childrenID: '010000010100010101', isFinish: true, describe: '单叶鳞形或刺性', images: [require("../public/images/CRetrieval/2s/圆柏-1林相.jpg"), require("../public/images/CRetrieval/2s/圆柏-2树形.jpg"), require("../public/images/CRetrieval/2s/圆柏-3鳞形叶.jpg"), require("../public/images/CRetrieval/2s/圆柏-3鳞形叶.jpg"), require("../public/images/CRetrieval/2s/圆柏-4刺形叶.jpg"), require("../public/images/CRetrieval/2s/圆柏-5雄球花.jpg"), require("../public/images/CRetrieval/2s/圆柏-6球果.jpg")], },
        R: { childrenID: '120000120100120101', isFinish: true, describe: '单叶或三出复叶，叶型较宽', images: [require("../public/images/CRetrieval/2x/沙冬青-1灌丛.png"), require("../public/images/CRetrieval/2x/沙冬青-2单株.png"), require("../public/images/CRetrieval/2x/沙冬青-3叶.png"), require("../public/images/CRetrieval/2x/沙冬青-4叶.png"), require("../public/images/CRetrieval/2x/沙冬青-5花.png"), require("../public/images/CRetrieval/2x/沙冬青-6果实.png")], },
    },
    three: {
        id: '003',
        L: { childrenID: '004', isFinish: false, describe: '乔木', images: [require("../public/images/CRetrieval/3s/刺槐-2树形.png"), require("../public/images/CRetrieval/3s/旱榆-2树形.jpg"), require("../public/images/CRetrieval/3s/杏-2树形.png"), require("../public/images/CRetrieval/3s/杜梨-1林相.png"), require("../public/images/CRetrieval/3s/美国红梣-2树形.png"), require("../public/images/CRetrieval/3s/钻天杨-1林相.jpg")], },
        R: { childrenID: '017', isFinish: false, describe: '灌木或半灌木', images: [require("../public/images/CRetrieval/3x/四合木-1灌丛.png"), require("../public/images/CRetrieval/3x/戈壁天门冬-1生境.png"), require("../public/images/CRetrieval/3x/枸杞-1灌丛.png"), require("../public/images/CRetrieval/3x/沙枣-2树形.png"), require("../public/images/CRetrieval/3x/甘蒙锦鸡儿-2单株.png"), require("../public/images/CRetrieval/3x/锐枝木蓼-1灌丛.png")], },
    },
    four: {
        id: '004',
        L: { childrenID: '005', isFinish: false, describe: '植株具刺', images: [require("../public/images/CRetrieval/4s/刺槐-5叶刺.png"), require("../public/images/CRetrieval/4s/杜梨-4枝条.png"), require("../public/images/CRetrieval/4s/沙枣-5老枝.jpg")], },
        R: { childrenID: '007', isFinish: false, describe: '植株无刺', images: [require("../public/images/CRetrieval/4x/文冠果-6果实.png"), require("../public/images/CRetrieval/4x/旱柳-4枝条.png"), require("../public/images/CRetrieval/4x/杏-7果实.png"), require("../public/images/CRetrieval/4x/杠柳-3枝条.png"), require("../public/images/CRetrieval/4x/美国红梣-4枝条.png"), require("../public/images/CRetrieval/4x/钻天杨-5叶.jpg")], },
    },
    five: {
        id: '005',
        L: { childrenID: '120000121000121001', isFinish: true, describe: '具托叶刺', images: [require("../public/images/CRetrieval/5s/刺槐-1林相.png"), require("../public/images/CRetrieval/5s/刺槐-2树形.png"), require("../public/images/CRetrieval/5s/刺槐-3树干.png"), require("../public/images/CRetrieval/5s/刺槐-4叶.png"), require("../public/images/CRetrieval/5s/刺槐-5叶刺.png"), require("../public/images/CRetrieval/5s/刺槐-7果实.png")], },
        R: { childrenID: '006', isFinish: false, describe: '具枝刺', images: [require("../public/images/CRetrieval/5x/杜梨-4枝条.png"), require("../public/images/CRetrieval/5x/沙枣-5老枝.jpg")], },
    },
    six: {
        id: '006',
        L: { childrenID: '190000190100190101', isFinish: true, describe: '叶两面均有银白色鳞片', images: [require("../public/images/CRetrieval/6s/沙枣-1林相.png"), require("../public/images/CRetrieval/6s/沙枣-2树形.png"), require("../public/images/CRetrieval/6s/沙枣-3树干.png"), require("../public/images/CRetrieval/6s/沙枣-4幼枝.png"), require("../public/images/CRetrieval/6s/沙枣-5老枝.jpg"), require("../public/images/CRetrieval/6s/沙枣-6叶.png"), require("../public/images/CRetrieval/6s/沙枣-7花.png"), require("../public/images/CRetrieval/6s/沙枣-8果实.png")], },
        R: { childrenID: '110000110400110401', isFinish: true, describe: '叶两面均无银白色鳞片', images: [require("../public/images/CRetrieval/6x/杜梨-1林相.png"), require("../public/images/CRetrieval/6x/杜梨-2树形.png"), require("../public/images/CRetrieval/6x/杜梨-4枝条.png"), require("../public/images/CRetrieval/6x/杜梨-5叶.png"), require("../public/images/CRetrieval/6x/杜梨-6花.png"), require("../public/images/CRetrieval/6x/杜梨-7果实.png")], },
    },
    seven: {
        id: '007',
        L: { childrenID: '008', isFinish: false, describe: '奇数羽状复叶', images: [require("../public/images/CRetrieval/7s/文冠果-3叶.png"), require("../public/images/CRetrieval/7s/美国红梣-6叶.png")], },
        R: { childrenID: '009', isFinish: false, describe: '单叶', images: [require("../public/images/CRetrieval/7x/旱榆-7果实.png"), require("../public/images/CRetrieval/7x/杏-7果实.png"), require("../public/images/CRetrieval/7x/胡杨-5叶.jpg"), require("../public/images/CRetrieval/7x/胡杨-6花.png")], },
    },
    eight: {
        id: '008',
        L: { childrenID: '230000230100230101', isFinish: true, describe: '小叶5-9', images: [require("../public/images/CRetrieval/8s/美国红梣-1林相.png"), require("../public/images/CRetrieval/8s/美国红梣-2树形.png"), require("../public/images/CRetrieval/8s/美国红梣-3树干.png"), require("../public/images/CRetrieval/8s/美国红梣-4枝条.png"), require("../public/images/CRetrieval/8s/美国红梣-5叶.png"), require("../public/images/CRetrieval/8s/美国红梣-7花序.png"), require("../public/images/CRetrieval/8s/美国红梣-8果实.png")], },
        R: { childrenID: '160000160100160101', isFinish: true, describe: '小叶9-19', images: [require("../public/images/CRetrieval/8x/文冠果-1林相.png"), require("../public/images/CRetrieval/8x/文冠果-2树形.png"), require("../public/images/CRetrieval/8x/文冠果-3叶.png"), require("../public/images/CRetrieval/8x/文冠果-4花.png"), require("../public/images/CRetrieval/8x/文冠果-5果实.png"), require("../public/images/CRetrieval/8x/文冠果-6果实.png")], },
    },
    nine: {
        id: '009',
        L: { childrenID: '150000150100150101', isFinish: true, describe: '叶对生', images: [require("../public/images/CRetrieval/9s/810a19d8bc3eb135f5a75f8bad1ea8d3fd1f449a[3].jpg"), require("../public/images/CRetrieval/9s/b812c8fcc3cec3fda721f83cd088d43f8794275f[1].jpg"), require("../public/images/CRetrieval/9s/c75c10385343fbf24695fa6ab67eca8065388f3a[1].jpg")], },
        R: { childrenID: '010', isFinish: false, describe: '叶互生', images: [require("../public/images/CRetrieval/9x/新疆杨-7叶背.png"), require("../public/images/CRetrieval/9x/旱榆-5叶.jpg"), require("../public/images/CRetrieval/9x/旱榆-7果实.png"), require("../public/images/CRetrieval/9x/杏-7果实.png"), require("../public/images/CRetrieval/9x/钻天杨-5叶.jpg")], },
    },
    ten: {
        id: '010',
        L: { childrenID: '011', isFinish: false, describe: '树冠圆柱形或尖塔形', images: [require("../public/images/CRetrieval/10s/新疆杨-1林相.png"), require("../public/images/CRetrieval/10s/新疆杨-2树形..png"), require("../public/images/CRetrieval/10s/钻天杨-1林相.jpg"), require("../public/images/CRetrieval/10s/钻天杨-2树形.jpg")], },
        R: { childrenID: '012', isFinish: false, describe: '树冠较宽阔', images: [require("../public/images/CRetrieval/10x/旱柳-1林相.png"), require("../public/images/CRetrieval/10x/旱柳-2树形.png"), require("../public/images/CRetrieval/10x/旱榆-1林相.png"), require("../public/images/CRetrieval/10x/旱榆-2树形.jpg"), require("../public/images/CRetrieval/10x/杏-1林相.png"), require("../public/images/CRetrieval/10x/杏-2树形.png")], },
    },
    eleven: {
        id: '011',
        L: { childrenID: '020000020100020102', isFinish: true, describe: '叶缘具裂片、缺刻、波状齿或全缘', images: [require("../public/images/CRetrieval/11s/新疆杨-1林相.png"), require("../public/images/CRetrieval/11s/新疆杨-2树形..png"), require("../public/images/CRetrieval/11s/新疆杨-3树干.png"), require("../public/images/CRetrieval/11s/新疆杨-4芽.png"), require("../public/images/CRetrieval/11s/新疆杨-5枝条.jpg"), require("../public/images/CRetrieval/11s/新疆杨-6叶.jpg"), require("../public/images/CRetrieval/11s/新疆杨-7叶背.png"), require("../public/images/CRetrieval/11s/新疆杨-8花序.png"), require("../public/images/CRetrieval/11s/新疆杨-9花.png")], },
        R: { childrenID: '020000020100020101', isFinish: true, describe: '叶缘具整齐锯齿', images: [require("../public/images/CRetrieval/11x/钻天杨-1林相.jpg"), require("../public/images/CRetrieval/11x/钻天杨-2树形.jpg"), require("../public/images/CRetrieval/11x/钻天杨-3树干.png"), require("../public/images/CRetrieval/11x/钻天杨-4枝条.jpg"), require("../public/images/CRetrieval/11x/钻天杨-5叶.jpg"), require("../public/images/CRetrieval/11x/钻天杨-6花.jpg")], },
    },
    twelve: {
        id: '012',
        L: { childrenID: '020000020100020103', isFinish: true, describe: '叶多变，狭披针形至肾形，两面灰蓝色', images: [require("../public/images/CRetrieval/12s/胡杨-1林相.jpg"), require("../public/images/CRetrieval/12s/胡杨-2树形.jpg"), require("../public/images/CRetrieval/12s/胡杨-3树干.png"), require("../public/images/CRetrieval/12s/胡杨-4幼叶.png"), require("../public/images/CRetrieval/12s/胡杨-5叶.jpg"), require("../public/images/CRetrieval/12s/胡杨-6花.png"), require("../public/images/CRetrieval/12s/胡杨-7苞片.png")], },
        R: { childrenID: '013', isFinish: false, describe: '不同叶片形状相近，绿色', images: [require("../public/images/CRetrieval/12x/旱柳-6叶.png"), require("../public/images/CRetrieval/12x/旱榆-7果实.png"), require("../public/images/CRetrieval/12x/杏-7果实.png")], },
    },
    thirteen: {
        id: '013',
        L: { childrenID: '020000020200020201', isFinish: true, describe: '叶片披针形', images: [require("../public/images/CRetrieval/13s/旱柳-1林相.png"), require("../public/images/CRetrieval/13s/旱柳-2树形.png"), require("../public/images/CRetrieval/13s/旱柳-3树干.png"), require("../public/images/CRetrieval/13s/旱柳-4枝条.png"), require("../public/images/CRetrieval/13s/旱柳-5叶.png"), require("../public/images/CRetrieval/13s/旱柳-6叶.png"), require("../public/images/CRetrieval/13s/旱柳-7花序.png"), require("../public/images/CRetrieval/13s/旱柳-8蒴果.png")], },
        R: { childrenID: '014', isFinish: false, describe: '叶形较宽', images: [require("../public/images/CRetrieval/13x/旱榆-7果实.png"), require("../public/images/CRetrieval/13x/杏-4叶.png")], },
    },
    fourteen: {
        id: '014',
        L: { childrenID: '015', isFinish: false, describe: '早春开花，花朵较大', images: [require("../public/images/CRetrieval/14s/杏-6花.png")], },
        R: { childrenID: '016', isFinish: false, describe: '早春开花，花朵不明显', images: [require("../public/images/CRetrieval/14x/旱榆-6花.png")], },
    },
    fifteen: {
        id: '015',
        L: {childrenID: '110000110200110201',isFinish: true,describe: '果实被柔毛，果实无蜡粉；花粉红色或红色',images: [require("../public/images/CRetrieval/15s/杏-1林相.png"), require("../public/images/CRetrieval/15s/杏-2树形.png"), require("../public/images/CRetrieval/15s/杏-3树干.png"), require("../public/images/CRetrieval/15s/杏-4叶.png"), require("../public/images/CRetrieval/15s/杏-5叶.png"), require("../public/images/CRetrieval/15s/杏-6花.png"), require("../public/images/CRetrieval/15s/杏-7果实.png")],},
        R: {childrenID: '110000110300110301',isFinish: true,describe: '果实无毛，果实外被蜡粉；花白色，有梗',images: [require("../public/images/CRetrieval/15x/李-1林相.png"), require("../public/images/CRetrieval/15x/李-2树形.png"), require("../public/images/CRetrieval/15x/李-3树干.png"), require("../public/images/CRetrieval/15x/李-4枝条.png"), require("../public/images/CRetrieval/15x/李-5叶.png"), require("../public/images/CRetrieval/15x/李-6花.png"), require("../public/images/CRetrieval/15x/李-7果实.png")],},
    },
    sixteen: {
        id: '016',
        L: {childrenID: '030000030100030101',isFinish: true,describe: '叶矩圆形至卵状披针形，边缘多为重锯齿',images: [require("../public/images/CRetrieval/16s/榆树-1林相.png"), require("../public/images/CRetrieval/16s/榆树-2树形.png"), require("../public/images/CRetrieval/16s/榆树-3树干.png"), require("../public/images/CRetrieval/16s/榆树-4叶.png"), require("../public/images/CRetrieval/16s/榆树-5花.png"), require("../public/images/CRetrieval/16s/榆树-6果实.png")],},
        R: {childrenID: '030000030100030102',isFinish: true,describe: '叶卵形，边缘多为单齿',images: [require("../public/images/CRetrieval/16x/旱榆-1林相.png"), require("../public/images/CRetrieval/16x/旱榆-2树形.jpg"), require("../public/images/CRetrieval/16x/旱榆-3树干.jpg"), require("../public/images/CRetrieval/16x/旱榆-4枝条.png"), require("../public/images/CRetrieval/16x/旱榆-5叶.jpg"), require("../public/images/CRetrieval/16x/旱榆-6花.png"), require("../public/images/CRetrieval/16x/旱榆-7果实.png")],},
    },
    seventeen: {
        id: '017',
        L: {childrenID: '240000240200240201',isFinish: true,describe: '蔓型灌木',images: [require("../public/images/CRetrieval/17s/杠柳-1生境.png"), require("../public/images/CRetrieval/17s/杠柳-2单株.png"), require("../public/images/CRetrieval/17s/杠柳-3枝条.png"), require("../public/images/CRetrieval/17s/杠柳-4叶.png"), require("../public/images/CRetrieval/17s/杠柳-5花.png"), require("../public/images/CRetrieval/17s/杠柳-6果实.png")],},
        R: {childrenID: '018',isFinish: false,describe: '非蔓型灌木',images: [require("../public/images/CRetrieval/17x/四合木-2枝条.png"), require("../public/images/CRetrieval/17x/戈壁天门冬-1生境.png"), require("../public/images/CRetrieval/17x/柠条锦鸡儿-2单株.png"), require("../public/images/CRetrieval/17x/沙枣-2树形.png"), require("../public/images/CRetrieval/17x/灌木铁线莲-2单株.png"), require("../public/images/CRetrieval/17x/灌木铁线莲-2单株.png"), require("../public/images/CRetrieval/17x/灌木铁线莲-2单株.png"), require("../public/images/CRetrieval/17x/红柳-3枝条.png")],},
    },
    eighteen: {
        id: '018',
        L: {childrenID: '019',isFinish: false,describe: '植株具刺',images: [require("../public/images/CRetrieval/18s/锐枝木蓼-5叶.png"), require("../public/images/CRetrieval/18s/中国沙棘-3枝条.png"), require("../public/images/CRetrieval/18s/刺叶柄棘豆-3花.png"), require("../public/images/CRetrieval/18s/刺旋花-2花.png"), require("../public/images/CRetrieval/18s/枸杞-7果实.png"), require("../public/images/CRetrieval/18s/甘蒙锦鸡儿-3枝条.png")],},
        R: {childrenID: '029',isFinish: false,describe: '植株无刺',images: [require("../public/images/CRetrieval/18x/四合木-3叶.png"), require("../public/images/CRetrieval/18x/梭梭-4枝条、叶.png"), require("../public/images/CRetrieval/18x/沙木蓼-3枝条.png"), require("../public/images/CRetrieval/18x/灌木铁线莲-3叶.png"), require("../public/images/CRetrieval/18x/紫穗槐-3叶.png"), require("../public/images/CRetrieval/18x/霸王-3枝条.png")],},
    },
    nineteen: {
        id: '019',
        L: {childrenID: '020',isFinish: false,describe: '植株具成对托叶刺',images: [require("../public/images/CRetrieval/19s/柠条锦鸡儿-3枝条.png"), require("../public/images/CRetrieval/19s/柠条锦鸡儿-4叶.png"), require("../public/images/CRetrieval/19s/柠条锦鸡儿-5花.png"), require("../public/images/CRetrieval/19s/甘蒙锦鸡儿-3枝条.png"), require("../public/images/CRetrieval/19s/甘蒙锦鸡儿-4叶.png"), require("../public/images/CRetrieval/19s/甘蒙锦鸡儿-5花.png")],},
        R: {childrenID: '021',isFinish: false,describe: '植株不具成对托叶刺',images: [require("../public/images/CRetrieval/19x/中国沙棘-4枝条.png"), require("../public/images/CRetrieval/19x/刺叶柄棘豆-3花.png"), require("../public/images/CRetrieval/19x/刺旋花-2花.png"), require("../public/images/CRetrieval/19x/戈壁天门冬-2枝条.png"), require("../public/images/CRetrieval/19x/沙枣-5老枝.jpg"), require("../public/images/CRetrieval/19x/锐枝木蓼-5叶.png")],},
    },
    twenty: {
        id: '020',
        L: {childrenID: '120000120400120402',isFinish: true,describe: '小叶4，全部假掌状排列',images: [require("../public/images/CRetrieval/20s/甘蒙锦鸡儿-1灌丛.png"), require("../public/images/CRetrieval/20s/甘蒙锦鸡儿-2单株.png"), require("../public/images/CRetrieval/20s/甘蒙锦鸡儿-3枝条.png"), require("../public/images/CRetrieval/20s/甘蒙锦鸡儿-4叶.png"), require("../public/images/CRetrieval/20s/甘蒙锦鸡儿-5花.png"), require("../public/images/CRetrieval/20s/甘蒙锦鸡儿-6单株.png")],},
        R: {childrenID: '120000120400120401',isFinish: true,describe: '小叶4至多数，羽状排列',images: [require("../public/images/CRetrieval/20x/柠条锦鸡儿-1灌丛.png"), require("../public/images/CRetrieval/20x/柠条锦鸡儿-2单株.png"), require("../public/images/CRetrieval/20x/柠条锦鸡儿-3枝条.png"), require("../public/images/CRetrieval/20x/柠条锦鸡儿-4叶.png"), require("../public/images/CRetrieval/20x/柠条锦鸡儿-5花.png"), require("../public/images/CRetrieval/20x/柠条锦鸡儿-6果实.png"), require("../public/images/CRetrieval/20x/柠条锦鸡儿-7果实.png")],},
    },
    twentyone: {
        id: '021',
        L: { childrenID: '120000120900120901', isFinish: true, describe: '叶柄宿存，针刺状', images: [require("../public/images/CRetrieval/21s/刺叶柄棘豆-1草地.png"), require("../public/images/CRetrieval/21s/刺叶柄棘豆-2单株.png"), require("../public/images/CRetrieval/21s/刺叶柄棘豆-3花.png"), require("../public/images/CRetrieval/21s/刺叶柄棘豆-4果实.png")] },
        R: { childrenID: '022', isFinish: false, describe: '植株具枝刺或枝条针刺状', images: [require("../public/images/CRetrieval/21x/中国沙棘-3枝条.png"), require("../public/images/CRetrieval/21x/沙枣-5老枝.jpg"), require("../public/images/CRetrieval/21x/锐枝木蓼-5叶.png")], },
    },
    twentytwo: {
        id: '022',
        L: { childrenID: '023', isFinish: false, describe: '叶两面均有银白色鳞片', images: [require("../public/images/CRetrieval/22s/中国沙棘-5叶.png"), require("../public/images/CRetrieval/22s/沙枣-4幼枝.png")], },
        R: { childrenID: '024', isFinish: false, describe: '叶两面均无银白色鳞片', images: [require("../public/images/CRetrieval/22x/戈壁天门冬-2枝条.png"), require("../public/images/CRetrieval/22x/锐枝木蓼-5叶.png")], },
    },
    twentythree: {
        id: '023',
        L: {childrenID: '190000190100190101',isFinish: true,describe: '高达15米。叶形较宽，矩圆状披针形至条状披针形',images: [require("../public/images/CRetrieval/23s/沙枣-1林相.png"), require("../public/images/CRetrieval/23s/沙枣-2树形.png"), require("../public/images/CRetrieval/23s/沙枣-3树干.png"), require("../public/images/CRetrieval/23s/沙枣-4幼枝.png"), require("../public/images/CRetrieval/23s/沙枣-5老枝.jpg"), require("../public/images/CRetrieval/23s/沙枣-6叶.png"), require("../public/images/CRetrieval/23s/沙枣-7花.png"), require("../public/images/CRetrieval/23s/沙枣-8果实.png")],},
        R: {childrenID: '190000190200190201',isFinish: true,describe: '通常高1米。叶形较窄，条形至条状披针形',images: [require("../public/images/CRetrieval/23x/中国沙棘-1灌丛.png"), require("../public/images/CRetrieval/23x/中国沙棘-2单株.png"), require("../public/images/CRetrieval/23x/中国沙棘-3枝条.png"), require("../public/images/CRetrieval/23x/中国沙棘-4枝条.png"), require("../public/images/CRetrieval/23x/中国沙棘-5叶.png"), require("../public/images/CRetrieval/23x/中国沙棘-6果实.png")],},
    },
    twentyfour: {
        id: '024',
        L: {childrenID: '040000040100040101',isFinish: true,describe: '有膜质托叶鞘',images: [require("../public/images/CRetrieval/24s/锐枝木蓼-1灌丛.png"), require("../public/images/CRetrieval/24s/锐枝木蓼-2单株.png"), require("../public/images/CRetrieval/24s/锐枝木蓼-3幼枝.png"), require("../public/images/CRetrieval/24s/锐枝木蓼-4老枝.png"), require("../public/images/CRetrieval/24s/锐枝木蓼-5叶.png"), require("../public/images/CRetrieval/24s/锐枝木蓼-6花.png"), require("../public/images/CRetrieval/24s/锐枝木蓼-7果实.png")],},
        R: { childrenID: '025', isFinish: false, describe: '无膜质托叶鞘', images: [require("../public/images/CRetrieval/24x/宁夏枸杞-4枝条.png"), require("../public/images/CRetrieval/24x/宁夏枸杞-5叶.png"), require("../public/images/CRetrieval/24x/戈壁天门冬-2枝条.png"), require("../public/images/CRetrieval/24x/戈壁天门冬-4果实.png")], },
    },
    twentyfive: {
        id: '025',
        L: { childrenID: '320000320200320201', isFinish: true, describe: '具叶状枝', images: [require("../public/images/CRetrieval/25s/戈壁天门冬-1生境.png"), require("../public/images/CRetrieval/25s/戈壁天门冬-2枝条.png"), require("../public/images/CRetrieval/25s/戈壁天门冬-4果实.png")], },
        R: { childrenID: '026', isFinish: false, describe: '不具叶状枝', images: [require("../public/images/CRetrieval/25x/宁夏枸杞-4枝条.png"), require("../public/images/CRetrieval/25x/宁夏枸杞-5叶.png"), require("../public/images/CRetrieval/25x/宁夏枸杞-6花.png"), require("../public/images/CRetrieval/25x/白刺-3花.png"), require("../public/images/CRetrieval/25x/白刺-4果实.png")], },
    },
    twentysix: {
        id: '026',
        L: { childrenID: '260000260100260102', isFinish: true, describe: '半灌木，高5-15厘米，茎分枝呈垫状', images: [require("../public/images/CRetrieval/26s/刺旋花-1草地.png"), require("../public/images/CRetrieval/26s/刺旋花-2花.png")], },
        R: { childrenID: '027', isFinish: false, describe: '灌木，高度1米以上,不呈垫状', images: [require("../public/images/CRetrieval/26x/枸杞-1灌丛.png"), require("../public/images/CRetrieval/26x/白刺-1灌丛.png"), require("../public/images/CRetrieval/26x/白刺-2单株.png")], },
    },
    twentyseven: {
        id: '027',
        L: { childrenID: '130000130100130101', isFinish: true, describe: '枝条粗壮，叶2-3簇生', images: [require("../public/images/CRetrieval/27s/白刺-1灌丛.png"), require("../public/images/CRetrieval/27s/白刺-2单株.png"), require("../public/images/CRetrieval/27s/白刺-3花.png"), require("../public/images/CRetrieval/27s/白刺-4果实.png")], },
        R: { childrenID: '028', isFinish: false, describe: '枝条细长柔弱，叶互生', images: [require("../public/images/CRetrieval/27x/宁夏枸杞-4枝条.png"), require("../public/images/CRetrieval/27x/宁夏枸杞-5叶.png"), require("../public/images/CRetrieval/27x/枸杞-4叶.png"), require("../public/images/CRetrieval/27x/枸杞-5花.png")], },
    },
    twentyeight: {
        id: '028',
        L: { childrenID: '280000280200280201', isFinish: true, describe: '花萼通常2中裂', images: [require("../public/images/CRetrieval/28s/宁夏枸杞-1灌丛.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-2单株.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-3枝条.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-4枝条.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-5叶.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-6花.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-7花.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-8果实.png"), require("../public/images/CRetrieval/28s/宁夏枸杞-9果实.png")], },
        R: { childrenID: '280000280200280202', isFinish: true, describe: '花萼通常3中裂或4-5齿裂', images: [require("../public/images/CRetrieval/28x/枸杞-1灌丛.png"), require("../public/images/CRetrieval/28x/枸杞-2单株.png"), require("../public/images/CRetrieval/28x/枸杞-3枝条.png"), require("../public/images/CRetrieval/28x/枸杞-4叶.png"), require("../public/images/CRetrieval/28x/枸杞-5花.png"), require("../public/images/CRetrieval/28x/枸杞-6花.png"), require("../public/images/CRetrieval/28x/枸杞-7果实.png"), require("../public/images/CRetrieval/28x/枸杞-8果实.png")], },
    },
    twentynine: {
        id: '029',
        L: { childrenID: '030', isFinish: false, describe: '羽状复叶', images: [require("../public/images/CRetrieval/29s/四合木-3叶.png"), require("../public/images/CRetrieval/29s/文冠果-3叶.png"), require("../public/images/CRetrieval/29s/紫穗槐-3叶.png"), require("../public/images/CRetrieval/29s/细致岩黄芪-2叶.jpg"), require("../public/images/CRetrieval/29s/霸王-4叶.png")], },
        R: { childrenID: '035', isFinish: false, describe: '单叶', images: [require("../public/images/CRetrieval/29x/梭梭-4枝条、叶.png"), require("../public/images/CRetrieval/29x/沙拐枣-4叶.jpg"), require("../public/images/CRetrieval/29x/沙木蓼-4叶.png"), require("../public/images/CRetrieval/29x/灌木铁线莲-3叶.png"), require("../public/images/CRetrieval/29x/盐爪爪-3叶.png"), require("../public/images/CRetrieval/29x/红柳-4叶.png")], },
    },
    thiry: {
        id: '030',
        L: { childrenID: '031', isFinish: false, describe: '奇数羽状复叶', images: [require("../public/images/CRetrieval/30s/文冠果-3叶.png"), require("../public/images/CRetrieval/30s/紫穗槐-3叶.png"), require("../public/images/CRetrieval/30s/细致岩黄芪-2叶.jpg")], },
        R: { childrenID: '034', isFinish: false, describe: '偶数羽状复叶，小叶2枚', images: [require("../public/images/CRetrieval/30x/四合木-3叶.png"), require("../public/images/CRetrieval/30x/霸王-4叶.png")], },
    },
    thiryone: {
        id: '031',
        L: { childrenID: '160000160100160101', isFinish: true, describe: '小叶边缘具锯齿', images: [require("../public/images/CRetrieval/31s/文冠果-1林相.png"), require("../public/images/CRetrieval/31s/文冠果-2树形.png"), require("../public/images/CRetrieval/31s/文冠果-3叶.png"), require("../public/images/CRetrieval/31s/文冠果-4花.png"), require("../public/images/CRetrieval/31s/文冠果-5果实.png"), require("../public/images/CRetrieval/31s/文冠果-6果实.png")], },
        R: { childrenID: '032', isFinish: false, describe: '小叶全缘', images: [require("../public/images/CRetrieval/31x/紫穗槐-3叶.png"), require("../public/images/CRetrieval/31x/细致岩黄芪-2叶.jpg")], },
    },
    thirytwo: {
        id: '032',
        L: { childrenID: '120000120200120201', isFinish: true, describe: '上部小叶与下部同数', images: [require("../public/images/CRetrieval/32s/紫穗槐-1灌丛.png"), require("../public/images/CRetrieval/32s/紫穗槐-2单株.png"), require("../public/images/CRetrieval/32s/紫穗槐-3叶.png"), require("../public/images/CRetrieval/32s/紫穗槐-4花序.png"), require("../public/images/CRetrieval/32s/紫穗槐-5花.png"), require("../public/images/CRetrieval/32s/紫穗槐-6果实.png"), require("../public/images/CRetrieval/32s/紫穗槐-7种子.png")], },
        R: { childrenID: '033', isFinish: false, describe: '上部小叶与下部不同数', images: [require("../public/images/CRetrieval/32x/塔落岩黄芪-3枝条.jpg"), require("../public/images/CRetrieval/32x/细致岩黄芪-2叶.jpg")], },
    },
    thirythree: {
        id: '033',
        L: { childrenID: '120000120600120602', isFinish: true, describe: '小叶7-11，最上部完全无小叶', images: [require("../public/images/CRetrieval/33s/细致岩黄芪-1灌丛.jpg"), require("../public/images/CRetrieval/33s/细致岩黄芪-2叶.jpg"), require("../public/images/CRetrieval/33s/细致岩黄芪-3花.jpg")], },
        R: { childrenID: '120000120600120601', isFinish: true, describe: '小叶7-23，上部具少数小叶', images: [require("../public/images/CRetrieval/33x/塔落岩黄芪-1灌丛.gif"), require("../public/images/CRetrieval/33x/塔落岩黄芪-2单株.jpg"), require("../public/images/CRetrieval/33x/塔落岩黄芪-3枝条.jpg"), require("../public/images/CRetrieval/33x/塔落岩黄芪-4花.jpg")], },
    },
    thiryfour: {
        id: '034',
        L: { childrenID: '130000130400130401', isFinish: true, describe: '小叶长0.3-0.8毫米', images: [require("../public/images/CRetrieval/34s/四合木-1灌丛.png"), require("../public/images/CRetrieval/34s/四合木-2枝条.png"), require("../public/images/CRetrieval/34s/四合木-3叶.png")], },
        R: { childrenID: '130000130300130301', isFinish: true, describe: '小叶长0.8-2.5（4.5）厘米', images: [require("../public/images/CRetrieval/34x/霸王-1草地.png"), require("../public/images/CRetrieval/34x/霸王-2单株.png"), require("../public/images/CRetrieval/34x/霸王-3枝条.png"), require("../public/images/CRetrieval/34x/霸王-4叶.png"), require("../public/images/CRetrieval/34x/霸王-5花.png"), require("../public/images/CRetrieval/34x/霸王-6果实.png")], },
    },
    thiryfive: {
        id: '035',
        L: { childrenID: '036', isFinish: false, describe: '叶对生', images: [require("../public/images/CRetrieval/35s/梭梭-4枝条、叶.png")], },
        R: { childrenID: '038', isFinish: false, describe: '叶互生', images: [require("../public/images/CRetrieval/35x/柽柳-3枝条.png"), require("../public/images/CRetrieval/35x/柽柳-4-花序.png"), require("../public/images/CRetrieval/35x/沙木蓼-3枝条.png"), require("../public/images/CRetrieval/35x/沙木蓼-4叶.png"), require("../public/images/CRetrieval/35x/红柳-3枝条.png"), require("../public/images/CRetrieval/35x/红柳-4叶.png")], },
    },
    thirysix: {
        id: '036',
        L: { childrenID: '050000050500050501', isFinish: true, describe: '叶膜质', images: [require("../public/images/CRetrieval/36s/梭梭-1灌丛.png"), require("../public/images/CRetrieval/36s/梭梭-2单株.png"), require("../public/images/CRetrieval/36s/梭梭-3树干.png"), require("../public/images/CRetrieval/36s/梭梭-4枝条、叶.png"), require("../public/images/CRetrieval/36s/梭梭-5花.png"), require("../public/images/CRetrieval/36s/梭梭-6果实.png")], },
        R: { childrenID: '037', isFinish: false, describe: '叶草质', images: [require("../public/images/CRetrieval/36x/cefc1e178a82b90118ac5140798da9773912ef44.png"), require("../public/images/CRetrieval/36x/灌木铁线莲-3叶.png")], },
    },
    thiryseven: {
        id: '037',
        L: { childrenID: '090000090100090101', isFinish: true, describe: '叶片狭三角形或披针形，边缘疏生牙齿，下部常羽状深裂或全裂', images: [require("../public/images/CRetrieval/37s/灌木铁线莲-1灌丛.png"), require("../public/images/CRetrieval/37s/灌木铁线莲-2单株.png"), require("../public/images/CRetrieval/37s/灌木铁线莲-3叶.png"), require("../public/images/CRetrieval/37s/灌木铁线莲-4花.png"), require("../public/images/CRetrieval/37s/灌木铁线莲-5花.png")], },
        R: { childrenID: '150000150100150101', isFinish: true, describe: '叶卵形、椭圆状卵形或椭圆形状披针形，边缘具细锯齿', images: [require("../public/images/CRetrieval/37x/cefc1e178a82b90118ac5140798da9773912ef44.png")], },
    },
    thiryeight: {
        id: '038',
        L: { childrenID: '040000040100040102', isFinish: true, describe: '有膜质托叶鞘', images: [require("../public/images/CRetrieval/38s/沙木蓼-1灌丛.png"), require("../public/images/CRetrieval/38s/沙木蓼-2单株.png"), require("../public/images/CRetrieval/38s/沙木蓼-3枝条.png"), require("../public/images/CRetrieval/38s/沙木蓼-4叶.png"), require("../public/images/CRetrieval/38s/沙木蓼-5叶鞘.png"), require("../public/images/CRetrieval/38s/沙木蓼-6花.png"), require("../public/images/CRetrieval/38s/沙木蓼-7果实.png")], },
        R: { childrenID: '039', isFinish: false, describe: '无膜质托叶鞘', images: [require("../public/images/CRetrieval/38x/柽柳-3枝条.png"), require("../public/images/CRetrieval/38x/盐爪爪-3叶.png"), require("../public/images/CRetrieval/38x/红柳-4叶.png"), require("../public/images/CRetrieval/38x/红砂-4枝条.jpg"), require("../public/images/CRetrieval/38x/黄毛头-2叶.png")], },
    },
    thirynine: {
        id: '039',
        L: { childrenID: '040', isFinish: false, describe: '叶鳞片状', images: [require("../public/images/CRetrieval/39s/柽柳-3枝条.png"), require("../public/images/CRetrieval/39s/红柳-4叶.png")], },
        R: { childrenID: '041', isFinish: false, describe: '叶非鳞片状', images: [require("../public/images/CRetrieval/39x/盐爪爪-3叶.png"), require("../public/images/CRetrieval/39x/红砂-4枝条.jpg"), require("../public/images/CRetrieval/39x/黄毛头-2叶.png")], },
    },
    forty: {
        id: '040',
        L: { childrenID: '180000180200180201', isFinish: true, describe: '花序均生于当年枝上；花瓣直立，叶平贴于幼枝n上', images: [require("../public/images/CRetrieval/40s/红柳-1生境.jpg"), require("../public/images/CRetrieval/40s/红柳-2单株.png"), require("../public/images/CRetrieval/40s/红柳-3枝条.png"), require("../public/images/CRetrieval/40s/红柳-4叶.png"), require("../public/images/CRetrieval/40s/红柳-5花.png")], },
        R: { childrenID: '180000180200180202', isFinish: true, describe: '春季的花序着生于去年枝上，夏、秋季的花序着生于当年枝上，花筒稍开张；叶开张或平贴在幼枝上，幼嫩枝叶深绿色，叶平贴或微开张', images: [require("../public/images/CRetrieval/40x/柽柳-1灌丛.png"), require("../public/images/CRetrieval/40x/柽柳-2单株.png"), require("../public/images/CRetrieval/40x/柽柳-3枝条.png"), require("../public/images/CRetrieval/40x/柽柳-4-花序.png"), require("../public/images/CRetrieval/40x/柽柳-5花序.png")], },
    },
    fortyone: {
        id: '041',
        L: { childrenID: '042', isFinish: false, describe: '叶片肉质', images: [require("../public/images/CRetrieval/41s/合头草-2枝条.png"), require("../public/images/CRetrieval/41s/珍珠猪毛菜-3叶.png"), require("../public/images/CRetrieval/41s/盐爪爪-3叶.png"), require("../public/images/CRetrieval/41s/红砂-4枝条.jpg"), require("../public/images/CRetrieval/41s/黄毛头-2叶.png")], },
        R: { childrenID: '047', isFinish: false, describe: '叶膜质或草质', images: [require("../public/images/CRetrieval/41x/中亚紫菀木-3枝条.png"), require("../public/images/CRetrieval/41x/旱榆-4枝条.png"), require("../public/images/CRetrieval/41x/沙拐枣-4叶.jpg"), require("../public/images/CRetrieval/41x/蒙古扁桃-3枝条.png"), require("../public/images/CRetrieval/41x/龙蒿-2枝条.png")], },
    },
    fortytwo: {
        id: '042',
        L: { childrenID: '043', isFinish: false, describe: '叶片基部下沿', images: [require("../public/images/CRetrieval/42s/盐爪爪-3叶.png"), require("../public/images/CRetrieval/42s/黄毛头-2叶.png")], },
        R: { childrenID: '044', isFinish: false, describe: '叶片基部不下沿', images: [require("../public/images/CRetrieval/42x/合头草-2枝条.png"), require("../public/images/CRetrieval/42x/珍珠猪毛菜-3叶.png"), require("../public/images/CRetrieval/42x/红砂-4枝条.jpg")], },
    },
    fortythree: {
        id: '043',
        L: { childrenID: '050000050600050601', isFinish: true, describe: '叶片长4-10毫米；穗状花序较粗直径3-4毫米', images: [require("../public/images/CRetrieval/43s/盐爪爪-1灌丛.png"), require("../public/images/CRetrieval/43s/盐爪爪-2单株.png"), require("../public/images/CRetrieval/43s/盐爪爪-3叶.png"), require("../public/images/CRetrieval/43s/盐爪爪-4果实.png"), require("../public/images/CRetrieval/43s/盐爪爪-5种子.png")], },
        R: { childrenID: '050000050600050602', isFinish: true, describe: '叶片长3毫米以下或不发育；穗状花序直径1.5-3毫米', images: [require("../public/images/CRetrieval/43x/黄毛头-1灌丛.png"), require("../public/images/CRetrieval/43x/黄毛头-2叶.png"), require("../public/images/CRetrieval/43x/黄毛头-3果实.png")], },
    },
    fortyfour: {
        id: '044',
        L: { childrenID: '180000180100180101', isFinish: true, describe: '蒴果3瓣裂。叶常3-5叶簇生', images: [require("../public/images/CRetrieval/44s/红砂-1灌丛.png"), require("../public/images/CRetrieval/44s/红砂-2单株.png"), require("../public/images/CRetrieval/44s/红砂-3枝条.jpg"), require("../public/images/CRetrieval/44s/红砂-4枝条.jpg"), require("../public/images/CRetrieval/44s/红砂-5花.png")], },
        R: { childrenID: '045', isFinish: false, describe: '胞果', images: [require("../public/images/CRetrieval/44x/合头草-4果实.png"), require("../public/images/CRetrieval/44x/松叶猪毛菜-6果实.png"), require("../public/images/CRetrieval/44x/松叶猪毛菜-7果实.jpg"), require("../public/images/CRetrieval/44x/珍珠猪毛菜-5花被.png")], },
    },
    fortyfive: {
        id: '045',
        L: { childrenID: '050000051100051101', isFinish: true, describe: '花通常3朵集生于仅具1节间的短枝顶端', images: [require("../public/images/CRetrieval/45s/合头草-1草地.png"), require("../public/images/CRetrieval/45s/合头草-2枝条.png"), require("../public/images/CRetrieval/45s/合头草-3叶花.png"), require("../public/images/CRetrieval/45s/合头草-4果实.png")], },
        R: { childrenID: '046', isFinish: false, describe: '花序穗状，圆锥状或单花腋生', images: [require("../public/images/CRetrieval/45x/松叶猪毛菜-5枝条.png"), require("../public/images/CRetrieval/45x/松叶猪毛菜-6果实.png"), require("../public/images/CRetrieval/45x/珍珠猪毛菜-5花被.png")], },
    },
    fortysix: {
        id: '046',
        L: { childrenID: '050000050900050901', isFinish: true, describe: '叶锥形或三角形；植株密被鳞片状丁字形毛而呈灰白或灰绿色，短枝缩短成球芽状', images: [require("../public/images/CRetrieval/46s/珍珠猪毛菜-1灌丛.png"), require("../public/images/CRetrieval/46s/珍珠猪毛菜-2单株.png"), require("../public/images/CRetrieval/46s/珍珠猪毛菜-3叶.png"), require("../public/images/CRetrieval/46s/珍珠猪毛菜-4叶.png"), require("../public/images/CRetrieval/46s/珍珠猪毛菜-5花被.png")], },
        R: { childrenID: '050000050900050905', isFinish: true, describe: '叶条状半圆柱形或棱条状条形；植株无毛，呈绿色，不具球芽', images: [require("../public/images/CRetrieval/46x/松叶猪毛菜-1灌木.png"), require("../public/images/CRetrieval/46x/松叶猪毛菜-2单株.jpg"), require("../public/images/CRetrieval/46x/松叶猪毛菜-3叶.png"), require("../public/images/CRetrieval/46x/松叶猪毛菜-4枝条.png"), require("../public/images/CRetrieval/46x/松叶猪毛菜-5枝条.png"), require("../public/images/CRetrieval/46x/松叶猪毛菜-6果实.png"), require("../public/images/CRetrieval/46x/松叶猪毛菜-7果实.jpg")], },
    },
    fortyseven: {
        id: '047',
        L: { childrenID: '040000040200040201', isFinish: true, describe: '叶膜质', images: [require("../public/images/CRetrieval/47s/沙拐枣-1灌丛.png"), require("../public/images/CRetrieval/47s/沙拐枣-2单株.jpg"), require("../public/images/CRetrieval/47s/沙拐枣-3枝条.jpg"), require("../public/images/CRetrieval/47s/沙拐枣-4叶.jpg"), require("../public/images/CRetrieval/47s/沙拐枣-5花.png"), require("../public/images/CRetrieval/47s/沙拐枣-5花.png"), require("../public/images/CRetrieval/47s/沙拐枣-6果实.png"), require("../public/images/CRetrieval/47s/沙拐枣7果实.png")], },
        R: { childrenID: '048', isFinish: false, describe: '叶草质', images: [require("../public/images/CRetrieval/47x/龙蒿-2枝条.png")], },
    },
    fortyeight: {
        id: '048',
        L: { childrenID: '300000300100300101', isFinish: true, describe: '.植株常具有强烈气味', images: [require("../public/images/CRetrieval/48s/龙蒿-1草地.png"), require("../public/images/CRetrieval/48s/龙蒿-2枝条.png"), require("../public/images/CRetrieval/48s/龙蒿-3花序.png")], },
        R: { childrenID: '049', isFinish: false, describe: '植株不具有强烈气味', images: [require("../public/images/CRetrieval/48x/中亚紫菀木-3枝条.png"), require("../public/images/CRetrieval/48x/束伞亚菊-3茎.png"), require("../public/images/CRetrieval/48x/蒙古扁桃-5果实.png"), require("../public/images/CRetrieval/48x/黑沙蒿-3叶.png")], },
    },
    fortynine: {
        id: '049',
        L: { childrenID: '050', isFinish: false, describe: '叶不开裂', images: [require("../public/images/CRetrieval/49s/中亚紫菀木-3枝条.png"), require("../public/images/CRetrieval/49s/旱榆-7果实.png"), require("../public/images/CRetrieval/49s/蒙古扁桃-5果实.png")], },
        R: { childrenID: '052', isFinish: false, describe: '叶开裂', images: [require("../public/images/CRetrieval/49x/束伞亚菊-3茎.png"), require("../public/images/CRetrieval/49x/黑沙蒿-3叶.png")], },
    },
    fifty: {
        id: '050',
        L: { childrenID: '300000300200300201', isFinish: true, describe: '叶全缘', images: [require("../public/images/CRetrieval/50s/中亚紫菀木-1草地.png"), require("../public/images/CRetrieval/50s/中亚紫菀木-2单株.png"), require("../public/images/CRetrieval/50s/中亚紫菀木-3枝条.png"), require("../public/images/CRetrieval/50s/中亚紫菀木-4花.png")], },
        R: { childrenID: '051', isFinish: false, describe: '叶缘具锯齿', images: [require("../public/images/CRetrieval/50x/旱榆-7果实.png"), require("../public/images/CRetrieval/50x/蒙古扁桃-5果实.png")], },
    },
    fiftyone: {
        id: '051',
        L: { childrenID: '110000110100110101', isFinish: true, describe: '核果', images: [require("../public/images/CRetrieval/51s/蒙古扁桃-1灌丛.png"), require("../public/images/CRetrieval/51s/蒙古扁桃-2单株.png"), require("../public/images/CRetrieval/51s/蒙古扁桃-3枝条.png"), require("../public/images/CRetrieval/51s/蒙古扁桃-4花.png"), require("../public/images/CRetrieval/51s/蒙古扁桃-5果实.png")], },
        R: { childrenID: '030000030100030102', isFinish: true, describe: '翅果', images: [require("../public/images/CRetrieval/51x/旱榆-1林相.png"), require("../public/images/CRetrieval/51x/旱榆-2树形.jpg"), require("../public/images/CRetrieval/51x/旱榆-3树干.jpg"), require("../public/images/CRetrieval/51x/旱榆-4枝条.png"), require("../public/images/CRetrieval/51x/旱榆-5叶.jpg"), require("../public/images/CRetrieval/51x/旱榆-6花.png"), require("../public/images/CRetrieval/51x/旱榆-7果实.png")], },
    },
    fiftytwo: {
        id: '052',
        L: { childrenID: '300000301000301001', isFinish: true, describe: '头状花序在茎枝顶端排列成伞房状，全部小花结实；瘦果顶端平', images: [require("../public/images/CRetrieval/52s/束伞亚菊-1草地.png"), require("../public/images/CRetrieval/52s/束伞亚菊-2单株.png"), require("../public/images/CRetrieval/52s/束伞亚菊-3茎.png"), require("../public/images/CRetrieval/52s/束伞亚菊-4花.png"), require("../public/images/CRetrieval/52s/束伞亚菊-5果实.png")], },
        R: { childrenID: '053', isFinish: false, describe: '头状花序在茎上排列成穗状、总状或圆锥状，边花雌性，结实，中央花两性，结实或不结实；瘦果满布于花序托之上', images: [require("../public/images/CRetrieval/52x/白沙蒿-4果实.jpg"), require("../public/images/CRetrieval/52x/黑沙蒿-4花.png"), require("../public/images/CRetrieval/52x/黑沙蒿-5果实.png")], },
    },
    fiftythree: {
        id: '053',
        L: { childrenID: '300000300100300108', isFinish: true, describe: '枝多灰白色', images: [require("../public/images/CRetrieval/53s/白沙蒿-1生境.jpg"), require("../public/images/CRetrieval/53s/白沙蒿-2单株.jpg"), require("../public/images/CRetrieval/53s/白沙蒿-3叶.jpg"), require("../public/images/CRetrieval/53s/白沙蒿-4果实.jpg")], },
        R: { childrenID: '300000300100300109', isFinish: true, describe: '枝多黑灰色至紫红色', images: [require("../public/images/CRetrieval/53x/黑沙蒿-1草地.png"), require("../public/images/CRetrieval/53x/黑沙蒿-2单株.png"), require("../public/images/CRetrieval/53x/黑沙蒿-3叶.png"), require("../public/images/CRetrieval/53x/黑沙蒿-4花.png"), require("../public/images/CRetrieval/53x/黑沙蒿-5果实.png")], },
    },
    getLeftObjByID: function (id) {
        for (let i in this) {
            if (id == this[i].id) {
                return this[i].L
            }
        }
    },
    getRightObjByID: function (id) {
        for (let i in this) {
            if (id == this[i].id) {
                return this[i].R
            }
        }
    },
    getAllID: function () {
        let IDarr = []
        for (let i in this) {
            IDarr.push(this[i].id)
        }
        return IDarr
    }
}

export default cAPI