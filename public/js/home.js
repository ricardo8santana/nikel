const myModal = new bootstrap.Modal("transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);

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

}

