const sayHi = (name) => {
  console.log(`Hello there, ${name}`);
}

function findGivenSum(numList, k) {
  for(num in numList) {
    for(num2 in numList) {
      if(numList[num] + numList[num2] == k) {
        return true
    }}
    return false
  }
}

module.exports = { sayHi, findGivenSum }