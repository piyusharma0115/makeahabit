function inc(){
    var ele=document.getElementById('num1');
    var value=ele.innerHTML;
    ++value;

    console.log(value);
    document.getElementById('num1').innerHTML=value;
} 
function dec(){
    var qk=document.getElementById('num1');
    var qt=qk.innerHTML;
    qt=0;
    document.getElementById('num1').innerHTML=qt;
}