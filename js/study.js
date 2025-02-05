const mynavi =  [
    {
        d1text : "계획짜기",
        d1herf : "plan.html",
        d1cls : "plan"
    },  
    {
        d1text : "트립톡",
        d1herf : "triptalk.html",
        d1cls : "triptalk"
    },
    {
        d1text : "이벤트",
        d1herf : "event.html",
        d1cls : "event"
    },
    {
        d1text : "마이페이지",
        d1herf : "mypage.html",
        d1cls : "mypage"
    },
    {
        d1text : "고객센터",
        d1herf : "cs.html",
        d1cls : "cs"
    }

]

//객체를 저장한다
const targetul = document.querySelector("#ek_gnb");  //목적지 태그
let ullist = ""; //태그수집하기 변수선언

//변수 x를 사용해서 5회 
for(x=0; x<5; x++){
}

// mynavi 의 길이만큼
for(x=0; x<mynavi.length; x++){
    ullist += `<li><a href="${mynavi[x].d1herf}">${mynavi[x].d1text}</a></li>`;
}
targetul.innerHTML = ullist;

// document.querySelector("#sec0").innerHTML = `<h2>${mynavi[0].d1text}</h2>`;
// document.querySelector("#sec1").innerHTML = mynavi[1].d1text;
// document.querySelector("#sec2").innerHTML = mynavi[2].d1text;
// document.querySelector("#sec3").innerHTML = mynavi[3].d1text;
// document.querySelector("#sec4").innerHTML = mynavi[4].d1text;
for(x=0; x<mynavi.length; x++){
    document.querySelector("#sec0").innerHTML += `<h2>${mynavi[x].d1text}</h2>`;
}


// ========================================================
// document.querySelector("#ek_gnb").innerHTML = "출력" 
// //   =는 대입하다(버리고 받는다)
// document.querySelector("#ek_gnb").innerHTML += "+=는 뒤에 이어서 들어가기"
// document.querySelector("#ek_hd").innerHTML = `새치기 ${document.querySelector("#ek_gnb").innerHTML}`;

// document.body.innerHTML = "" 
// body를 초기화
// document.querySelectorAll("a")[0]
// a태그 중 첫번째만
// document.querySelectorAll("a").item(0)
// a태그 중 첫번째 아이템
