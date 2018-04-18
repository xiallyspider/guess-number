// Write your cade below:
var readlineSync = require('readline-sync')

function createRandom(n) {
    var rdm = ''
    for(let x = 0; x < n; x++){
        rdm += Math.floor(Math.random()*10)
    }
    return rdm
}
function verifyInput(random, input) {
    let result = []
    let randomArr = random.split('')
    let inputArr = input.split('')
    let aCount = 0
    let bCount = 0
    for (let x = 0; x < randomArr.length; x++) {
        if(randomArr[x] == inputArr[x]){
            aCount ++
        }
    }
    let tempArr = randomArr
    inputArr.forEach(element => {
       for (let y = 0; y < tempArr.length; y++) {
           if(element === tempArr[y]){
                tempArr.splice(y, 1)
                bCount ++
                break
           }
       }
   });
   bCount = bCount - aCount
   result = [aCount, bCount]
   return result
}
module.exports = function main(rdm, ipt) {
    console.log("开始宾果游戏！")
    let result = ''
    let resultArr = []
    let random = rdm
    // random = createRandom(4)
    let input = ipt
    // input = readlineSync.question('');
    // for(let times = 0; times < 9; times++){
    //     if (input === '' || input.split('').length !== 4) {
    //         console.log("请输入4个数字（1-9之间）！")
    //         input = readlineSync.question('');
    //     } else {
    //         resultArr = verifyInput(random, input)
    //         result = resultArr[0] + 'A' + resultArr[1] + 'B'
    //         console.log(result)
    //         return result
    //     }
    //     times++
    // }
    resultArr = verifyInput(random, input)
    result = resultArr[0] + 'A' + resultArr[1] + 'B'
    console.log(result)
    return result
}
