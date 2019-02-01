/* Question 01 - Write a series of unit tests that will validate the following assumptions:

When the numbers are all positive, it should return the sum of all the numbers
When there is a negative number in the provided array, it should not be included as part of the sum
When the provided array is empty, it should return a sum of 0
When the provided array is all negative numbers, it should return a sum of 0*/

describe("return positive numbers", () => {
    it("should return the sum of all positive numbers", () => {
        expect(positiveSum([7, 3])).toBe(10)
    })

    it("should not included negative numbers as part of the sum", () => {
        expect(positiveSum([-7, -3])).toEqual(0)
    })
    it("should be only accept a non-empty array of integers", () => {
        expect(positiveSum([])).toBe(0)
    })
    it("should return 0 if all the numbers are negative", () => {
        expect(positiveSum([-7, -3])).toBe(0)
    })
})

/*Question 02 -Write a series of unit tests that will validate the following assumptions:

When a number is divisible by both of the provided divisors, it should return true.
When the number is smaller then both the provided divisors, it should return false.
When the number is not divisible by only one of the provided divisors it should return false.
When the number is not divisible by any of the provided divisors it should return false.*/

describe("Provide true or false", () => {
    it("should return true when a number is divisible by both divisors", () => {
        expect(isDivisible(12, 2, 3)).toBe(true)
    })
    it("should return false when a dividend number is smaller than divisors", () => {
        expect(isDivisible(5, 15, 25)).toBe(false)
    })
    it("should return false when a dividend is not divisible by one divisors", () => {
        expect(isDivisible(56, 5, 8)).toBe(false)
    })
    it("should return false when a dividend is not divisible by both divisors", () => {
        expect(isDivisible(56, 5, 9)).toBe(false)
    })
})

/*Question 03 - Write a series of unit tests that will validate the following assumptions:

When there is only 1 characters in the string, it returns itself
When there are multiple characters in the string it returns the string, reversed.
When there are no characters in the string, it returns empty string.*/

describe("return characters", () => {
    it("should return itself when have only one character", () => {
        expect(solution("o")).toBe("o")
    })

    it("should return a string reversed when the string have multiple character", () => {
        expect(solution("swen")).toBe("news")
    })
    it("should be only accept a non-empty array of integers", () => {
        expect(solution(" ")).toBe(" ")
    })
})

/*Question 04 - 
When is a number bigger than 1 it should loop down to 1.
When the number is a one, it returns itself.
When the number is negative it should return empty array 
*/


describe("return reversed", () => {
    it("should be only accept an array of numbers", () => {
        expect(reverseSeq(5)).toEqual([5,4,3,2,1])
    })
    it("should return itself if the number is 1", () => {
        expect(reverseSeq(1)).toEqual([1])
    })
    it("should return empty array if the number is negative", () => {
        expect(reverseSeq(-5)).toEqual([])
    })
})