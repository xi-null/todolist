let todoList = document.getElementsByTagName('ul')[0];
let a=document.getElementsByClassName('location')[0]
let cancel=document.getElementById('cancel')
let confirm=document.getElementById('confirm')
let inputElement = document.getElementById('content');
let buttonElement = document.getElementsByTagName('button')[0];
// let todos = JSON.parse(localStorage.getItem('todos'));  // todos数组保存待办项
let todos = [];  // todos数组保存待办项
if (JSON.parse(localStorage.getItem('todos')) != null) {  // 如果本地存储中有数据,则读取数据
    todos = JSON.parse(localStorage.getItem('todos'));
} else { // 否则如果本地存储中不存在todos，则创建一个空数组，并将其保存到本地存储中
    todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
}
function addNew(content){
    let item = document.createElement('li');
    item.title=todos.length+1;
    item.innerHTML= content + "<div></div>";
    item.style = "width:230px;word-break:break-all"
    item.className='a'+todos.length;
    addNewButton(item);
    todoList.appendChild(item);
    todos.push({id:todos.length+1,value:content,title1:'a'+todos.length});
    save();
}

function addNewButton(item){
    let container = document.createElement('span');
    let container1 = document.createElement('span');
    container.className = 'iconfont icon-shanchu';
    container.style = "margin-left:180px"
    container1.className = 'iconfont icon-bianji';
    container1.title=todos.length+1
    item.appendChild(container);
    item.appendChild(container1);
}

function save(){
    localStorage.setItem('todos',JSON.stringify(todos)); 
}

function reLoad(){//刷新重置数据
    if(JSON.parse(localStorage.getItem('todos'))==null){
        let ii=[{id:'无',value:"无",title1:"无"}]
        localStorage.setItem('todos',JSON.stringify(ii));
    }
    todos.forEach((content) => {
        let item = document.createElement('li');
        item.style = "width:230px;word-break:break-all"
        item.innerHTML = content.value + "<div></div>";
        item.title = content.id;
        item.className = content.title1;
        addNewButton(item);
        todoList.appendChild(item);
    });
}

function reMove(item){//判断名字删除
    item.parentNode.remove();
    console.log(item.parentNode.innerText.trim())
    todos.forEach((content, index) => {
        if(item.parentNode.innerText.trim() == content.value){
            todos.splice(index, 1);  // splice方法 删除index开始的 1项
        }
    })

    save();
}

reLoad(); 

buttonElement.addEventListener('click', () =>{
    if(inputElement.value){
        addNew(inputElement.value.trim());
        inputElement.value = '';
    }
},false)

inputElement.addEventListener('keyup', (event) =>{//回车直接输入
    console.log(event); 
    if(event.keyCode == 13 && inputElement.value){ 
        addNew(inputElement.value.trim());
        inputElement.value = '';
    }
})

todoList.addEventListener('click',(event)=>{//判断点击跟修改
    if(event.target.className == 'iconfont icon-shanchu'){
        reMove(event.target);
    }
    if(event.target.className == 'iconfont icon-bianji'){
        let num=event.target.parentNode.title
        a.style.visibility='visible'
        confirm.addEventListener('click',()=>{//修改
            let c = document.getElementById('value').value
            if(c==''){
                alert('不能为空')
            }else{
                todos.map((item,index)=>{
                    if(item.id==num){
                        todos[index]={id:item.id,value:c,title1:'a'+item.id}
                        save()
                        window.location.reload()
                        a.style.visibility='hidden'
                    }
                })
            }
            console.log(todos)

        })
    }
},false)

cancel.addEventListener('click',(event)=>{
    a.style.visibility='hidden'
})

