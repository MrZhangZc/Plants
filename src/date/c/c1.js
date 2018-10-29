const ImageAPI = {
    images1: [
        { id: "c/1-1", textName: "1-1" },
        { id: "c/1-2", textName: "1-2" },
        { id: "c/1-3", textName: "1-3" },
        { id: "c/1-4", textName: "1-4" },
        { id: "c/1-5", textName: "1-5" },
        { id: "c/1-6", textName: "1-6" }, 
        { id: "c/1-7", textName: "1-7" }
    ],
    images2: [
        { id: "c/2-1", textName: "2-1" },
        { id: "c/2-2", textName: "2-2" },
        { id: "c/2-3", textName: "2-3" },
        { id: "c/2-4", textName: "2-4" },
        { id: "c/2-5", textName: "2-5" },
        { id: "c/2-6", textName: "2-6" },
        { id: "c/2-7", textName: "2-7" }
    ],
    all1: function () { return this.images1 },
    all2: function () { return this.images2 }
}

export default ImageAPI