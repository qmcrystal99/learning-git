function feature1() {
    const number = Date.now()
    switch (number) {
        case 1:
            console.log(`number = 1`);
            break;
        case 2: 
            console.log(`number = 2`);
            break
        case 3: 
            console.log(`number = 3`);
            break;
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

function feature3(b: number) {
    if ( b > 1 && b < 5) {
        return 2;
    } else {
        return 0;
    }
}