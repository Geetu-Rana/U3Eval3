document.querySelector("#form").addEventListener("submit",myfunction);
var todolist=[]
function myfunction(){
    event.preventDefault();
    var name =document.querySelector("#name").value;
    var quentity=document.querySelector("#qty").value;
    var prior = document.querySelector("#priority").value;
    var object={
        itemname:name,
        itemquentity:quentity,
        itemprioe:prior,
    };
todolist.push(object)
}localStorage.setItem("tododata",JSON.stringify(todolist));