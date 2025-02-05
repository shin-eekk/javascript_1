const mymenu = [
    { 
        d1text : "메뉴1",
        d1href : "menu1.html",
        d1class : "menucss"
    
    },
    { 
        d1text : "메뉴2",
        d1href : "menu2.html",
        d1class : ""
    
    },
    { 
        d1text : "메뉴3",
        d1href : "menu3.html",
        d1class : ""
    
    }
]

const targetul = document.querySelector("#복습");
let ullist = "";


for(x=0; x<mymenu.length; x++){
    ullist += `<li><h2><a href="${mymenu[x].d1href}">${mymenu[x].d1text}</a></h2></li>`;
}

targetul.innerHTML = ullist;

for(x=0; x<mymenu.length; x++){
    document.querySelector("#sec0").innerHTML += `<h2>${mymenu[x].d1text}</h2>`;
}

// document.querySelector("#sec0").innerHTML = `<h3>${mymenu[0].d1text}</h3>`;