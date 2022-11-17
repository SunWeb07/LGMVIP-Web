window.onload = function(){
let ArrayValue =[{fname:"Sunny Mawani",mail:"Sunny@mail.com",web_link:"www.sun.com",img_link:"user.png",gender:"male",checkval:["C","C++","JAVA"],}];

if(localStorage.getItem('ObjValue')==null){
    localStorage.setItem('ObjValue',JSON.stringify(ArrayValue));
}
}


GetData=(e)=>{
e.preventDefault();
let Value = {fname:"",mail:"",web_link:"",img_link:"",gender:"",checkval:[],};
 Value.fname = document.getElementById('name').value;
 Value.mail = document.getElementById('email').value;
 Value.web_link = document.getElementById('web-link').value;
 Value.img_link = document.getElementById('img-link').value;




if(document.getElementById('male').checked) {
    Value.gender = "male";
}
else if(document.getElementById('female').checked) {
    Value.gender="female";
}
else {
    Value.gender="";
}

    var markedCheckbox = document.getElementsByName('skills');
 
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
      Value.checkval.push(checkbox.value);  
    }  

let ArrayValue = JSON.parse(localStorage.getItem('ObjValue'));
ArrayValue.push(Value);
localStorage.setItem("ObjValue",JSON.stringify(ArrayValue));

  displayData();
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('web-link').value = "";
document.getElementById('img-link').value = "";
document.getElementById('male').checked = false;
document.getElementById('female').checked = false;
for(var checkbox of markedCheckbox){
    if(checkbox.checked){
        checkbox.checked = false;
    }
}
  
}
document.getElementById('clear').addEventListener('click',()=>{
    document.getElementById('form').reset();
})


displayData = (ArrayValue = undefined)=>{
    let tableData ="";
    let Value;
    if(ArrayValue==undefined){
        Value = JSON.parse(localStorage.getItem('ObjValue'));

    }
    else Value = ArrayValue;
    Value.forEach(function(val){
        let currentRow = `
        <tr class="values" id="value">
        <td>
            <ul>
                <li>
                    <h3>Name: ${val.fname}</h3>
                </li>
                <li>Gender: ${val.gender}</li>
                <li>Mail: ${val.mail}</li>
                <li>Website: ${val.web_link}</li>
                <li>Skills: ${val.checkval}</li> 
            </ul>
        </td>
        <td>

             <img src=${val.img_link} /> 
        </td>
    </tr>`
    tableData+=currentRow;
    });
    document.getElementById('display').innerHTML = tableData; 
}
displayData();