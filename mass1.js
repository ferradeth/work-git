let arrFirst = ["февраль","август","сентябрь","октябрь"]
arrFirst.unshift("январь")
console.log(arrFirst)
arrFirst.push("декабрь")
console.log(arrFirst)
arrFirst.splice(3, 2, "март", "апрель", "май")
console.log(arrFirst)
arrFirst.splice(2,0,"июнь", "июль")
console.log(arrFirst)
console.log(arrFirst.pop())
let arrSecond = arrFirst.slice(2, 5)
console.log(arrSecond)
let arrFirst_copy = arrFirst.slice()
let rem = arrFirst[0]
arrFirst[0]=arrFirst[arrFirst.length-1]
arrFirst[arrFirst.length-1] = rem
let arrFirst_copy1 = [...arrFirst, "февраль"]