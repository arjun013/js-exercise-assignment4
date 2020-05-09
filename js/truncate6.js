
function truncate(){
    reset1();
    re();
    document.getElementById("question").innerHTML="Question 6: Write a JavaScript function to truncate a string if it is longer than the specified number of characters."
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    ins.setAttribute("placeholder","Enter a String");
    inn=document.getElementById("answer");
    out=`<br><input type="number" id="length" placeholder="maximum length"><br>
    <button type="button" onclick="cutString();">truncate</button>`;
    inn.innerHTML=out;

}
function cutString(){
    let strlen=document.getElementById("length").value;
    if (strlen!=''&&ins.value!='') {
        res=`<p>Truncated String of Length ${strlen} :`+ins.value.substring(0,strlen)+"</p>";
        out=out+res;
        inn.innerHTML=out;


    }
}