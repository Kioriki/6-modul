function outside(x) {
    function inside(y) {
    return x + y;
    }
    return inside;
    }
    
    result1 = outside(2)(5);
    console.log(result1);