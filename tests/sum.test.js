const sum = require('../src/sum')

it('should return correct sum', () => {
	const result = sum(10, 8)
	expect(result).toBe(18)
})
