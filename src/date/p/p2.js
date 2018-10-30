const P2ImageAPI = {
    images1: [
        { bgImage: require("@images/3.jpg") },
        { bgImage: require("@images/3.jpg") },
        { bgImage: require("@images/3.jpg") },
        // { bgImage: require("@images/3.jpg") },
        // { bgImage: require("@images/3.jpg")},
        // { bgImage: require("@images/3.jpg"), zzc: "none"},
        // { bgImage: require("@images/3.jpg"), zzc: "none"}
    ],
    images2: [
        { bgImage: require("@images/4.jpg") },
        { bgImage: require("@images/4.jpg") },
        { bgImage: require("@images/4.jpg") },
        { bgImage: require("@images/4.jpg") },
        { bgImage: require("@images/4.jpg") },
        { bgImage: require("@images/4.jpg"), zzc: "none" },
        { bgImage: require("@images/4.jpg"), zzc: "none" }
    ],
    all1: function () { return this.images1 },
    all2: function () { return this.images2 },
    get1L: function () { return this.images1.length },
    get2L: function () { return this.images2.length },
}

export default P2ImageAPI