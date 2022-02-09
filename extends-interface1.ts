interface Student {
    name: string;
    age: number;
    exam?: number;
    [propname: string]: any;    //此接口允许添加新的属性
    work(): string;
}
// 接口的继承
interface Monitor extends Student {
    // 新增一个方法 返回值为string
    shouzuoye(): string;
}
// 接口应用实例
const monitor = (teacher: Monitor) => {
    console.log("名字:" + teacher.name)
    console.log("年龄:" + teacher.age)
    // 做一个小判断，如果有成绩则输出成绩，没有成绩则输出提示
    teacher.exam ? console.log("成绩" + teacher.exam) : console.log("此人无成绩")
    console.log(teacher.work())
    console.log(teacher.shouzuoye())
}
monitor(
    {
        name: "小黑", age: 18, exam: 18,
        work() {
            return "争取下次考试考零分"
        },
        shouzuoye() {
            return "大家向我学习"
        }
    }
);

// const xiaohei = {
//     name: "小黑", age: 18,
//     work() {
//         return "学习就是我的工作"
//     },
//     shouzuoye() {
//         return "大家把作业交给我"
//     }
// }
// // 以传值的形式调用方法
// monitor(xiaohei)


// const ageList: Monitor = {
//     name: '小黑',
//     age: 18,
//     work() {
//         return '学习使我快乐'
//     },
//     shouzuoye() {
//         return '工作使我开心'
//     }
// }

// console.log(ageList);

// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// let square = <Square>{};
// square.color = 'red'
// square.sideLength = 10;



interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = (Square: Square) => {
    console.log(Square);
};
let obj = {
    color: "red",
    penWidth: 10,
    sideLength: 10
}
square(obj)
// square.color = 'red'
// square.sideLength = 10;
// square.penWidth = 10;
