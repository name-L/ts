
interface Inter {
    length: number;
}
function fn<L extends Inter>(a: L): number {
    return a.length
}
console.log(fn([1, 2]),fn('123'));

// fn(123)
function fn1(params: number[] | string[]) {
    return params.some(item => item === 4)
}
let arr: number[] = [1, 2, 3, 4, 5]
console.log(fn1(arr));

type A = { name: string } & { age: number };
function fn2<L extends A>(params: L) {
    params.name = '小红';
    params.age = 88;
    console.log(params)
}
fn2({
    name: '1',
    age: 1,
    xixi:'11'
})
function fn3(params : A) {
    
}

