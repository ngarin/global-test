const {foo} = require('./index')

describe('foo function', () => {
    it('should return [[0, 3], [6, 10]]', () => {
        expect(foo([[0, 3], [6, 10]])).toStrictEqual([[0, 3], [6, 10]])
    })

    it('should return [[0, 5], [3, 10]]', () => {
        expect(foo([[0, 5], [3, 10]])).toStrictEqual([[0, 10]])
    })

    it('should return [[0, 5], [2, 4]]', () => {
        expect(foo([[0, 5], [2, 4]])).toStrictEqual([[0, 5]])
    })

    it('should return [[7, 8], [3, 6], [2, 4]]', () => {
        expect(foo([[7, 8], [3, 6], [2, 4]])).toStrictEqual([[2, 6], [7, 8]])
    })

    it('should return [[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]', () => {
        expect(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]])).toStrictEqual([[1, 10], [15, 20]])
    })
})
