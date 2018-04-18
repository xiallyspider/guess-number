const main = require('../main/main');

describe('main()', () => {
  it("1A2B",function() {
    let rdm = '1211'
    let input = '1122'
    let result = main(rdm, input)
    let expected = '1A2B'
    expect(result).toEqual(expected)
  })

  it("2A0B",function() {
    let rdm = '1211'
    let input = '1315'
    let result = main(rdm, input)
    let expected = '2A0B'
    expect(result).toEqual(expected)
  })

  it("0A4B",function() {
    let rdm = '5463'
    let input = '3645'
    let result = main(rdm, input)
    let expected = '0A4B'
    expect(result).toEqual(expected)
  })
});