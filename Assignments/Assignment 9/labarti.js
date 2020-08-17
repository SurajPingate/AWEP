
function read()
{
    let a=document.querySelector("#id1").value;
    console.log(a);

    let b=document.querySelector("#id2").value;
    console.log(b);

    let c=document.querySelector("#id3").value;
    c.innerHTML=a+' '+b;

    // let d=document.querySelector("#id3").value;
    // d.innerHTML=b;

    document.querySelector("#id1").value="";
    document.querySelector("#id2").value="";
    





    
}