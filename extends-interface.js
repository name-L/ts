function fn(a) {
    return a.length;
}
console.log(fn([1, 2]), fn('123'));
// fn(123)
function fn1(params) {
    return params.some(function (item) { return item === 4; });
}
var arr = [1, 2, 3, 4, 5];
console.log(fn1(arr));
function fn2(params) {
    params.name = '小红';
    params.age = 88;
    console.log(params);
}
fn2({
    name: '1',
    age: 1,
    xixi: '11'
});
function fn3(params) {
}
