// Bài 1
// const square1 = (a) => {
//     return a*a
// }
// console.log(square1(4))
// const square2 = a => a*a
// console.log(square2(3))
// function square3(a){
//     return a*a
// }
// console.log(square3(2))

//Bài 2

// const input = (mess, word) =>{
//     let result = mess.includes(word)
//     if(result){
//         console.log('done')
//     }else{
//         console.log('not')
//     }
// }

// let mess = "hello world , máy em đang bị lỗi do lúc nãy đi mưa nên em xin phép out sớm nhé ạ. em sẽ xem lại record sau ạ"

// input(mess, 'world')

// Bài 3

// const arr = ["one", "two", "three"]
// let newArr = []

// for(let i = 0; i < arr.length; i ++){
//     let result = `number: ${arr[i]}`
//     newArr.push(result)
// }
// console.log(newArr)

// function newArray(b){
//     const map = arr.map(a => `${b}: ${a}` )
//     console.log(map)
// }
// newArray('this')

// Bài 4
// function newNumberArr(...number){
//     let map =  number.map(a => a*2)
//     console.log(map)
// }
// newNumberArr(1, 2, 3, 4)

// Bài 5 

// function newNumberArr(...number){
//     let soLe = []
//     number.filter(a => {
//         if(a%2 != 0){
//             return soLe.push(a)
//         }
//     })
//     console.log(soLe)
    
// }
// newNumberArr(1, 2, 3, 4, 5, 7)

// Bài 6: 
// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];


// function addDay(obj){
//     let result = 0
//     obj.map(item => result += item.workingDays)
//     console.log(result)
// }
// addDay(employees)

//Bài 7: 

// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "MAAA", salary: 3600 },
//     { id: 5, name: "BBBB", salary: 5550 },
// ];
// let maxValue = employees.reduce((acc, curValue) => {
//     return (acc > curValue.salary) ? acc : curValue
// })
// console.log(maxValue)
