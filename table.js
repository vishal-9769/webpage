let fname;
let lname;
/* function getData(){
    fname=document.getElementById('fname').value;
    lname=document.getElementById('lname').value;

   

} */

function createTable(){
 
   
    let table=document.getElementById("tab");
    let btn1=document.createElement("input");
    let btn2=document.createElement("input");
    btn1.type="button";
    btn2.type="button";
    btn1.value="Edit";
    btn2.value="Delete"; 
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById('fname').value; 
    cell2.innerHTML = document.getElementById('lname').value;
    cell3.appendChild(btn1); 
    cell4.appendChild(btn2);
 /*




    let row =document.getElementById("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("button");
    let td4=document.createElement("button");
    td1.innerHTML=document.getElementById('fname').value;
    td2.innerHTML=document.getElementById('lname').value;
    td3.innerHTML="Edit"
    td4.innerHTML="Delete"

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

     table.children[0].appendChild(row);
     
   /*
    table.children[1].appendChild(td2);
    table.children[2].appendChild(td3);
    table.children[3].appendChild(td4); */
/* 

    
    td1.appendChild;
    td2.appendChild;
    td3.appendChild;
    td4.appendChild;
   // table.children[0].appendChild();
    i++;
  /*   for( let i=0; i<2 ; i++)
    {
         tab.insertRow(i);
    }
   */  
}

