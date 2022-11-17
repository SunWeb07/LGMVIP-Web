var arr=[];

function addList(arr){

    let uldata="";
    arr.forEach(function (val, index) {
      let currentlist = `<li >
      
      
      
      <p>${val}</p>
      <i class="fa fa-trash" onclick="deleteTodo(${index});"></i>    
      
      </li>`;
  
      uldata += currentlist;
    });
    document.getElementById('list-add').innerHTML=uldata;

    pendingSection(arr);
  }

  addList(arr);

getdata = (e)=>{
    e.preventDefault();
    let value = document.getElementById('value').value;
    if(value == "")
    alert("Input filed is empty")
    else {
        arr.push(value);
        addList(arr);
        

    }
    document.getElementById('formt').reset();
  }
  function deleteTodo(index){
    arr.splice(index,1);
    addList(arr);
  
  }

  function pendingSection(arr){

    if(arr.length==0)
    document.getElementById('pending').innerHTML='You have no Task pending';
    else document.getElementById('pending').innerHTML='You have ' + arr.length+ ' Tasks pending';
  }
  
  var list = document.querySelector('#list-add');
  var checkedOne = 0;
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);