let inputs=document.getElementById("input");
let text=document.getElementById("text");

function Add(){
    if (inputs.value ==""){
        alert=" Please Enter The Value";

    }else{
       let newEle=document.createElement("ul");
       newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-delete-left"></i>`;
       text.appendChild(newEle);
       inputs.value="";
       newEle.querySelector("i").addEventListener("click",remove)
        function remove(){
            newEle.remove()
        }
       
    }
}
