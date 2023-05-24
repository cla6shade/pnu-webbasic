const WRONG_PASSWORD = 0;
const WRONG_ID_PASSWORD = -1;


function getLogin() {
    const idInput = document.getElementById("id");
    const pwInput = document.getElementById("password");
    
    let matchRes = match(idInput.value, pwInput.value);
    switch(matchRes){
        case true:
            location.href = 'welcome.html';
            break;
        case WRONG_ID_PASSWORD:
            alert("check your id again!");
            break;
        case WRONG_PASSWORD:
            alert("wrong password!");
            break;
    }
}

function match(id, password){    
    let accounts = [
        {id: 'kim', password: '123'},
        {id: 'lee', password: '456'},
        {id: 'park', password: '789'}
    ];
    for(let account of accounts){
        if(account.id === id){
            if(account.password === password){
                return true;
            } else {
                return WRONG_PASSWORD;
            }
        }
    }
    return WRONG_ID_PASSWORD;
}