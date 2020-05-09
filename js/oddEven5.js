
function oddEven(){
    reset1();
    re();
    document.getElementById("question").innerHTML="Question 5: Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.";
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="runOddEven();">Generate</button>`;
    inn.innerHTML=out;
    out="<h3><u>The output</u> </h3><br>";
}
function runOddEven(){
    for (let i = 0; i <=15; i++) {
        if(i%2==0){
            out=out+`<p>${i}    : Even</p>`

        }else{
            out=out+`<p>${i}    : Odd</p>`
        }

        
    }
    inn.innerHTML=out;
}