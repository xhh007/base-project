var global = (function(){
    var a = 1; //避免全局污染
    var b = 2; //
    // 暴露为sayHi
    function hello() {
        console.log('hello');
    }
    // 暴露为count
    var count = 1;

    return {
        sayHi: hello,
        count: count
    }
})()