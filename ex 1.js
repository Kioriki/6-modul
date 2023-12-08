function typeNumbers() {
    let massive = [2, 2, 3, 3, 3, 0, 0, null];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    
    for (let i = 0; i < massive.length; i++) {
    if (typeof massive[i] === 'number' || !isNaN(massive[i])) {
    a += 1;
    if (massive[i] === 0 || massive[i] === null){
    b+=1;
    } else if (massive[i] % 2=== 0){
    c+=1;
    } else {
    d+=1;
    }
    }
    }
    console.log('Итого: '+ a + ' цифр, '+ b + ' нулей, '+ c +' четных, '+ d + ' нечетных')
    }
    typeNumbers()