
function objectSort(){
    re(); 
    reset1();
    document.getElementById("question").innerHTML="Question 8: Write a JavaScript program using for…in to read the objects from an array entered by an user and to arrange it in alphabetical order."
    ins=document.getElementById("input");
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="sort();">sort</button>`;
    
    arr=[
        {
            name:"Sachin",
            number:10,
            designation:"batsman"
        },
        {
            name:"Dhoni",
            number:7,
            designation:"captain" 
        },
        {
            name:"Virat",
            number:18,
            designation:"batsman" 
        },
        {
            name:"Zaheer",
            number:11,
            designation:"fast bowler" 
        },
        {
            name:"Yuvraj",
            number:12,
            designation:"all rounder" 
        },
        {
            name:"Ashwin",
            number:24,
            designation:"spin bowler" 
        }
        
    ]
    let original="<br><br>ORGINAL ARRAY OF OBEJCTS<br>";
    for (const iterator of arr) {
        original=original+'{<br>'
        for (const key in iterator) {
            original=original+`${key} :${iterator[key]}  `;
        }
        original=original+"<br>}<br>"
    }
    inn.innerHTML=out+"<h3>"+original+"</h3>";
}
function sort(){
    let temp=[];
    let dupe=[];
    dupe = arr.map((x) => x);
    for (const iterator of dupe) {
        temp.push(iterator.name)
    }
    temp=temp.sort();
    for (let i = 0; i < dupe.length; i++) {
        for (const iterator of dupe) {
            if (temp[i]===iterator.name) {
                let x=dupe.indexOf(iterator);
                let swap=dupe[i];
                dupe[i]=dupe[x];
                dupe[x]=swap;

            }
        }
        
        
    }
    let original="ORGINAL ARRAY OF OBEJCTS<br>";
    for (const iterator of arr) {
        original=original+'{<br>'
        for (const key in iterator) {
            original=original+`${key} :${iterator[key]}  `;
        }
        original=original+"<br>}<br>"
    }
    let sorted="<br><br>ARRAY OF OBEJCTS-SORTED BY NAME<br>";
    for (const iterator of dupe) {
        sorted=sorted+'{<br>'
        for (const key in iterator) {
            sorted=sorted+`${key} :${iterator[key]}  `;
        }
        sorted=sorted+"<br>}<br>"
    }
    inn.innerHTML="<h3>"+original+sorted+"</h3>";
}