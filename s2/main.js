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

// Bai 8: 
// const employees = [
//     { id: 1, name: "John", workingDays: 19, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
//     { id: 4, name: "BBBB", workingDays: 21, lateDays: 1 },
// ];
// const result = employees.map(person => person.workingDays - person.lateDays)
// console.log(result)
// let curMax = 0
// let kqua 
// for(let i = 0; i < result.length; i++){
//     if(curMax < result[i]){
//         curMax = result[i]
//         kqua = employees[i]
//     }
// }
// console.log(kqua)
// Bai 9: 
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];
//     let result = {}
//     let names = employees.map(user => user.name )
//     names.forEach((name, index) => {
//     //   result[name] ? result[name].push(employees[index]) :  result[name] = [] 
//         if(!result[name]){
//             result[name] = [] 
//         }
//         result[name].push(employees[index])
//     })
//     console.log(result) 
// Bai 10: 
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 }
// ];
// const result = employees.map(person => person.workingDays/person.salary)
// console.log(result)
// let curMax = 0
// let kqua 
// for(let i = 0; i < result.length; i++){
//     if(curMax < result[i]){
//         curMax = result[i]
//         kqua = employees[i]
//     }
// }
// console.log(kqua)


// Bai 11: 
// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// let result = {}
// employees.forEach(item =>{
//     if(!result[item.workingDays]){
//         result[item.workingDays] = 0
//     }
//     result[item.workingDays]++
// })
// console.log(result)

// Bai 12: 
// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
//     { id: 4, name: "BBBB", email: "BBBB@example.com", workingDays: 27, lateDays: 1, salary: 4000 },

// ];
// let result = []
// employees.reduce((employee, item) =>{
//     let person = {
//         name: item.name,
//         email: item.email,
//         workInfo: {
//             workingDays: item.workingDays,
//             lateDays: item.lateDays,
//         }
//     }
//     result.push(person)
// },{})
// console.log(employees)
// console.log(result)

// Bai 13: 
// let tasks = [ 
//     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false },
//     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
// ];
// 13.1
// function addTask(name, description, completed){
//     let result = {
//         name: name,
//         description: description,
//         completed: completed
//     }
//     tasks.push(result)
// }
// addTask("Choi game", "lam bai tap roi choi game", true)
// console.log(tasks)

//13.2
// function doneTask(...names){
//     tasks.map(task =>{
//         names.map(name => {
//             if(task.name == name){
//                 task.completed = true
//             }
//         })
//     }) 
// }
// doneTask("Hoàn thành bài tập JavaScript","Đi mua hàng")
// console.log(tasks)


// 13.3
// let sortA_Z = "Sắp xếp theo chiều A - Z"
// let sortZ_A = "Sắp xếp theo chiều Z - A"
// function sortName(type){
//     let listName = tasks.map(item => item.name)
//     if(type == sortA_Z){
//         let result = listName.sort((name1, name2) => name1.localeCompare(name2))
//         console.log(result)
//     }
//     if(type == sortZ_A){
//         let result = listName.sort((name1, name2) => name1.localeCompare(name2))
//         let reverseArr = result.reverse()
//         console.log(reverseArr)
//     }
// }

// sortName(sortA_Z)
// sortName(sortZ_A)








