function re(){  // clear things on screen ,applicable in all js files
    document.getElementById("result").innerHTML=`<h3 id="question"></h3><br>
    <input id="input" type="text" hidden=true><br>
    <div id="answer"></div>`;
}


let arr=[];
let index=0;
var ins=document.getElementById("input");
var out='';
let inn=document.getElementById("answer");
function reset1(){
    out='';
    arr=[];
    index=0;
    res='';
}

function arrayPrime(){
        reset1();
        re();
        document.getElementById("question").innerHTML="Question 1: Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not."
        ins=document.getElementById("input");
        ins.removeAttribute("hidden","true");
        ins.setAttribute("placeholder","Enter a positive integer");
        ins.removeAttribute("type","text");     
        ins.setAttribute("type","number");
        inn=document.getElementById("answer");
        out=`<button type="button" onclick="arrayAdd();">push</button>`;
        inn.innerHTML=out;
}
function arrayAdd(){
    
    if(( ins.value)!=''){
        arr[index]=parseInt(ins.value);
        
        if (index===0) {//checking first Number Prime
            let isPrime="Prime";
            for (let i = 2; i <= parseInt(ins.value)/2; i++) {
                if (parseInt(ins.value)%i===0) {
                    isPrime="Not Prime";
                    break;
                }
                
            }
            if (arr[index]==0||arr[index]==1) {
                isPrime="Not Prime";
            }
            out=out+`<p>The First Number (${arr[index]}) is ${isPrime}<p> <p>The array is </p>`;
            
        }

        out=out+`${arr[index]}   `
        inn.innerHTML=out;
        index++;
        ins.value='';
    }
}