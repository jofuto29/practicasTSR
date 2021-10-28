function f(x){
    var y = 0;
    if(x>2){
        let x = 2
        console.log(x)
        y++
    }
    console.log(x+y)
}
f(8)
f(6)
var a = [1,2,3,4], b = [1,2,3,4], c=a
console.log([a==b,a==c,a===b,a===c])