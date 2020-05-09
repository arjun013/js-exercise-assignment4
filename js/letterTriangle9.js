
function letterTriangle(){
    reset1();
    re();
    document.getElementById("question").innerHTML=`Question 9: Write a JavaScript program to print the letters of the word “Javascript” as below in
    each line using for…of.
    <h3>J </h3><h3>Ja </h3><h3>Jav </h3><h3>------ </h3><h3>Javascript </h3>`;
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="triangle();">Generate</button>`;
    inn.innerHTML=out;
    out="<h3><u>The output</u> </h3><br>";
    
}
let text="Javascript";
function triangle(){
    let answer='';
    for(let x of text){
        answer=answer+" "+x;
        res=res+`<h3>${answer}<h3>`
        
    }
    inn.innerHTML=out+res;
}