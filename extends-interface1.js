// 接口应用实例
var monitor = function (teacher) {
    console.log("名字:" + teacher.name);
    console.log("年龄:" + teacher.age);
    // 做一个小判断，如果有成绩则输出成绩，没有成绩则输出提示
    teacher.exam ? console.log("成绩" + teacher.exam) : console.log("此人无成绩");
    console.log(teacher.work());
    console.log(teacher.shouzuoye());
};
monitor({
    name: "小黑", age: 18, exam: 18,
    work: function () {
        return "争取下次考试考零分";
    },
    shouzuoye: function () {
        return "大家向我学习";
    }
});
var square = function (Square) {
    console.log(Square);
};
var obj = {
    color: "red",
    penWidth: 10,
    sideLength: 10
};
square(obj);
// square.color = 'red'
// square.sideLength = 10;
// square.penWidth = 10;
