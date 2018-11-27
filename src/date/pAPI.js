/**
 * Copyright(C),blog.lihailezzc.com
 * Author: jiayouzzc@126.com
 * Date: 2018.11.27
 * Version: 0.6.3
 * Description: data 专业检索 差种
**/
const pAPI = {
    one:{
        id:'001',
        L: { childrenID: '010000', isFinish: true, describe: '胚珠裸露，无真正的花和果实', images: [require("../public/images/PRetrieval/ke/101.jpg"), require("../public/images/PRetrieval/ke/102.jpg")], },
        R: { childrenID: '002', isFinish: false, describe: '胚珠被子房包被，具有真正的花和果实', images: [require("../public/images/PRetrieval/ke/111.png"), require("../public/images/PRetrieval/ke/112.png"), require("../public/images/PRetrieval/ke/113.png"), require("../public/images/PRetrieval/ke/114.png"), require("../public/images/PRetrieval/ke/115.png"), require("../public/images/PRetrieval/ke/116.png")], },
    },
    two:{
        id:'002',
        L: {childrenID: '003',isFinish: false,describe: '子叶2，花通常四至五基数（双子叶植物纲Dicotyledoneae）',images: [require("../public/images/PRetrieval/ke/201.png"), require("../public/images/PRetrieval/ke/202.png"), require("../public/images/PRetrieval/ke/203.png"), require("../public/images/PRetrieval/ke/204.png"), require("../public/images/PRetrieval/ke/205.png"), require("../public/images/PRetrieval/ke/206.png")],},
        R: { childrenID: '045', isFinish: false, describe: '子叶l片；叶通常有平行叶脉；花常三基数（单子叶植物纲Monocotyledoneae）',images: [require("../public/images/PRetrieval/ke/211.png"), require("../public/images/PRetrieval/ke/212.png"), require("../public/images/PRetrieval/ke/213.png"), require("../public/images/PRetrieval/ke/214.png")],},
    },
    three: {
        id: '003',
        L: {childrenID: '004',isFinish: false,describe: '无花瓣，花萼有或无；或花萼呈花瓣状',images: [require("../public/images/PRetrieval/ke/301.png"), require("../public/images/PRetrieval/ke/302.png"), require("../public/images/PRetrieval/ke/303.png"), require("../public/images/PRetrieval/ke/304.png"), require("../public/images/PRetrieval/ke/305.png"), require("../public/images/PRetrieval/ke/306.png")],},
        R: {childrenID: '018',isFinish: false,describe: '花有花萼和花冠',images: [require("../public/images/PRetrieval/ke/311.png"), require("../public/images/PRetrieval/ke/312.png"), require("../public/images/PRetrieval/ke/313.png"), require("../public/images/PRetrieval/ke/314.png"), require("../public/images/PRetrieval/ke/315.png"), require("../public/images/PRetrieval/ke/316.png")],},
    },
    four: {
        id: '004',
        L: { childrenID: 'k02',isFinish: false,describe: '花单性，雌、雄花成柔荑花序',images: [require("../public/images/PRetrieval/ke/401.png"), require("../public/images/PRetrieval/ke/402.png"), require("../public/images/PRetrieval/ke/403.png"), require("../public/images/PRetrieval/ke/404.jpg"), require("../public/images/PRetrieval/ke/405.png"), require("../public/images/PRetrieval/ke/406.png")],},
        R: { childrenID: '005',isFinish: false,describe: '花单性、两性或杂性，但不形成柔荑花序',images: [require("../public/images/PRetrieval/ke/411.png"), require("../public/images/PRetrieval/ke/412.png"), require("../public/images/PRetrieval/ke/413.png"), require("../public/images/PRetrieval/ke/414.png"), require("../public/images/PRetrieval/ke/415.png"), require("../public/images/PRetrieval/ke/416.png")],},
    },
    ktwo: {
        id: 'k02',
        L: { childrenID: 's001', isFinish: false, describe: '枝条先端具顶芽，芽鳞多数；叶柄常较长；柔荑花序均下垂；苞片先端有缺裂；花具杯状花盘', images: [require("../public/images/PRetrieval/shu/020000/0200001s1.png"), require("../public/images/PRetrieval/shu/020000/0200001s2.png"), require("../public/images/PRetrieval/shu/020000/0200001s3.jpg")], },
        R: { childrenID: 's002', isFinish: false, describe: '枝条先端无顶芽，芽鳞1；叶柄常较短；柔荑花序下垂或直立；苞片全缘，无杯状花盘', images: [require("../public/images/PRetrieval/shu/020000/0200001x1.jpg"), require("../public/images/PRetrieval/shu/020000/0200001x2.png"), require("../public/images/PRetrieval/shu/020000/0200001x3.jpg")], },
    },
    five: {
        id: '005',
        L: { childrenID: 'k09', isFinish: false, describe: '子房每室含多数胚珠，蓇葖果', images: [require("../public/images/PRetrieval/ke/501.png")], },
        R: { childrenID: '006', isFinish: false, describe: '子房每室含l至数个胚珠', images: [require("../public/images/PRetrieval/ke/511.jpg")], },
    },
    knine: {
        id: 'k09',
        L: { childrenID: 's003', isFinish: false, describe: '叶互生或基生；直立草本，稀半灌木；瘦果成熟时不具伸长的羽毛状花柱', images: [require("../public/images/PRetrieval/shu/090000/0900001s1.png"), require("../public/images/PRetrieval/shu/090000/0900001s2.png"), require("../public/images/PRetrieval/shu/090000/0900001s3.png"), require("../public/images/PRetrieval/shu/090000/0900001s4.png")], },
        R: { childrenID: 's004', isFinish: false, describe: '叶对生；攀援藤本或草本，稀小灌木；瘦果成熟时具伸长的羽毛状花柱', images: [require("../public/images/PRetrieval/shu/090000/0900001x1.png"), require("../public/images/PRetrieval/shu/090000/0900001x2.png"), require("../public/images/PRetrieval/shu/090000/0900001x3.png"), require("../public/images/PRetrieval/shu/090000/0900001x4.png")], },
    },
    six: {
        id: '006',
        L: { childrenID: 'k30', isFinish: false, describe: '雄花成头状花序，雌花2个同生于具钩刺的总苞中', images: [require("../public/images/PRetrieval/ke/601.jpg")], },
        R: { childrenID: '007', isFinish: false, describe: '雌雄花非上述情况', images: [require("../public/images/PRetrieval/ke/611.png"), require("../public/images/PRetrieval/ke/612.png"), require("../public/images/PRetrieval/ke/613.png")], },
    },
    ktirty: {
        id: 'k30',
        L: { childrenID: 'k302', isFinish: false, describe: '头状花序仅具管状花或兼有舌状花；植物体无乳汁', images: [require("../public/images/PRetrieval/shu/300000/1s1.png")], },
        R: { childrenID: 'k3016', isFinish: false, describe: '头状花序全为舌状花', images: [require("../public/images/PRetrieval/shu/300000/1x1.png")], },
    },
    ktirty2: {
        id: 'k302',
        L: { childrenID: 'k303', isFinish: false, describe: '头状花序仅具管状花，管状花有时二唇形', images: [require("../public/images/PRetrieval/shu/300000/2s1.png")], },
        R: { childrenID: 'k3013', isFinish: false, describe: '头状花序有管状花和舌状花', images: [require("../public/images/PRetrieval/shu/300000/2x1.png")], },
    },
    ktirty3: {
        id: 'k303',
        L: { childrenID: 's005', isFinish: false, describe: '叶对生,冠毛2—4，刺芒状', images: [require("../public/images/PRetrieval/shu/300000/3s1.png"), require("../public/images/PRetrieval/shu/300000/3s2.png"), require("../public/images/PRetrieval/shu/300000/3s3.png")], },
        R: { childrenID: 'k304', isFinish: false, describe: '叶互生或基生', images: [require("../public/images/PRetrieval/shu/300000/3x1.png"), require("../public/images/PRetrieval/shu/300000/3x2.png")], },
    },
    ktirty4: {
        id: 'k304',
        L: { childrenID: 's006', isFinish: false, describe: '头状花序含l小花，再聚集成球形复头状花序', images: [require("../public/images/PRetrieval/shu/300000/4s1.png"), require("../public/images/PRetrieval/shu/300000/4s2.png")], },
        R: { childrenID: 'k305', isFinish: false, describe: '不为复头状花序', images: [require("../public/images/PRetrieval/shu/300000/4x1.png")], },
    },
    ktirty5: {
        id: 'k305',
        L: { childrenID: 'k306', isFinish: false, describe: '总苞具刺；叶缘无刺或有刺', images: [require("../public/images/PRetrieval/shu/300000/5s1.png")], },
        R: { childrenID: 'k309', isFinish: false, describe: '总苞无刺；叶缘无刺', images: [require("../public/images/PRetrieval/shu/300000/5x1.png"), require("../public/images/PRetrieval/shu/300000/5x2.png")], },
    },
    ktirty6: {
        id: 'k306',
        L: { childrenID: 'k307', isFinish: false, describe: '叶缘无刺；总苞具刺或倒钩刺', images: [require("../public/images/PRetrieval/shu/300000/6s1.png")], },
        R: { childrenID: 'k308', isFinish: false, describe: '叶缘和总苞均具刺', images: [require("../public/images/PRetrieval/shu/300000/6x1.png"), require("../public/images/PRetrieval/shu/300000/6x2.png")], },
    },
    ktirty7: {
        id: 'k307',
        L: { childrenID: 's007', isFinish: false, describe: '雌头状花序含2花，总苞完全愈合，具倒钩刺；瘦果无冠毛', images: [require("../public/images/PRetrieval/shu/300000/7s1.png"), require("../public/images/PRetrieval/shu/300000/7s2.png")], },
        R: { childrenID: 's008', isFinish: false, describe: '头状花序含多花，总苞片不愈合，条形或披针形，先端具倒钩刺；瘦果具冠毛', images: [require("../public/images/PRetrieval/shu/300000/7x1.png")], },
    },
    ktirty8: {
        id: 'k308',
        L: { childrenID: 's009', isFinish: false, describe: '叶片沿茎下延成宽或窄翅', images: [require("../public/images/PRetrieval/shu/300000/8s1.png")], },
        R: { childrenID: 's010', isFinish: false, describe: '叶片不沿茎下延成翅', images: [require("../public/images/PRetrieval/shu/300000/8x1.png")], },
    },
    ktirty9: {
        id: 'k309',
        L: { childrenID: 'k3010', isFinish: false, describe: '总苞片草质或革质，不为干膜质', images: [require("../public/images/PRetrieval/shu/300000/9s1.png")], },
        R: { childrenID: 'k3011', isFinish: false, describe: '总苞片干膜质或边缘膜质', images: [require("../public/images/PRetrieval/shu/300000/9x1.png")], },
    },
    ktirty10: {
        id: 'k3010',
        L: { childrenID: 's011', isFinish: false, describe: '冠毛多层', images: [require("../public/images/PRetrieval/shu/300000/10s1.png")], },
        R: { childrenID: 's012', isFinish: false, describe: '冠毛1-2层，外层糙毛状，内层羽状', images: [require("../public/images/PRetrieval/shu/300000/10x1.png")], },
    },
    ktirty11: {
        id: 'k3011',
        L: { childrenID: 's013', isFinish: false, describe: '瘦果有冠毛', images: [require("../public/images/PRetrieval/shu/300000/11s1.png")], },
        R: { childrenID: 'k3012', isFinish: false, describe: '瘦果无冠毛或有冠状冠毛', images: [require("../public/images/PRetrieval/shu/300000/11x1.png")], },
    },
    ktirty12: {
        id: 'k3012',
        L: { childrenID: 's014', isFinish: false, describe: '头状花序在茎枝顶端排列成伞房状,全部小花结实；瘦果顶端平', images: [require("../public/images/PRetrieval/shu/300000/12s1.png")], },
        R: { childrenID: 's015', isFinish: false, describe: '头状花序在茎上排列成穗状、总状或圆锥状,边花雌性，结实，中央花两性，结实或不结实；瘦果满布于花序托之上', images: [require("../public/images/PRetrieval/shu/300000/12x1.png"), require("../public/images/PRetrieval/shu/300000/12x2.png")], },
    },
    ktirty12: {
        id: 'k3013',
        L: { childrenID: 'k3014', isFinish: false, describe: '舌状花舌片通常较管部为长，显著', images: [require("../public/images/PRetrieval/shu/300000/13s1.png")], },
        R: { childrenID: 'k3015', isFinish: false, describe: '舌状花舌片甚短小', images: [require("../public/images/PRetrieval/shu/300000/13x1.jpg")], },
    },
    ktirty14: {
        id: 'k3014',
        L: { childrenID: 's016', isFinish: false, describe: '舌状花和管状花全为黄色,草本', images: [require("../public/images/PRetrieval/shu/300000/14s1.png")], },
        R: { childrenID: 's017', isFinish: false, describe: '舌状花与管状花不同色，或两者同色，橙黄色或橙红色,半灌木', images: [require("../public/images/PRetrieval/shu/300000/14x1.png")], },
    },
    ktirty15: {
        id: 'k3015',
        L: { childrenID: 's018', isFinish: false, describe: '叶对生，冠毛2—4，刺芒状,野生', images: [require("../public/images/PRetrieval/shu/300000/15s1.png")], },
        R: { childrenID: 's019', isFinish: false, describe: '冠毛不为刺芒状或缺,高大草本；栽培', images: [require("../public/images/PRetrieval/shu/300000/15x1.png")], },
    },
    ktirty16: {
        id: 'k3016',
        L: { childrenID: 's020', isFinish: false, describe: '冠毛羽毛状,花序托无托叶；叶常为禾叶状', images: [require("../public/images/PRetrieval/shu/300000/16s1.png"), require("../public/images/PRetrieval/shu/300000/16s2.png")], },
        R: { childrenID: 'k317', isFinish: false, describe: '冠毛单毛状', images: [require("../public/images/PRetrieval/shu/300000/16x1.jpg")], },
    },
    ktirty17: {
        id: 'k3017',
        L: { childrenID: 's021', isFinish: false, describe: '叶基生；头状花序单生于花葶上；瘦果具长喙', images: [require("../public/images/PRetrieval/shu/300000/17s1.png"), require("../public/images/PRetrieval/shu/300000/17s2.png"), require("../public/images/PRetrieval/shu/300000/17s3.png")], },
        R: { childrenID: 'k3018', isFinish: false, describe: '叶茎生，有或无基生叶；头状花序不为单生；瘦果无喙或有喙', images: [require("../public/images/PRetrieval/shu/300000/17x1.png")], },
    },
    ktirty18: {
        id: 'k3018',
        L: { childrenID: 's022', isFinish: false, describe: '冠毛由极细的柔毛，并杂以较粗的直毛所组成；头状花序具极多(一般超过80朵)的小花', images: [require("../public/images/PRetrieval/shu/300000/18s1.png"), require("../public/images/PRetrieval/shu/300000/18s2.png")], },
        R: { childrenID: 's023', isFinish: false, describe: '冠毛由较粗的直毛或粗毛所组成；头状花序具较少的小花', images: [require("../public/images/PRetrieval/shu/300000/18x1.png")], },
    },
    seven: {
        id: '007',
        L: { childrenID: 'k09', isFinish: false, describe: '心皮2至多数，离生；果为聚合瘦果', images: [require("../public/images/PRetrieval/ke/701.png"), require("../public/images/PRetrieval/ke/702.png")], },
        R: { childrenID: '008', isFinish: false, describe: '心皮单一或数个合生', images: [require("../public/images/PRetrieval/ke/711.png"), require("../public/images/PRetrieval/ke/712.png"), require("../public/images/PRetrieval/ke/713.png")], },
    },
    eight: {
        id: '008',
        L: {childrenID: 'k19',isFinish: false,describe: '子房下位或半下位，灌木或乔木，叶互生，被银色鳞片',images: [require("../public/images/PRetrieval/ke/111.png"), require("../public/images/PRetrieval/ke/801.png"), require("../public/images/PRetrieval/ke/802.png"), require("../public/images/PRetrieval/ke/803.png")],},
        R: { childrenID: '009', isFinish: false, describe: '子房上位', images: [require("../public/images/PRetrieval/ke/811.png"), require("../public/images/PRetrieval/ke/812.png"), require("../public/images/PRetrieval/ke/813.png")], },
    },
    kninteen: {
        id: 'k19',
        L: { childrenID: 's024', isFinish: false, describe: '花单性，多雌雄异株，短总状总序，萼2裂', images: [require("../public/images/PRetrieval/shu/190000/1s1.png"), require("../public/images/PRetrieval/shu/190000/1s2.png")], },
        R: { childrenID: 's025', isFinish: false, describe: '花两性或杂性，单生或2-4簇生，萼常4裂', images: [require("../public/images/PRetrieval/shu/190000/1x1.png"), require("../public/images/PRetrieval/shu/190000/1x2.png")], },
    },
    nine: {
        id: '009',
        L: { childrenID: 'k04', isFinish: false, describe: '具托叶鞘', images: [require("../public/images/PRetrieval/ke/901.png"), require("../public/images/PRetrieval/ke/902.png"), require("../public/images/PRetrieval/ke/903.png")], },
        R: { childrenID: '010', isFinish: false, describe: '无托叶鞘', images: [require("../public/images/PRetrieval/ke/911.png"), require("../public/images/PRetrieval/ke/812.png"), require("../public/images/PRetrieval/ke/913.png"), require("../public/images/PRetrieval/ke/914.png")], },
    },
    kfour: {
        id: 'k04',
        L: { childrenID: 'k042', isFinish: false, describe: '灌木', images: [require("../public/images/PRetrieval/shu/040000/0400001s1.png")], },
        R: { childrenID: 's026', isFinish: false, describe: '常草本', images: [], },
    },
    kfourone: {
        id: 'k042',
        L: { childrenID: 's027', isFinish: false, describe: '叶鳞片状；瘦果具4条肋状突起，通常有刺毛', images: [require("../public/images/PRetrieval/shu/040000/0400002s 2.png"), require("../public/images/PRetrieval/shu/040000/0400002s1.jpg")], },
        R: { childrenID: 's028', isFinish: false, describe: '叶非鳞片状；瘦果不具肋状突起。无刺毛', images: [require("../public/images/PRetrieval/shu/040000/0400002x1.png"), require("../public/images/PRetrieval/shu/040000/0400002x2.png")], },
    },
    ten: {
        id: '010',
        L: { childrenID: '011', isFinish: false, describe: '草本', images: [require("../public/images/PRetrieval/ke/1001.png"), require("../public/images/PRetrieval/ke/1002.png")], },
        R: { childrenID: '017', isFinish: false, describe: '木本', images: [require("../public/images/PRetrieval/ke/1011.png"), require("../public/images/PRetrieval/ke/1012.png")], },
    },
    eleven: {
        id: '011',
        L: { childrenID: '140000', isFinish: true, describe: '无花萼。植株具乳汁；杯状聚伞花序', images: [require("../public/images/PRetrieval/ke/1101.png")], },
        R: { childrenID: '012', isFinish: false, describe: '有花萼', images: [require("../public/images/PRetrieval/ke/1111.png"), require("../public/images/PRetrieval/ke/1112.png")], },
    },
    twelve: {
        id: '012',
        L: { childrenID: '013', isFinish: false, describe: '花萼呈花瓣状', images: [require("../public/images/PRetrieval/ke/1201.jpg")], },
        R: { childrenID: '015', isFinish: false, describe: '花萼不呈花瓣状', images: [], },
    },
    thirteen: {
        id: '013',
        L: { childrenID: '014', isFinish: false, describe: '雄蕊与花萼裂片同数，二者不合生', images: [require("../public/images/PRetrieval/ke/1301.jpg")], },
        R: { childrenID: '340000', isFinish: true, describe: '雄蕊为萼裂片的2倍或同数，但二者合生', images: [], },
    },
    fourteen: {
        id: '014',
        L: { childrenID: 'k11', isFinish: false, describe: '花排成头状或密穗状；羽状复叶', images: [require("../public/images/PRetrieval/ke/1401.png"), require("../public/images/PRetrieval/ke/1402.png")], },
        R: { childrenID: '210000', isFinish: true, describe: '花单生叶腋；单叶', images: [require("../public/images/PRetrieval/ke/1411.png")], },
    },
    kevevl: {
        id: 'k11',
        L: { childrenID: 's029', isFinish: false, describe: '子房下位，稀半下位，心皮2—5；梨果。果肉内常有石细胞', images: [require("../public/images/PRetrieval/shu/110000/1x1.jpg")], },
        R: { childrenID: 's030', isFinish: false, describe: '子房上位。心皮1，核果', images: [require("../public/images/PRetrieval/shu/110000/1x2.jpg")], },
    },
    fifteen: {
        id: '015',
        L: { childrenID: '016', isFinish: false, describe: '花柱2或更多', images: [require("../public/images/PRetrieval/ke/1501.png")], },
        R: { childrenID: 'k10', isFinish: false, describe: '花柱单一。花两性；雄蕊2；短角果', images: [require("../public/images/PRetrieval/ke/1511.png"), require("../public/images/PRetrieval/ke/1512.png")], },
    },
    kten: {
        id: 'k10',
        L: { childrenID: 'k102', isFinish: false, describe: '短角果', images: [require("../public/images/PRetrieval/shu/100000/1000001s1.png")], },
        R: { childrenID: 'k103', isFinish: false, describe: '长角果', images: [require("../public/images/PRetrieval/shu/100000/1000001x1.png")], },
    },
    kten2: {
        id: 'k102',
        L: { childrenID: 's049', isFinish: false, describe: '短角果成熟时不开裂，短角果两侧有坚硬的长翅', images: [require("../public/images/PRetrieval/shu/100000/1000002s1.png")], },
        R: { childrenID: 's050', isFinish: false, describe: '短角果成熟时开裂，果顶端稍具翅', images: [require("../public/images/PRetrieval/shu/100000/1000002x1.png"), require("../public/images/PRetrieval/shu/100000/1000002x2.png")], },
    },
    kten3: {
        id: 'k103',
        L: { childrenID: 's051', isFinish: false, describe: '花黄色，茎生叶基部不抱茎', images: [require("../public/images/PRetrieval/shu/100000/1000003s1.png"), require("../public/images/PRetrieval/shu/100000/1000003s2.png")], },
        R: { childrenID: 's052', isFinish: false, describe: '花紫色、淡红色或白色', images: [require("../public/images/PRetrieval/shu/100000/1000003x1.png")], },
    },
    sixteen: {
        id: '016',
        L: { childrenID: '060000', isFinish: true, describe: '花有干膜质苞片', images: [require("../public/images/PRetrieval/ke/1601.png")], },
        R: { childrenID: 'k05', isFinish: false, describe: '花无干膜质苞片', images: [], },
    },
    kfive: {
        id: 'k05',
        L: { childrenID: 'k052', isFinish: false, describe: '半灌木、灌木，稀为小乔木', images: [require("../public/images/PRetrieval/shu/050000/1s.png"), require("../public/images/PRetrieval/shu/050000/1s1.png")], },
        R: { childrenID: 'k059', isFinish: false, describe: '—年生或多年生草本', images: [], },
    },
    kfive2: {
        id: 'k052',
        L: { childrenID: 's031', isFinish: false, describe: '枝及叶对生，枝有关节，小半乔木；叶鳞片状', images: [require("../public/images/PRetrieval/shu/050000/2s1.png"),require("../public/images/PRetrieval/shu/050000/2s2.png")], },
        R: { childrenID: 'k053', isFinish: false, describe: '枝及叶互生，枝无关节', images: [require("../public/images/PRetrieval/shu/050000/2x1.jpg")], },
    },
    kfive3: {
        id: 'k053',
        L: { childrenID: 'k054', isFinish: false, describe: '植物体有毛', images: [require("../public/images/PRetrieval/shu/050000/3s1.png")], },
        R: { childrenID: 'k055', isFinish: false, describe: '植物体无毛', images: [require("../public/images/PRetrieval/shu/050000/3x1.png")], },
    },
    kfive4: {
        id: 'k054',
        L: { childrenID: 's032', isFinish: false, describe: '花有小苞片，围抱花被；花被圆锥形，膜质', images: [require("../public/images/PRetrieval/shu/050000/4s1.jpg"),require("../public/images/PRetrieval/shu/050000/4s2.png")], },
        R: { childrenID: 's033', isFinish: false, describe: '花无小苞片；花被近球形，草质', images: [require("../public/images/PRetrieval/shu/050000/4x1.png")], },
    },
    kfive5: {
        id: 'k055',
        L: { childrenID: 'k056', isFinish: false, describe: '花被片背面果时具翅状附属物，幼花可见增厚的分生组织', images: [require("../public/images/PRetrieval/shu/050000/5s1.png")], },
        R: { childrenID: 'k057', isFinish: false, describe: '花被片背面果时无附属物，幼花也无增厚的分生组织', images: [require("../public/images/PRetrieval/shu/050000/5x1.png")], },
    },
    kfive6: {
        id: 'k056',
        L: { childrenID: 's034', isFinish: false, describe: '花通常3朵集生于仅具1节间的短枝顶端', images: [require("../public/images/PRetrieval/shu/050000/6s1.png"), require("../public/images/PRetrieval/shu/050000/6s2.png")], },
        R: { childrenID: 's035', isFinish: false, describe: '花序穗状，圆锥状或单花腋生', images: [require("../public/images/PRetrieval/shu/050000/6x1.png")], },
    },
    kfive7: {
        id: 'k057',
        L: { childrenID: 's036', isFinish: false, describe: '穗状花序，花嵌入肉质花序轴内；叶显著下延', images: [require("../public/images/PRetrieval/shu/050000/7s1.png")], },
        R: { childrenID: 'k058', isFinish: false, describe: '团伞花序，花不嵌入花序轴内，叶不下延', images: [require("../public/images/PRetrieval/shu/050000/7x1.png"), require("../public/images/PRetrieval/shu/050000/7x2.png")], },
    },
    kfive8: {
        id: 'k058',
        L: { childrenID: 's037', isFinish: false, describe: '叶为平面叶；花单性', images: [require("../public/images/PRetrieval/shu/050000/8s1.png")], },
        R: { childrenID: 's038', isFinish: false, describe: '叶圆柱状或半圆柱状；花两性', images: [require("../public/images/PRetrieval/shu/050000/8x1.png")], },
    },
    kfive9: {
        id: 'k059',
        L: { childrenID: 'k0510', isFinish: false, describe: '叶为平面叶', images: [require("../public/images/PRetrieval/shu/050000/9s1.png")], },
        R: { childrenID: 'k0514', isFinish: false, describe: '叶圆柱状、半圆柱状。或为钻状、鳞片状', images: [require("../public/images/PRetrieval/shu/050000/9x1.png")], },
    },
    kfive10: {
        id: 'k0510',
        L: { childrenID: 'k0511', isFinish: false, describe: '植物体多少有毛', images: [require("../public/images/PRetrieval/shu/050000/10s1.png")], },
        R: { childrenID: 's039', isFinish: false, describe: '植物体无毛', images: [require("../public/images/PRetrieval/shu/050000/10x1.png")], },
    },
    kfive11: {
        id: 'k0511',
        L: { childrenID: 'k0512', isFinish: false, describe: '植株被星状毛或分枝毛：种子直立', images: [require("../public/images/PRetrieval/shu/050000/11s1.png")], },
        R: { childrenID: 'k0513', isFinish: false, describe: '植株被单毛；种子横生。稀直立或斜生', images: [require("../public/images/PRetrieval/shu/050000/11x1.png")], },
    },
    kfive12: {
        id: 'k0512',
        L: { childrenID: 's040', isFinish: false, describe: '叶和苞片先端针刺状；种子与果皮分离', images: [require("../public/images/PRetrieval/shu/050000/12s1.png")], },
        R: { childrenID: 's041', isFinish: false, describe: '叶和苞片先端锐尖；种子与果皮贴生', images: [require("../public/images/PRetrieval/shu/050000/12x1.png")], },
    },
    kfive13: {
        id: 'k0513',
        L: { childrenID: 's042', isFinish: false, describe: '花被附属物针刺状，无脉', images: [require("../public/images/PRetrieval/shu/050000/13s1.png")], },
        R: { childrenID: 's043', isFinish: false, describe: '花被附属物翅状，有脉', images: [require("../public/images/PRetrieval/shu/050000/13x1.png")], },
    },
    kfive14: {
        id: 'k0514',
        L: { childrenID: 's044', isFinish: false, describe: '花嵌入肉质的花序轴内', images: [], },
        R: { childrenID: 'k0515', isFinish: false, describe: '花不嵌入花序轴内', images: [], },
    },
    kfive15: {
        id: 'k0515',
        L: { childrenID: 'k0516', isFinish: false, describe: '花被片背面果时具发达的翅状或刺状附属物', images: [], },
        R: { childrenID: 's045', isFinish: false, describe: '花被片背面不具附属物，果时本身增厚或延伸而形成翅状或角状突出物', images: [], },
    },
    kfive16: {
        id: 'k0516',
        L: { childrenID: 's046', isFinish: false, describe: '附属物刺状，无脉纹', images: [], },
        R: { childrenID: 'k0517', isFinish: false, describe: '附属物翅状，有脉纹', images: [], },
    },
    kfive17: {
        id: 'k0517',
        L: { childrenID: 's047', isFinish: false, describe: '花无小苞片；花被近球形', images: [], },
        R: { childrenID: 's048', isFinish: false, describe: '花有小苞片；花被圆锥形', images: [], },
    },
    seventeen: {
        id: '017',
        L: { childrenID: '230000', isFinish: true, describe: '雄蕊2；翅果；叶对生', images: [require("../public/images/PRetrieval/ke/1711.png")], },
        R: { childrenID: '030000', isFinish: true, describe: '雄蕊4-8；翅果或核果；叶互生', images: [require("../public/images/PRetrieval/ke/1711.png"), require("../public/images/PRetrieval/ke/1712.png"), require("../public/images/PRetrieval/ke/1713.png"), require("../public/images/PRetrieval/ke/1714.png")], },
    },
    eigteen: {
        id: '018',
        L: { childrenID: '019', isFinish: false, describe: '花瓣分离', images: [require("../public/images/PRetrieval/ke/1801.jpg")], },
        R: { childrenID: '035', isFinish: false, describe: '花瓣合生或基部多少合生', images: [require("../public/images/PRetrieval/ke/1811.jpg")], },
    },
    ninteen: {
        id: '019',
        L: { childrenID: '020', isFinish: false, describe: '雄蕊多数，10个以上，超过花瓣的2倍', images: [require("../public/images/PRetrieval/ke/1901.jpg")], },
        R: { childrenID: '028', isFinish: false, describe: '雄蕊10或更少，如多于10时，则不超过花瓣的2倍。', images: [require("../public/images/PRetrieval/ke/1911.png")], },
    },
    twelve: {
        id: '020',
        L: { childrenID: '021', isFinish: false, describe: '子房下位或半下位。', images: [require("../public/images/PRetrieval/ke/2001.jpg")], },
        R: { childrenID: '022', isFinish: false, describe: '子房上位。', images: [require("../public/images/PRetrieval/ke/2011.jpg")], },
    },
    twelveone: {
        id: '021',
        L: { childrenID: '070000', isFinish: true, describe: '肉质草本；花萼裂片2；蒴果盖裂', images: [require("../public/images/PRetrieval/ke/2101.jpg")], },
        R: { childrenID: 'k11', isFinish: false, describe: '木本', images: [require("../public/images/PRetrieval/ke/2111.jpg")], },
    },
    twelvetwo: {
        id: '022',
        L: { childrenID: 'k11', isFinish: false, describe: '周位花，萼片4-5，花瓣4-5，雄蕊多数', images: [require("../public/images/PRetrieval/ke/2201.jpg")], },
        R: { childrenID: '023', isFinish: false, describe: '下位花', images: [require("../public/images/PRetrieval/ke/2111.jpg")], },
    },
    twelvethree: {
        id: '023',
        L: { childrenID: '024', isFinish: false, describe: '离生心皮', images: [require("../public/images/PRetrieval/ke/2301.jpg")], },
        R: { childrenID: '026', isFinish: false, describe: '合心生皮', images: [], },
    },
    twelvefour: {
        id: '024',
        L: { childrenID: 'k09', isFinish: false, describe: '叶对生', images: [require("../public/images/PRetrieval/ke/2401.jpg")], },
        R: { childrenID: '025', isFinish: false, describe: '叶互生', images: [require("../public/images/PRetrieval/ke/2411.jpg")], },
    },
    twelvefive: {
        id: '025',
        L: { childrenID: 'k09', isFinish: false, describe: '无托叶；雄蕊螺状排列于花托上', images: [require("../public/images/PRetrieval/ke/2501.jpg")], },
        R: { childrenID: 'k11', isFinish: false, describe: '常有托叶；雄蕊轮状排列于花托的边缘', images: [require("../public/images/PRetrieval/ke/2511.jpg")], },
    },
    twelvesix: {
        id: '026',
        L: { childrenID: '170000', isFinish: true, describe: '单体雄蕊，花药l室', images: [require("../public/images/PRetrieval/ke/2601.jpg")], },
        R: { childrenID: '027', isFinish: false, describe: '非上述情况', images: [require("../public/images/PRetrieval/ke/2611.jpg")], },
    },
    twelveseven: {
        id: '027',
        L: { childrenID: '140000', isFinish: true, describe: '单性花', images: [require("../public/images/PRetrieval/ke/2701.jpg"),require("../public/images/PRetrieval/ke/2702.jpg")], },
        R: { childrenID: 'k13', isFinish: false, describe: '两性花', images: [], },
    },
    kthirty: {
        id: 'k13',
        L: { childrenID: 's053', isFinish: false, describe: '果为单种子的浆果状核果', images: [require("../public/images/PRetrieval/shu/130000/1s1.png")], },
        R: { childrenID: 'k132', isFinish: false, describe: '果为蒴果或分果', images: [require("../public/images/PRetrieval/shu/130000/1x1.png"),require("../public/images/PRetrieval/shu/130000/1x2.png")], },
    },
    kthirty2: {
        id: 'k132',
        L: { childrenID: 'k133', isFinish: false, describe: '蒴果', images: [require("../public/images/PRetrieval/shu/130000/2s1.png")], },
        R: { childrenID: 'k134', isFinish: false, describe: '分果', images: [require("../public/images/PRetrieval/shu/130000/2x1.png")], },
    },
    kthirty3: {
        id: 'k133',
        L: { childrenID: 's054', isFinish: false, describe: '单叶条裂；蒴果球形，3室，3瓣裂', images: [require("../public/images/PRetrieval/shu/130000/3s1.png")], },
        R: { childrenID: 's055', isFinish: false, describe: '复叶，小叶l-5对，蒴果具3-5棱或翅', images: [require("../public/images/PRetrieval/shu/130000/3x2.png")], },
    },
    kthirty4: {
        id: 'k134',
        L: { childrenID: 's056', isFinish: false, describe: '分果有5瓣，果瓣具刺针；小叶多对，草本', images: [require("../public/images/PRetrieval/shu/130000/4s1.png"), require("../public/images/PRetrieval/shu/130000/4s2.png")], },
        R: { childrenID: 's057', isFinish: false, describe: '分果4瓣，果瓣无刺针；小叶2枚，灌木', images: [require("../public/images/PRetrieval/shu/130000/4x1.png"),require("../public/images/PRetrieval/shu/130000/4x2.jpg")], },
    },
    twelveeigth: {
        id: '028',
        L: { childrenID: '200000', isFinish: true, describe: '子房下位；伞形花序或复伞形花序，双悬果', images: [require("../public/images/PRetrieval/ke/2801.jpg")], },
        R: { childrenID: '029', isFinish: false, describe: '子房上位', images: [require("../public/images/PRetrieval/ke/2811.jpg")], },
    },
    twelvenine: {
        id: '029',
        L: { childrenID: '030', isFinish: false, describe: '心皮2至数个合生', images: [require("../public/images/PRetrieval/ke/2901.png")], },
        R: { childrenID: 'k12', isFinish: false, describe: '心皮l，子房l室；荚果；蝶形花冠', images: [require("../public/images/PRetrieval/ke/2911.jpg")], },
    },
    ktwelve: {
        id: 'k12',
        L: { childrenID: 'k122', isFinish: false, describe: '雄蕊10，分离或仅基部合生', images: [require("../public/images/PRetrieval/shu/120000/1s1.jpg")], },
        R: { childrenID: 'k123', isFinish: false, describe: '雄蕊10，连合为两体或单体', images: [require("../public/images/PRetrieval/shu/120000/1x1.jpg")], },
    },
    ktwelve2: {
        id: 'k122',
        L: { childrenID: 's058', isFinish: false, describe: '落叶乔木或草本；叶为羽状复叶', images: [require("../public/images/PRetrieval/shu/120000/2s1.jpg")], },
        R: { childrenID: 's059', isFinish: false, describe: '常绿灌木，叶通常为3小叶所成的掌状复叶', images: [require("../public/images/PRetrieval/shu/120000/2x1.png")], },
    },
    ktwelve3: {
        id: 'k123',
        L: { childrenID: 's060', isFinish: false, describe: '荚果含种子2粒以上时，则于种子间横裂或紧缩成节，每荚节含1粒种子而不裂开，有时退化而仅具1节1粒种子', images: [require("../public/images/PRetrieval/shu/120000/3s1.jpg"),require("../public/images/PRetrieval/shu/120000/3s2.jpg")], },
        R: { childrenID: 'k134', isFinish: false, describe: '荚果如含种子2粒以上时，不在种子间裂为荚节，通常为2瓣裂或不开裂。', images: [require("../public/images/PRetrieval/shu/120000/3x1.jpg")], },
    },
    ktwelve4: {
        id: 'k124',
        L: { childrenID: 'k125', isFinish: false, describe: '叶为三出复叶', images: [require("../public/images/PRetrieval/shu/120000/4s1.png")], },
        R: { childrenID: 'k126', isFinish: false, describe: '叶为4至多数小叶所组成的复叶', images: [require("../public/images/PRetrieval/shu/120000/4x1.png")], },
    },
    ktwelve5: {
        id: 'k125',
        L: { childrenID: 's061', isFinish: false, describe: '荚果多马蹄铁形、环形或螺旋形；花序总状或近平头状', images: [require("../public/images/PRetrieval/shu/120000/5s1.jpg"),require("../public/images/PRetrieval/shu/120000/5s2.jpg")], },
        R: { childrenID: 's062', isFinish: false, describe: '荚果直，有时稍弯，总状花序细长而花稍稀疏', images: [require("../public/images/PRetrieval/shu/120000/5x1.png"), require("../public/images/PRetrieval/shu/120000/5x2.png")], },
    },
    ktwelve6: {
        id: 'k126',
        L: { childrenID: 's063', isFinish: false, describe: '叶常具腺点；花仅有1旗瓣，荚果通常含1粒种子', images: [require("../public/images/PRetrieval/shu/120000/6s1.png"),require("../public/images/PRetrieval/shu/120000/6x2.png")], },
        R: { childrenID: 'k127', isFinish: false, describe: '叶不具腺点，花为具5花瓣的蝶形花冠，荚果大都含种子2粒乃至多数。', images: [require("../public/images/PRetrieval/shu/120000/6x1.png"), require("../public/images/PRetrieval/shu/120000/6x2.png")], },
    },
    ktwelve7: {
        id: 'k127',
        L: { childrenID: 's064', isFinish: false, describe: '乔木，荚果薄而扁平', images: [require("../public/images/PRetrieval/shu/120000/7s1.png"),require("../public/images/PRetrieval/shu/120000/7s2.png")], },
        R: { childrenID: 'k128', isFinish: false, describe: '灌木或草本，荚果膨胀或扁平', images: [require("../public/images/PRetrieval/shu/120000/7x1.png"), require("../public/images/PRetrieval/shu/120000/7x2.png")], },
    },
    ktwelve8: {
        id: 'k128',
        L: { childrenID: 's065', isFinish: false, describe: '旗瓣较宽而开展，常向后翻，花柱的后方具纵列的须毛', images: [require("../public/images/PRetrieval/shu/120000/8s1.png")], },
        R: { childrenID: 'k129', isFinish: false, describe: '旗瓣较狭窄，直立或开展，花柱通常光滑无毛。', images: [require("../public/images/PRetrieval/shu/120000/8x1.png")], },
    },
    ktwelve9: {
        id: 'k129',
        L: { childrenID: 's053', isFinish: false, describe: '灌木；叶为双数羽状复叶，有时小叶密集成假掌状复叶', images: [require("../public/images/PRetrieval/shu/120000/9s1.png"),require("../public/images/PRetrieval/shu/120000/9s2.png")], },
        R: { childrenID: 'k1210', isFinish: false, describe: '草本或半灌木；叶常为单数羽状复叶', images: [require("../public/images/PRetrieval/shu/120000/9x1.png"), require("../public/images/PRetrieval/shu/120000/9x2.png")], },
    },
    ktwelve10: {
        id: 'k1210',
        L: { childrenID: 's053', isFinish: false, describe: '荚果具刺或具瘤状突起或光滑', images: [require("../public/images/PRetrieval/shu/120000/10s1.png")], },
        R: { childrenID: 'k1211', isFinish: false, describe: '荚果通常无刺或瘤状突起', images: [require("../public/images/PRetrieval/shu/120000/10x1.png")], },
    },
    ktwelve11: {
        id: 'k1211',
        L: { childrenID: 's053', isFinish: false, describe: '龙骨瓣先端具喙', images: [require("../public/images/PRetrieval/shu/120000/11s1.png")], },
        R: { childrenID: 's053', isFinish: false, describe: '龙骨瓣先端不具喙', images: [], },
    },
    thirty: {
        id: '030',
        L: { childrenID: 'k10', isFinish: false, describe: '花冠十字形；四强雄蕊；角果', images: [require("../public/images/PRetrieval/ke/3001.jpg")], },
        R: { childrenID: '031', isFinish: false, describe: '不为上述情况', images: [require("../public/images/PRetrieval/ke/3011.jpg")], },
    },
    thirtyone: {
        id: '031',
        L: { childrenID: '032', isFinish: false, describe: '子房1室', images: [require("../public/images/PRetrieval/ke/3101.png")], },
        R: { childrenID: '033', isFinish: false, describe: '子房2室', images: [require("../public/images/PRetrieval/ke/3111.jpg")], },
    },
    thirtytwo: {
        id: '032',
        L: { childrenID: '080000', isFinish: true, describe: '特立中央胎座或基生胎座', images: [require("../public/images/PRetrieval/ke/3201.jpg")], },
        R: { childrenID: 'k18', isFinish: false, describe: '侧膜胎座', images: [require("../public/images/PRetrieval/ke/3211.jpg")], },
    },
    keighteen: {
        id: 'k18',
        L: { childrenID: 's058', isFinish: false, describe: '花单生，花瓣内有鳞片状附属物；种子外部全体被毛', images: [require("../public/images/PRetrieval/shu/130000/4s1.png"), require("../public/images/PRetrieval/shu/130000/4s2.png")], },
        R: { childrenID: 's059', isFinish: false, describe: '总状花序或再组成圆锥花序，花瓣内无鳞片状附属物，种子仅顶端被毛', images: [require("../public/images/PRetrieval/shu/130000/4x1.png"), require("../public/images/PRetrieval/shu/130000/4x2.jpg")], },
    },
    thirtythree: {
        id: '033',
        L: { childrenID: '160000', isFinish: true, describe: '雄蕊与花瓣不等数，亦非其2倍，通常8个雄蕊', images: [require("../public/images/PRetrieval/ke/3301.jpg")], },
        R: { childrenID: '034', isFinish: false, describe: '雄蕊与花瓣同数或为其2倍', images: [require("../public/images/PRetrieval/ke/3311.jpg")], },
    },
    thirtyfour: {
        id: '034',
        L: { childrenID: 'k13', isFinish: false, describe: '草本，双数羽状复叶', images: [require("../public/images/PRetrieval/ke/3401.jpg")], },
        R: { childrenID: '150000', isFinish: true, describe: '单叶，木本；种子有红色假种皮', images: [require("../public/images/PRetrieval/ke/3411.png")], },
    },
    thirtyfive: {
        id: '035',
        L: { childrenID: '210000', isFinish: true, describe: '雄蕊与花冠裂片同数而对生', images: [require("../public/images/PRetrieval/ke/3501.jpg")], },
        R: { childrenID: '036', isFinish: false, describe: '雄蕊与花冠裂片同数而互生，或较花冠裂片少而互生', images: [require("../public/images/PRetrieval/ke/3511.jpg")], },
    },
    thirtysix: {
        id: '036',
        L: { childrenID: 'k30', isFinish: false, describe: '子房下位；头状花序，雄蕊花药合生，花丝分离，为聚药雄蕊', images: [require("../public/images/PRetrieval/ke/3601.jpg")], },
        R: { childrenID: '037', isFinish: false, describe: '子房上位', images: [require("../public/images/PRetrieval/ke/3611.jpg")], },
    },
    thirtyseven: {
        id: '037',
        L: { childrenID: 'k24', isFinish: false, describe: '雌蕊2子房，2花柱顶端合生；雄蕊花粉粒常连合成花粉块', images: [require("../public/images/PRetrieval/ke/3701.jpg")], },
        R: { childrenID: '038', isFinish: false, describe: '非上述情况', images: [require("../public/images/PRetrieval/ke/3711.jpg")], },
    },
    ktwelvefour: {
        id: 'k24',
        L: { childrenID: 's064', isFinish: false, describe: '四合花粉、承载在匙形的载粉器上，载粉器的基部有—粘盘；花丝离生', images: [require("../public/images/PRetrieval/shu/240000/1s1.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '花粉粒联合成花粉块，通过花粉块柄系结于着粉腺上，花丝合生成筒状', images: [require("../public/images/PRetrieval/shu/240000/1x1.png")], },
    },
    thirtyenght: {
        id: '038',
        L: { childrenID: '039', isFinish: false, describe: '子房4深裂：花柱着生在子房基部', images: [require("../public/images/PRetrieval/ke/3801.jpg")], },
        R: { childrenID: '040', isFinish: false, describe: '子房不深裂；花柱自子房顶端伸出', images: [require("../public/images/PRetrieval/ke/3811.jpg")], },
    },
    thirtynine: {
        id: '039',
        L: { childrenID: 'k27', isFinish: false, describe: '叶对生；花冠两侧对称，唇形', images: [require("../public/images/PRetrieval/ke/3901.jpg")], },
        R: { childrenID: 'k25', isFinish: false, describe: '叶互生；花冠辐射对称', images: [require("../public/images/PRetrieval/ke/3911.jpg")], },
    },
    ktwelveseven: {
        id: 'k27',
        L: { childrenID: 's064', isFinish: false, describe: '花萼上裂片背部通常有圆形内凹的鳞片；子房有柄', images: [require("../public/images/PRetrieval/shu/270000（1s1不确定)/1s1.png")], },
        R: { childrenID: 'k272', isFinish: false, describe: '花萼上裂片背部无鳞片；子房通常无柄', images: [require("../public/images/PRetrieval/shu/270000（1s1不确定)/1x1.png")], },
    },
    ktwelveseven2: {
        id: 'k272',
        L: { childrenID: 's064', isFinish: false, describe: '萼齿顶端针状；从轮伞花序基部及叶腋生出针剌。叶缘亦多有', images: [require("../public/images/PRetrieval/shu/270000（1s1不确定)/2s1.png"),require("../public/images/PRetrieval/shu/270000（1s1不确定)/2s2.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '萼齿顶端刺状；植物无刺', images: [require("../public/images/PRetrieval/shu/270000（1s1不确定)/2x1.png"), require("../public/images/PRetrieval/shu/270000（1s1不确定)/2x2.jpg")], },
    },
    ktwelvefive: {
        id: 'k25',
        L: { childrenID: 's064', isFinish: false, describe: '子房不分裂，花柱自子房顶端生出', images: [require("../public/images/PRetrieval/shu/250000/1s1.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '子房4裂，花柱生于子房裂片间的基部', images: [require("../public/images/PRetrieval/shu/250000/1x1.png")], },
    },
    forty: {
        id: '040',
        L: { childrenID: '041', isFinish: false, describe: '花冠辐射对称，不成唇形', images: [require("../public/images/PRetrieval/ke/4001.jpg")], },
        R: { childrenID: 'k29', isFinish: false, describe: '花冠两侧对生，常唇', images: [require("../public/images/PRetrieval/ke/4011.jpg")], },
    },
    ktwelvenine: {
        id: 'k29',
        L: { childrenID: 's064', isFinish: false, describe: '花冠大而呈喇叭状，长超过3厘米，上、下唇近等长；植株被腺毛', images: [require("../public/images/PRetrieval/shu/290000/1s1.png"), require("../public/images/PRetrieval/shu/290000/1s2.png"), require("../public/images/PRetrieval/shu/290000/1s3.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '花冠小而明显呈唇形，长不超过2厘米，上唇短；植珠无腺毛', images: [require("../public/images/PRetrieval/shu/290000/1x1.png"), require("../public/images/PRetrieval/shu/290000/1x2.png"), require("../public/images/PRetrieval/shu/290000/1x3.png")], },
    },
    fortyone: {
        id: '041',
        L: { childrenID: '230000', isFinish: true, describe: '雄蕊2，木本', images: [require("../public/images/PRetrieval/ke/4101.jpg")], },
        R: { childrenID: '042', isFinish: false, describe: '雄蕊4-5', images: [require("../public/images/PRetrieval/ke/4111.jpg")], },
    },
    fortytwo: {
        id: '042',
        L: { childrenID: 'k26', isFinish: false, describe: '无叶寄生草质藤本', images: [require("../public/images/PRetrieval/ke/4201.jpg")], },
        R: { childrenID: '043', isFinish: false, describe: '自生绿色植物', images: [require("../public/images/PRetrieval/ke/4211.jpg")], },
    },
    ktwelvesix: {
        id: 'k26',
        L: { childrenID: 's064', isFinish: false, describe: '植株无叶，茎黄色或橙红色，有吸根，为寄生植物', images: [require("../public/images/PRetrieval/shu/260000/1s1.png"),require("../public/images/PRetrieval/shu/260000/1s2.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '植株有叶，茎绿色，非寄生植物', images: [require("../public/images/PRetrieval/shu/260000/1x1.png"),require("../public/images/PRetrieval/shu/260000/1x2.png")], },
    },
    fortythree: {
        id: '043',
        L: { childrenID: 'k26', isFinish: false, describe: '花冠完整，几无裂片，萼片离生或仅基部合生', images: [require("../public/images/PRetrieval/ke/4301.jpg")], },
        R: { childrenID: '044', isFinish: false, describe: '花冠明显具裂片；萼片合生', images: [require("../public/images/PRetrieval/ke/4311.jpg")], },
    },
    fortyfour: {
        id: '044',
        L: { childrenID: 'k25', isFinish: false, describe: '子房每室1-2胚珠；核果状', images: [require("../public/images/PRetrieval/ke/4401.png")], },
        R: { childrenID: 'k28', isFinish: false, describe: '子房每室多数胚珠；浆果或蒴果', images: [require("../public/images/PRetrieval/ke/4411.jpg")], },
    },
    ktwelveeight: {
        id: 'k28',
        L: { childrenID: 's064', isFinish: false, describe: '多棘刺灌木；浆果', images: [require("../public/images/PRetrieval/shu/280000/1s1.png"), require("../public/images/PRetrieval/shu/280000/1s2.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '草本或半灌木，常无棘刺，蒴果通常具刺，4瓣裂', images: [require("../public/images/PRetrieval/shu/280000/1x1.png"), require("../public/images/PRetrieval/shu/280000/1x2.png")], },
    },
    fortyfive: {
        id: '045',
        L: { childrenID: 'k31', isFinish: false, describe: '无花被；花包藏在颖片(壳状鳞片)中，由l至多花形成小穗；杆中空，圆筒形；茎生叶二行排列；叶鞘常在一侧开裂；颖果', images: [require("../public/images/PRetrieval/ke/4501.jpg")], },
        R: { childrenID: '046', isFinish: false, describe: '花有花被', images: [require("../public/images/PRetrieval/ke/4511.jpg")], },
    },
    kthityone: {
        id: 'k31',
        L: { childrenID: 'k312', isFinish: false, describe: '小穗含有多数至一朵小花，大都两侧压扁，通常脱节于颖之上。', images: [require("../public/images/PRetrieval/shu/310000/1s1.png")], },
        R: { childrenID: 'k319', isFinish: false, describe: '小穗含有2小花，背腹扁或为圆筒形，通常脱节于颖之下', images: [require("../public/images/PRetrieval/shu/310000/1x1.png")], },
    },
    kthityone2: {
        id: 'k312',
        L: { childrenID: 'k313', isFinish: false, describe: '成熟小花的外稃具多数脉至5脉(稀为3脉)，或其脉不明显，叶舌通常无纤毛(芦苇属例外)(Ⅲ、早熟禾亚科Pooideae)', images: [require("../public/images/PRetrieval/shu/310000/2s1.png")], },
        R: { childrenID: 'k317', isFinish: false, describe: '成熟小花外稃具3或1脉，亦有具5—9脉者；叶舌通常具纤毛，或为一圈毛所代替(外稃虽具多脉，但叶舌具毛而可与上项“5”区别)(Ⅳ、画眉草亚科Eragrostidoideae)', images: [require("../public/images/PRetrieval/shu/310000/2x1.png")], },
    },
    kthityone3: {
        id: 'k313',
        L: { childrenID: 's064', isFinish: false, describe: '小穗无柄或几无柄，排成穗状花序', images: [require("../public/images/PRetrieval/shu/310000/3s1.png")], },
        R: { childrenID: 'k314', isFinish: false, describe: '小穗多具柄，排列为开展或紧缩的圆锥花序，或近于无柄，形成穗形总状序。若无柄时，则小穗覆瓦状排列于穗轴一侧再形成圆锥花序。', images: [require("../public/images/PRetrieval/shu/310000/3x1.png"),require("../public/images/PRetrieval/shu/310000/3x2.png")], },
    },
    kthityone4: {
        id: 'k314',
        L: { childrenID: 's064', isFinish: false, describe: '外稃基盘延伸如细柄状，其上生有长丝状柔毛；叶舌具纤毛。高大禾草', images: [require("../public/images/PRetrieval/shu/310000/4s1.png"),require("../public/images/PRetrieval/shu/310000/4s2.png")], },
        R: { childrenID: 'k315', isFinish: false, describe: '外稃基盘通常无毛，如有毛时，从不为长丝状柔毛，且其毛大都短于外稃；叶舌通常膜质，无纤毛。一般为中、小型禾草', images: [require("../public/images/PRetrieval/shu/310000/4x1.png"), require("../public/images/PRetrieval/shu/310000/4x2.png")], },
    },
    kthityone5: {
        id: 'k315',
        L: { childrenID: 's064', isFinish: false, describe: '外稃大都为膜质，通常短于颖，也可略与颖等长，如长于颖时，则质地稍坚硬，成熟时疏松包裹着颖果或几不包裹(翦股颖族Agrostideae)', images: [require("../public/images/PRetrieval/shu/310000/5s1.png")], },
        R: { childrenID: 'k316', isFinish: false, describe: '外稃质地厚于颖，至少在背部较颖坚硬，成熟后与内稃一齐紧包颖果(针茅族Stipeae)。', images: [require("../public/images/PRetrieval/shu/310000/5x1.png"),require("../public/images/PRetrieval/shu/310000/5x2.png")], },
    },
    kthityone6: {
        id: 'k316',
        L: { childrenID: 's064', isFinish: false, describe: '外稃芒宿存，大都粗壮而下部常扭转', images: [require("../public/images/PRetrieval/shu/310000/6s1.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '外稃芒易落，大都简短，细弱，基部不扭转', images: [require("../public/images/PRetrieval/shu/310000/6x1.png")], },
    },
    kthityone7: {
        id: 'k317',
        L: { childrenID: 's064', isFinish: false, describe: '小穗具(2)3至多数结实小花；圆锥花序，如为总状或穗状花序时其小穗不排列于穗轴的一侧(画眉草族Eragrostideae) ', images: [require("../public/images/PRetrieval/shu/310000/7s1.png")], },
        R: { childrenID: 'k318', isFinish: false, describe: '小穗含1结实小花', images: [require("../public/images/PRetrieval/shu/310000/7x1.png")], },
    },
    kthityone8: {
        id: 'k318',
        L: { childrenID: 's064', isFinish: false, describe: '小穗无柄或近于无柄，排列于穗轴一侧形成穗状花序，此花序再呈指状(或近于指状)排列于穗轴先端，组成复合花序(虎尾草族Chlorideae)', images: [require("../public/images/PRetrieval/shu/310000/8s1..png")], },
        R: { childrenID: 's064', isFinish: false, describe: '小穗通常具柄，如无柄或近于无柄时，也不排列于穗轴的一侧，不呈指状排列的花序', images: [require("../public/images/PRetrieval/shu/310000/8x1.png")], },
    },
    kthityone9: {
        id: 'k319',
        L: { childrenID: 's064', isFinish: false, describe: '小穗基部无上述基盘，第一颖虽小但存在；第一外稃上具芒或芒状小尖头；叶舌缺', images: [require("../public/images/PRetrieval/shu/310000/9s1.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '小穗脱落时，附于其下的刚毛仍宿存花序上', images: [require("../public/images/PRetrieval/shu/310000/9x1.png")], },
    },
    fortysix: {
        id: '046',
        L: { childrenID: 'k32', isFinish: false, describe: '子房上位', images: [require("../public/images/PRetrieval/ke/4601.jpg")], },
        R: { childrenID: '330000', isFinish: true, describe: '子房下位', images: [require("../public/images/PRetrieval/ke/4611.jpg")], },
    },
    kthitytwo: {
        id: 'k32',
        L: { childrenID: 's064', isFinish: false, describe: '植株具鳞茎，叶扁平或圆柱状，实心或中空。伞形花序', images: [require("../public/images/PRetrieval/shu/320000/1s1.png"), require("../public/images/PRetrieval/shu/320000/1s2.png"), require("../public/images/PRetrieval/shu/320000/1s3.png")], },
        R: { childrenID: 's064', isFinish: false, describe: '植株仅具根状基，叶退化成鳞片状；具叶状枝，总状花序', images: [require("../public/images/PRetrieval/shu/320000/1x1.png"), require("../public/images/PRetrieval/shu/320000/1x2.png"),require("../public/images/PRetrieval/shu/320000/1x3.png")], },
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