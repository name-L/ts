// ✅正确
var stu = {
    name: 'Tom',
    age: 23,
    school: 'Oxford'
};
console.log(stu);
// // ❌错误
// // Property 'school' is missing in type ...
// const stu1: Person & Student = {
//     name: 'Tom',
//     age: 23,
// }
// // ❌错误
// // Type '{ school: string; }' is missing the following properties from type 'Person': name, age
// const stu2: Person & Student = {
//     school: 'Oxford'
// }
// // Person & Student 可以使用类型别名
// interface Person {
//     name: string
//     age: number
// }
// interface Student {
//     school: string
// }
// type StudentInfo = Person & Student
// // ✅正确✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// const stu: StudentInfo = {
//     name: 'Tom',
//     age: 23,
//     school: 'Oxford',
// }
// // ❌错误
// // Property 'school' is missing in type ...
// const stu: StudentInfo = {
//     name: 'Tom',
//     age: 23,
// }
// // ❌错误
// // Type '{ school: string; }' is missing the following properties from type 'Person': name, age
// const stu: StudentInfo = {
//     school: 'Oxford'
// }
// // 或者
// interface Person {
//     name: string
//     age: number
// }
// type UserInfo = Person & {isAdmin: boolean, level?: string}
// // ✅正确
// const user1: UserInfo = {
//     name: 'Tom',
//     age: 23,
//     isAdmin: true,
//     level: 'A1',
// }
// // ❌错误
// // Property 'isAdmin' is missing in type ...
// const user2: UserInfo = {
//     name: 'Tom',
//     age: 23,
// }
