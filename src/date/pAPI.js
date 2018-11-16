const pAPI = {
    one:{
        id:'001',
        L: { childrenID: '0100', isFinish: true, describe: '胚珠裸露，无真正的花和果实', images: [require("@imagesp/1yuanbai/1.jpg"), require("@imagesp/1yuanbai/2.jpg"), require("@imagesp/1yuanbai/3.jpg"), require("@imagesp/1yuanbai/4.jpg"), require("@imagesp/1yuanbai/5.jpg"), require("@imagesp/1yuanbai/6.jpg")], },
        R: { childrenID: '002', isFinish: false, describe: '胚珠被子房包被，具有真正的花和果实', images: [require("@imagesp/2zhuantianyang/1.jpg"), require("@imagesp/2zhuantianyang/2.jpg"), require("@imagesp/2zhuantianyang/3.png"), require("@imagesp/2zhuantianyang/4.jpg"), require("@imagesp/2zhuantianyang/5.jpg"), require("@imagesp/2zhuantianyang/6.jpg")], },
    },
    two:{
        id:'002',
        L: { childrenID: '0200', isFinish: true, describe: '子叶', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '003', isFinish: false, describe: '花通常四至五基数', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    three: {
        id: '003',
        L: { childrenID: '004', isFinish: false, describe: '无花瓣，花萼有或无；或花萼呈花瓣状', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '018', isFinish: false, describe: '花有花萼和花冠', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    four: {
        id: '004',
        L: { childrenID: '0200', isFinish: true, describe: '花单性，雌、雄花成柔荑花序', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '005', isFinish: false, describe: '花单性、两性或杂性，但不形成柔荑花序', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    five: {
        id: '005',
        L: { childrenID: '0300', isFinish: true, describe: '子房每室含多数胚珠，蓇葖果', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '006', isFinish: false, describe: '子房每室含l至数个胚珠', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    six: {
        id: '006',
        L: { childrenID: '0400', isFinish: true, describe: '雄花成头状花序，雌花2个同生于具钩刺的总苞中', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '007', isFinish: false, describe: '雌雄花非上述情况', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    seven: {
        id: '007',
        L: { childrenID: '0500', isFinish: true, describe: '心皮2至多数，离生；果为聚合瘦果', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '008', isFinish: false, describe: '心皮单一或数个合生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    eight: {
        id: '008',
        L: { childrenID: '0600', isFinish: true, describe: '子房下位或半下位，灌木或乔木，叶互生，被银色鳞片', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '009', isFinish: false, describe: '子房上位', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    nine: {
        id: '009',
        L: { childrenID: '0700', isFinish: true, describe: '具托叶鞘', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '010', isFinish: false, describe: '无托叶鞘', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    ten: {
        id: '010',
        L: { childrenID: '011', isFinish: false, describe: '草本', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '017', isFinish: false, describe: '木本', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    eleven: {
        id: '011',
        L: { childrenID: '0800', isFinish: true, describe: '无花萼。植株具乳汁；杯状聚伞花序', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '012', isFinish: false, describe: '有花萼', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    twelve: {
        id: '012',
        L: { childrenID: '013', isFinish: false, describe: '花萼呈花瓣状', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '015', isFinish: false, describe: '花萼不呈花瓣状', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    thirteen: {
        id: '013',
        L: { childrenID: '014', isFinish: false, describe: '雄蕊与花萼裂片同数，二者不合生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '0900', isFinish: true, describe: '雄蕊为萼裂片的2倍或同数，但二者合生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    fourteen: {
        id: '014',
        L: { childrenID: '0100', isFinish: true, describe: '花排成头状或密穗状；羽状复叶', images: [require("@imagesp/1yuanbai/1.jpg"), require("@imagesp/1yuanbai/2.jpg"), require("@imagesp/1yuanbai/3.jpg"), require("@imagesp/1yuanbai/4.jpg"), require("@imagesp/1yuanbai/5.jpg"), require("@imagesp/1yuanbai/6.jpg")], },
        R: { childrenID: '1100', isFinish: true, describe: '花单生叶腋；单叶', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    fifteen: {
        id: '015',
        L: { childrenID: '016', isFinish: false, describe: '花柱2或更多', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '1200', isFinish: true, describe: '花柱单一。花两性；雄蕊2；短角果', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    sixteen: {
        id: '016',
        L: { childrenID: '1300', isFinish: true, describe: '花有干膜质苞片', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '1400', isFinish: true, describe: '花无干膜质苞片', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    seventeen: {
        id: '017',
        L: { childrenID: '1500', isFinish: true, describe: '雄蕊2；翅果；叶对生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { childrenID: '1600', isFinish: true, describe: '雄蕊4-8；翅果或核果；叶互生', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
    },
    getLeftObjByID:function(id){
        for (let i in this) {
            if (id == this[i].id){
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
        for(let i in this){
            IDarr.push(this[i].id)
        }
        return IDarr
    }
}

export default pAPI