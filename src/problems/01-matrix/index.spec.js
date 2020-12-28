describe('01-matrix', function () {
    const updateMatrix = require('./index')
    it('#should pass', function () {

        expect(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]).toString()).toEqual('[[0,0,0],[0,1,0],[0,0,0]]');
        // expect(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]).toString()).toEqual('[[0,0,0],[0,1,0],[0,0,0]]');
    })
})