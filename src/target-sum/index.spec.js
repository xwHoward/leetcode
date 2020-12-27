describe('target sum', function () {
    const findTargetSumWays = require('./index')
    it('# should pass', function () {
        expect(findTargetSumWays([1, 1, 1, 1, 1]
            , 3)).toEqual(5)
    })
})