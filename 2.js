function Submit(){
    var x = document.querySelector("#id1").value;
    var y = document.querySelector("#id2").value;
    if(x==""){
        alert("Please Enter Username")
        return false;
    }

    else if(y==""){
        alert("Please Enter Password")
        return false;
    }

    else{
        const newElement = document.createElement("div");
        newElement.textContent= "Username :"+ x;

        const newElement1 = document.createElement("div");
        newElement1.textContent="Password :"+ y;

        const output = document.querySelector("#Output");
        // output.appendChild(newElement);
        output.insertBefore(newElement1,output.firstChild);
        output.insertBefore(newElement,output.firstChild);

        document.querySelector("#id1").value="";
        document.querySelector("#id2").value="";
    }
}