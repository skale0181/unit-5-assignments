import "../index.css";
import "../logo.png"

let logo = document.getElementById("logo");
let img = document.createElement("img");
img.src = "logo.png"
logo.append(img)
let btn = document.getElementById("addtolist")
btn.addEventListener("click", function(){

    
        let no = document.getElementById("srno").value
        let task = document.getElementById("task").value
        let status = document.getElementById("status").value
    
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
    
        td1.innerHTML = no
        td2.innerHTML = task
        td3.innerHTML = status
    
        tr.append(td1,td2,td3);
    
        document.querySelector("tbody").appendChild(tr)

});    

