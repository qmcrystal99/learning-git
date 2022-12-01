function feature1() {
    const number = Date.now()
    switch (number%4) {
        case 1:
            console.log(`number = 1`);
            break;
        case 2: 
            console.log(`number = 2`);
        case 3: 
            console.log(`number = 3`);
        default:
            console.log(`number is unknow`);
            break;
    }
    return 1;
}

function feature2(a: number) {
    if ( a > 1 && a < 5) {
        return 2;
    } else {
        return 0;
    }
}