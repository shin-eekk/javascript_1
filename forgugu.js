let gugu = 2;
// + , - , * , / / %(나머지/순환핵심연산)

for(x=2; x<10; x++){
    console.log(`${x}단시작`)
    for(i=2; i<10; i++){
        console.log(`${x} X ${i}=${x*i}`)
    }
}

//바깥쪽 for 는 주week, 분 minute 개념
//안쪽 for 는 일day, 초second 개념

//내비게이션 2단 메뉴에 적용 가능한 구조  ul>li  == for>for


let gudan = 11;

// for(x=11; x<100; x++){
//     console.log(`${x} X ${x}=${x*x}`)
// }  11x11 ~ 99x99까지

for(x=11; x<21; x++){
    console.log(`${x}단시작`)
    for(i=11; i<21; i++){
        console.log(`${x} X ${i}=${x*i}`)
    }
    
}