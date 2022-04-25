// Store the wallet amount to your local storage with key "amount"

let amount = localStorage.getItem("amount")|| [];

function wallet(){
    var wlt = document.getElementById("wallet").innerText;

    let amt = document.getElementById("amount").value;
     
    total = eval(Number(wlt)+Number(amt))

    
    localStorage.setItem("amount",JSON.stringify(total));

    window.location.reload();
}

document.getElementById("wallet").innerText = amount;

function moviespage(){
    window.location.href ="movies.html";
}

 
