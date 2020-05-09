function starTriangle(){
    reset1();
    re();
    document.getElementById("question").innerHTML=`Question 10: Write a JavaScript program to construct the following pattern, using a nested for
    loop(6 lines).
    <h3>* </h3><h3>* * </h3><h3>* * * </h3><h3>* * * *</h3>`;
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="triangle2();">Generate</button>`;
    inn.innerHTML=out;
    out="<h3><u>The output</u> </h3><br>";
    
}

function triangle2(){
    
    for (let i = 1; i <= 6; i++) {
        let lines='';
         
        for (let j = 1; j <= i; j++) {
            lines=lines+"* ";
                      
        }
        res=res+"<h3> "+lines+"</h3>"
        
    }
    out=out+res;
    inn.innerHTML=out;
}