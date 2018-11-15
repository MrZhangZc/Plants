const pAPI = {
    one:{
        id:'001',
        L: { name: '描述', childrenID: '010000', isFinish: true, describe: '胚珠裸露，无真正的花和果实', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { name: '描述', childrenID: '002', isFinish: false, describe: '胚珠被子房包被，具有真正的花和果实', images: [require("@images/2.jpg"), require("@images/2.jpg"), require("@images/2.jpg"), require("@images/2.jpg"), require("@images/2.jpg")], },
    },
    two:{
        id:'002',
        L: { name: '描述', childrenID: '010000', isFinish: true, describe: '子叶', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
        R: { name: '描述', childrenID: '003', isFinish: false, describe: '花通常四至五基数', images: [require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg"), require("@images/1.jpg")], },
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