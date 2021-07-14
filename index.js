const arr = [1, 2, 3, 4]

const arr1 = [10, 2, 100, 5, 7];


// for (let i=0; i<arr.length; i++){
//   console.log(arr[i])
// }


// const updatedArray = arr.map((val, idx)=>{
//   return val * 2
// })
//
// console.log(updatedArray)

// const even_values = arr1.filter((val, idx)=>{
//   return val % 5 === 0;
// })
// //
// // console.log(even_values)
//
// const isValueExitsing = arr.find((val, idx)=>{
//   return val === 100
// })
//
// console.log(isValueExitsing)



//
// const sum = (num1, num2) =>{
//   //Block of code
//   const result = num1 + num2;
//   return result
// }
//
// console.log(sum(5, 2))
// //
// //
// // const sum_result = sum(10, 5)
// //
// // console.log(sum_result);

class Person{
  constructor(name, lastname, age, weight){
    this.name = name;
    this.lastname = lastname;
    this.age = age
    this.weight = weight
  }

  greet(){
    console.log(this.name + ' is saying hello')
  }
}

const Junior = new Person("Junior", "Hlongwane", "12")
const Sufian = new Person("Sufian", "Maxwell", "45")

Junior.greet()
Sufian.greet()
