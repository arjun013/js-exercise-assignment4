
function findLarge(){
    reset1();
    re();
    document.getElementById("question").innerHTML="Question 7: Write a JavaScript program that accept two integers and display the larger using findLarge() function."
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    ins.setAttribute("placeholder","First Number");
    ins.removeAttribute("type","text");     
    ins.setAttribute("type","number");
    inn=document.getElementById("answer");
    out=`<br><input type="number" id="num2" placeholder="Second Number"><br>
    <button type="button" onclick="displayLarge();">find large</button>`;
    inn.innerHTML=out;

}

function displayLarge(){
    let answer='';
    ins=document.getElementById("input");
    let num1=parseInt(ins.value);
    let num2=parseInt(document.getElementById("num2").value);
    if (num1!=''&&num2!='') {
        
    
    if(num1>num2){
        answer="Number 1 is the largest of two";

    }else if (num1===num2) {
        answer="Both are equal"
    }else{
        answer="Number 2 is the largest of two";
    }
    res=`<p>Number 1: ${num1}</p><p>Number 2: ${num2} </p>`;
    
    inn.innerHTML=out+res+"<p>"+answer+"</p>";;
    res='';
    ins.value='';
    }   
}