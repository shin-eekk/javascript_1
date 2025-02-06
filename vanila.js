//변수선언
let number = 0;

//id / pw로 const 와 let을 구분해보면
const id = "shinek";
    
let pw = "12345abcd@@"
 pw += "asdf"
//let은 중간에 바꿀 수 있음  기존값에 추가하려면 +=
console.log(`아이디는:${id}이고, 비밀번호는: ${pw}입니다`)


//배열  -내용이 아닌 자리가 중요
const navi = ["네이버", "다음", "구글"]  //index는 숫자
console.log(`제주도에 있는 대기업 ${navi[1]}, 가고싶아`)


const 교실 = {
    해바라기 : ["김", "이", "박"],
    백합 : ["나", "유", "정"]
}
console.log(교실.백합[0], 교실["백합"][2]);
console.log(`${교실.해바라기[1]}, 와 ${교실.백합[2]} 은 친구`);

for( x in 교실["해바라기"]){
        console.log(`for in문은 index(숫자배열)에 접근한다. ${x} 출력`);
}

for( x of 교실["해바라기"]){
        console.log(`for of는 value(데이터)에 접근한다. ${x} 출력`);
}





// let count = 2;

// setInterval(function(){
//     count++;
//     console.log(count);

// }
 1000) //1초 마다 실행


// window.addEventListener("DOMContentLoaded", function(){
//     // alert((count+8)/2*3 %2);  
//     this.document.body.innerHTML = `<h2>1초마다 숫자 바뀜</h2>`;
//     this.document.body.innerHTML += `<div>${count}</div>`;
//     this.document.body.classList += `dim${count}`
//     //기존 body에 class를 다 지우고 들어가기  += 뒤에 추가대입
// })
// %n n의 나머지로 나눠라 


// //함수선언  , 선언을 너무 많이하면 무거워짐
// function 동사이름(){
    
// } 
// //실행
// 동사이름();
// 동사이름();
// 동사이름();