let fname;
let lname;

 let arr=[{firstname : "Vishal", lastname : "Vyas"},
{firstname : "Mehul", lastname : "Gajera"},
{firstname : "Utsav", lastname : "Mevada"},
{firstname : "Chirag", lastname : "Prajapati"},
{firstname : "Gunjan", lastname : "Parekh"},
{firstname : "Pratik", lastname : "Makadia"},
{firstname : "Abhi", lastname : "Soni"},
{firstname : "Sarthak", lastname : "Shah"},
{firstname : "Harshvardhan", lastname : "Rajpurohit"},
{firstname : "Rushi", lastname : "Bhagat"},
] /*

let arr=["Vishal","Vyas",
"Mehul", "Gajera", 
"Utsav" ,"Mevada",
 "Chirag", "Prajapati",
  "Gunjan","Parekh",
   "Pratik",  "Makadia", 
   "Abhi" ,"Soni",
"Sarthak","Shah",
"Harshvardhan", "Rajpurohit",
 "Rushi", "Bhagat"
]

/* function getData(){
    fname=document.getElementById('fname').value;
    lname=document.getElementById('lname').value;

   

} */
let btn1;
let btn2;
let cell1;
let cell2;
function createTable(){
 
   
    let table=document.getElementById("tab");
     btn1=document.createElement("input");
     btn2=document.createElement("input");
    btn1.type="button";
    btn2.type="button";
    btn1.value="Edit";
    btn2.value="Delete"; 
    let row = table.insertRow(-1);
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById('fname').value; 
    cell2.innerHTML = document.getElementById('lname').value;
    cell3.appendChild(btn1); 
    cell4.appendChild(btn2);
  
   
btn1.id="ed";
   btn2.setAttribute("onclick", "Remove(this);");  
  btn1.setAttribute("onclick","Edit(this);");
document.getElementById("add").innerHTML="Add";

document.getElementById('fname').value = "" ;
document.getElementById('lname').value = "";
  }
  let i=0;
function gid(){
  
  createTable();
  
  
  cell1.id="t"+i;
  i++;
  cell2.id="t"+i;
  i++;
  }
function Remove(button) {
  //Determine the reference of the Row using the Button.
  var row = button.parentNode.parentNode;
  var name = row.getElementsByTagName("td")[0].innerHTML;
  

      //Get the reference of the Table.
      var table = document.getElementById("tab");

      //Delete the Table row using it's Index.
      table.deleteRow(row.rowIndex);
      document.getElementById("add").innerHTML="Add";
      i=0;
};

function Edit(button) {
  //Determine the reference of the Row using the Button.
  //var row = button.parentNode.parentNode;
 /*  document.getElementById('fname').innerText= document.getElementById("t1").value ;
  document.getElementById('lname').innerText = document.getElementById("t2").value; */
  /* let f=row.getElementsByTagName("td")[0].value;
  let l=row.getElementsByTagName("td")[1].value;
  alert(f);
  alert(l);          
   */

 let a=cell1.value;;
alert(a);
document.getElementById("add").innerHTML="Update";
  
  /* var row = button.parentNode.parentNode;
  var name = row.getElementsByTagName("td")[0].innerHTML;
  

      //Get the reference of the Table.
      var table = document.getElementById("tab");

      //Delete the Table row using it's Index.
      table.deleteRow(row.rowIndex); */
  
};

function AddRow(f,l){
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
    cell1.innerHTML = f; 
    cell2.innerHTML = l;
    cell3.appendChild(btn1); 
    cell4.appendChild(btn2);
 

   btn2.setAttribute("onclick", "Remove(this);");  
  btn1.setAttribute("onclick","Edit(this);");
  
  
}
function render(){
for (var i = 0; i < arr.length; i++) {
  AddRow(arr[i].firstname,arr[i].lastname);
}
}
