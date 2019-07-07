var e = function(selector){
    return document.querySelector(selector);
}
//给add  button 绑定添加todo事件
var addButton = e('#id-button-add');
addButton.addEventListener('click', function(){
    //获取iput.value
    var todoIuput = e('#id-input-todo');
    var todo = todoIuput.value;
    var todoContainer = e('#id-div-container');
    var t = templateTodo(todo);
    //这个方法用来添加元素
    //第一个参数'beforeend'意思是放在最后 t
    todoContainer.insertAdjacentHTML('beforeEnd', t);
});
//上面添加内容的方法是需要定义的
var templateTodo = function(todo){
    //点击事件所引动的js添加数据
    var t = ` 
    <div id='id-todo'>
    <button type="button" id="id-button-fin" name="button" class="todo-dono">完成</button>
    <button type="button" id="id-button-del" name="button" class="todo-delete">删除</button>
    <span contenteditable="true">${todo}</span>
    </div>
    `;
  return t;
};
