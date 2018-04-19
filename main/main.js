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
   return result[0] + "A" + result[1] + "B"
}
function main(rdm, ipt) {
    console.log("开始宾果游戏！")
    let result = ''
    let resultArr = []
    let random = rdm
    random = createRandom(4)
    console.log("答案："+random)
    let input = ipt
    input = readlineSync.question('')
    for (let times = 9; times > 0; times--) {
        if (input === '' || input.split('').length !== 4) {
            console.log("请输入4个数字（1-9之间）！")
            console.log("剩余输入次数：" + times + "次")
            input = readlineSync.question('')
        } else {
            result = verifyInput(random, input)
            console.log(result)
            console.log("剩余输入次数：" + times + "次")
            input = readlineSync.question('')
        }
    }
    console.log("输入次数用完，游戏结束！")
    return false
}
let rdm = ''
let ipt = ''
main(rdm, ipt)
module.exports = verifyInput