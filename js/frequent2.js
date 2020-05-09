


function frequent(){
   re(); 
   reset1();
   document.getElementById("question").innerHTML="Question 2: Write a JavaScript program to find the most frequent item of an array."
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    ins.setAttribute("placeholder","Enter array element");
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="arrayAdd2();">push</button><button type="button" onclick="ans2();">find</button>`;
    inn.innerHTML=out;
}
let res='';
function arrayAdd2(){
    
    if(( ins.value)!=''){
        arr[index]=(ins.value);
        if (index===0) {
            res=res+`<p>The array is <p>`
        }
        

        res=res+`${arr[index]}   `
        inn.innerHTML=out+res;
        index++;
        ins.value='';
    }
}

function ans2(){
    if (arr.length>0) {
        let repeat=[];
        let repetition=0;
   for (let i = 0; i < arr.length; i++) {
       const element = arr[i];
       repeat[i]=0;
       for (let j = i; j < arr.length; j++) {
           const element2 = arr[j];
           if(element===element2){
               repeat[i]++;
           }
        }
        if(repeat[i]>repetition){
            repetition=repeat[i];
        }       
   }
    res=res+`<p>Most frequent= `;
    for (let i = 0; i < arr.length; i++) {
        if (repeat[i]===repetition){
            res=res+" "+arr[i];
        }
        
    }
    ins.setAttribute("hidden","true")
    res=res+"</p>"
    inn.innerHTML=res;
    
    }
}