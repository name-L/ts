// 联合 | 相当于两个类型 选一个 如果赋值其它类型就会报错
var val: string | number
val = 12
console.log("数字为 " + val)
val = "Runoob"
console.log("字符串为 " + val)

// 也可以将联合类型作为函数参数使用：
function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}
disp("Runoob")
console.log("输出数组....")
disp(["Runoob", "Google", "Taobao", "Facebook"])


// 联合类型数组
// 我们也可以将数组声明为联合类型：
var arr: number[] | string[];
var i: number;
arr = [1, 2, 4]

type A = {
    name: string,
    age:number
    
}
type B = {
    gender: string,
    hobby:object
}
interface Inter {
    length: number;
}
function people(item: A | Inter | B) {
    console.log(item);
    
}

people({
    name: 'aaa',
    age:17
})
console.log("**数字数组**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr = ["Runoob", "Google", "Taobao"]
console.log("**字符串数组**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}