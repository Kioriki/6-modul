function checkNumber(number){
    if (number > 1000 || nuber < 0)
    {return 'данные неверны';}
    else if (number ===0 || number === 1)
    {return 'Не простое и не составное';}
    else {for (let i=2; i < number; i++)
    {if (number % i === 0)
    {return 'составное число';}
    }return 'Простое число';}
    
    }