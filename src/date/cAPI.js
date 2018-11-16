const cAPI = {
    one: {
        id: '001',
        L: { childrenID: '002', isFinish: false, describe: '常绿植物', images: [require("@imagesp/1yuanbai/1.jpg"), require("@imagesp/1yuanbai/2.jpg"), require("@imagesp/1yuanbai/3.jpg"), require("@imagesp/1yuanbai/4.jpg"), require("@imagesp/1yuanbai/5.jpg"), require("@imagesp/1yuanbai/6.jpg")], },
        R: { childrenID: '003', isFinish: false, describe: '落叶植物', images: [require("@imagesp/2zhuantianyang/1.jpg"), require("@imagesp/2zhuantianyang/2.jpg"), require("@imagesp/2zhuantianyang/3.png"), require("@imagesp/2zhuantianyang/4.jpg"), require("@imagesp/2zhuantianyang/5.jpg"), require("@imagesp/2zhuantianyang/6.jpg")], },
    },
    two: {
        id: '002',
        L: { childrenID: '0200', isFinish: true, describe: '单叶鳞形或刺性', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '0300', isFinish: true, describe: '单叶或三出复叶，叶型较宽', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    three: {
        id: '003',
        L: { childrenID: '004', isFinish: false, describe: '乔木', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '017', isFinish: false, describe: '灌木或半灌木', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    four: {
        id: '004',
        L: { childrenID: '005', isFinish: false, describe: '植株具刺', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '007', isFinish: false, describe: '植株无刺', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    five: {
        id: '005',
        L: { childrenID: '0400', isFinish: true, describe: '具托叶刺', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '006', isFinish: false, describe: '具枝刺', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    six: {
        id: '006',
        L: { childrenID: '0500', isFinish: true, describe: '叶两面均有银白色鳞片', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '0600', isFinish: true, describe: '叶两面均无银白色鳞片', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    seven: {
        id: '007',
        L: { childrenID: '008', isFinish: false, describe: '奇数羽状复叶', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '009', isFinish: false, describe: '单叶', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    eight: {
        id: '008',
        L: { childrenID: '0700', isFinish: true, describe: '小叶5-9', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '0800', isFinish: true, describe: '小叶9-19', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    nine: {
        id: '009',
        L: { childrenID: '0900', isFinish: true, describe: '叶对生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '010', isFinish: false, describe: '叶互生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    ten: {
        id: '010',
        L: { childrenID: '011', isFinish: false, describe: '树冠圆柱形或尖塔形', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '012', isFinish: false, describe: '树冠较宽阔', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    eleven: {
        id: '011',
        L: { childrenID: '1000', isFinish: true, describe: '叶缘具裂片、缺刻、波状齿或全缘', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '1100', isFinish: true, describe: '叶缘具整齐锯齿', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    twelve: {
        id: '012',
        L: { childrenID: '1100', isFinish: true, describe: '叶多变，狭披针形至肾形，两面灰蓝色', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '013', isFinish: false, describe: '不同叶片形状相近，绿色', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    thirteen: {
        id: '013',
        L: { childrenID: '1200', isFinish: true, describe: '叶片披针形', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '014', isFinish: false, describe: '叶形较宽', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    fourteen: {
        id: '014',
        L: { childrenID: '015', isFinish: false, describe: '早春开花，花朵较大', images: [require("@imagesp/1yuanbai/1.jpg"), require("@imagesp/1yuanbai/2.jpg"), require("@imagesp/1yuanbai/3.jpg"), require("@imagesp/1yuanbai/4.jpg"), require("@imagesp/1yuanbai/5.jpg"), require("@imagesp/1yuanbai/6.jpg")], },
        R: { childrenID: '016', isFinish: false, describe: '早春开花，花朵不明显', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    fifteen: {
        id: '015',
        L: { childrenID: '1300', isFinish: true, describe: '果实被柔毛，果实无蜡粉；花粉红色或红色', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '1400', isFinish: true, describe: '果实无毛，果实外被蜡粉；花白色，有梗', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    sixteen: {
        id: '016',
        L: { childrenID: '1500', isFinish: true, describe: '叶矩圆形至卵状披针形，边缘多为重锯齿', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '1600', isFinish: true, describe: '叶卵形，边缘多为单齿', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    seventeen: {
        id: '017',
        L: { childrenID: '1700', isFinish: true, describe: '蔓型灌木', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '018', isFinish: false, describe: '非蔓型灌木', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
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