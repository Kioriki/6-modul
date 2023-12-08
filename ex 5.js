const sqr = (x , n) => {
    if (Number.isInteger(n)) {
    const result = x ** n;
    return result;
    } else {
    const result = 'Введите натуральное число';
    }
    }
    const out = sqr(+prompt('x'), +prompt ('n'));
    console.log(out);