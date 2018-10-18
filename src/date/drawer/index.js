const LeftDrawer = {
    drawersLeft: [
        {id: 1, name: '张智超', roUrl: '/serach1'},
        {id: 2, name: '张智超', roUrl: '/serach1'},
        {id: 3, name: '张智超', roUrl: '/serach1'},
        {id: 4, name: '张智超', roUrl: '/serach1'},
        {id: 5, name: '张智超', roUrl: '/serach1'},
        {id: 6, name: '张智超', roUrl: '/serach1'},
        {id: 7, name: '张智超', roUrl: '/serach1'},
        {id: 8, name: '张智超', roUrl: '/serach1'},
    ],
    drawersMiddle: [
        { id: 1, name: 'workspace', roUrl: '/serach1' },
        { id: 2, name: 'workspace', roUrl: '/serach1' },
        { id: 3, name: 'workspace', roUrl: '/serach1' },
        { id: 4, name: 'workspace', roUrl: '/serach1' },
        { id: 5, name: 'workspace', roUrl: '/serach1' },
        { id: 6, name: 'workspace', roUrl: '/serach1' },
        { id: 7, name: 'workspace', roUrl: '/serach1' },
        { id: 8, name: 'workspace', roUrl: '/serach1' },
        { id: 8, name: 'workspace', roUrl: '/serach1' },
        { id: 8, name: 'workspace', roUrl: '/serach1' },
    ],
    drawersRight: [
        { id: 1, name: 'folder', roUrl: '/serach1' },
        { id: 2, name: 'folder', roUrl: '/serach1' },
        { id: 3, name: 'folder', roUrl: '/serach1' },
        { id: 4, name: 'folder', roUrl: '/serach1' },
        { id: 5, name: 'folder', roUrl: '/serach1' },
        { id: 6, name: 'folder', roUrl: '/serach1' },
    ],
    allLfet: function () { return this.drawersLeft },
    allMiddle: function () { return this.drawersMiddle },
    allRight: function () { return this.drawersRight },
}

export default LeftDrawer