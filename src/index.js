const foo = (input) => {
    const leftValues = input.map(row => row[0])
    const rightValues = input.map(row => row[1])

    const maxLeftValue = Math.max(...leftValues)
    const maxRightValue = Math.max(...rightValues)
    const minLeftValue = Math.min(...leftValues)
    const maxFirstRightValue = input.reduce((prev, curr) => curr[1] > prev && curr[1] < maxLeftValue ? curr[1] : prev, null)
    const minSecondLeftValues = Math.min(...leftValues.filter(l => l > maxFirstRightValue))

    return maxFirstRightValue === null ? [[minLeftValue, maxRightValue]] : [[minLeftValue, maxFirstRightValue], [minSecondLeftValues, maxRightValue]]
}

console.log('[[0, 3], [6, 10]] =>', foo([[0, 3], [6, 10]]))
console.log('[[0, 5], [3, 10]] =>', foo([[0, 5], [3, 10]]))
console.log('[[0, 5], [2, 4]] =>', foo([[0, 5], [2, 4]]))
console.log('[[7, 8], [3, 6], [2, 4]] =>', foo([[7, 8], [3, 6], [2, 4]]))
console.log('[[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]] =>', foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]))

module.exports = {
    foo
}
