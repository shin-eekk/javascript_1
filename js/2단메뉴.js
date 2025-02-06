const mynavi =  [
    {
        d1text : "계획짜기",
        d1herf : "makeplan.html",
        d1cls : "makeplan",
        d2navi : [
            {
                d2text : "MY FEEL:TER",
                d2herf : "feelter.html",
                d2cls : "feelter"
            },
            {
                d2text : "MD추천",
                d2herf : "md.html",
                d2cls : "md"
            },
            {
                d2text : "BEST후기",
                d2herf : "bestreview.html",
                d2cls : "bestreview"
            }
        ]
    },  
    {
        d1text : "트립톡",
        d1herf : "triptalk.html",
        d1cls : "triptalk",
        d2navi : [
            {
                d2text : "동행구하기",
                d2herf : "mate.html",
                d2cls : "mate"
            },
            {
                d2text : "후기 둘러보기",
                d2herf : "review.html",
                d2cls : "review"
            },
            {
                d2text : "계획 둘러보기",
                d2herf : "plan.html",
                d2cls : "plan"
            }
        ]
    },
    {
        d1text : "이벤트",
        d1herf : "event.html",
        d1cls : "event",
        d2navi : [
            {
                d2text : "기획전",
                d2herf : "promote.html",
                d2cls : "promote"
            },
            {
                d2text : "쿠폰팩",
                d2herf : "coupon.html",
                d2cls : "coupon"
            }
        ]
    },
    {
        d1text : "마이페이지",
        d1herf : "mypage.html",
        d1cls : "mypage",
        d2navi : [

        ]
    },
    {
        d1text : "고객센터",
        d1herf : "cs.html",
        d1cls : "cs"
        d2navi : [
            
        ]
    }

]

//객체를 저장한다
const targetul = document.querySelector("#ek_gnb");  //목적지 태그
let ullist = ""; //태그수집하기 변수선언

// mynavi 의 길이만큼
for(x=0; x<mynavi.length; x++){
    ullist += `<li class="${mynavi[x].d1cls}"><a href="${mynavi[x].d1href}">
        ${mynavi[x].d1text}
    </a>`;
    if( mynavi[x].d2navi.length > 0){
        ullist += `<ul class="d2ul">
            <li>
                <a href="${mynavi[x].d2navi[0].d1href}">${mynavi[x].d2navi[0].d1text}</a>
            </li>
        </ul>`;
    }
   
   ullist += `</li>`;
}
targetul.innerHTML = ullist;



