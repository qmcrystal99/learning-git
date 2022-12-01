function feature1() {
    const number = 1
    switch (number) {
        case 1:
            console.log(`number = 1`);
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