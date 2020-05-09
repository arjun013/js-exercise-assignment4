
function caseAlter(){
     re(); 
     reset1();
     document.getElementById("question").innerHTML="Question 3:Write a JavaScript program which accept a string as input and swap the case of each character."
     ins=document.getElementById("input");
     ins.removeAttribute("hidden","true");
     ins.setAttribute("placeholder","Enter string");
     inn=document.getElementById("answer");
     out=`<button type="button" onclick="reverse();">Reverse</button>`;
     inn.innerHTML=out;
     

}

function reverse(){
    if (ins.value.trim()!='') {
        
    
    res='';
    let content=ins.value;
    let len=(ins.value.length);
    for (let i = 0; i < len; i++) {
        let x= content.substring(i,i+1);
        if (/[a-z]+/.test(x)) {
            x=x.toUpperCase();
            

        }
        else{
            x=x.toLowerCase();
            
        }
        arr[i]=x;
        res=res+`${arr[i]}`;
    }
    inn.innerHTML=out+"<p>Case Reversed String : "+res+'</p>';
}
}