const myModal = new bootstrap.Modal("transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);
//Adicionar lançamento
document.getElementById("transactions-form").addEventListener("submit", function(e) {
    e.presentDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").va;lue
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description: description, date: date

    });

    saveData(data);
    alert("Lançamento adicionado com sucesso!");
    e.target.reset();
    myModal.hide();

});

checklLogged();

function checklLogged(){
    if(session){
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if(logged){
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
        if(dataUser){
            data = JSON.parse(dataUser);
        }
function logout(){
    sessionStorage.getItem("logged");
    localStorage.getItem("session");

    window.location.href = "index.html";
}

function saveData(data){
    localStorage.getItem(data.login, JSON.stringify(data));
}

}

