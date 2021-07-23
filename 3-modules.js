const names = require('./4-names')
const utils = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade')

utils.sayHi(names.john)
utils.sayHi(names.peter)

console.log(data)

console.log(utils.findGivenSum(names.numList, names.k))
