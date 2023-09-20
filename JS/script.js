function edit() {
    var username = document.querySelector("#username");
    username.innerText = "Juanita Perez";
}


function eliminate(element){
    cardListItem = element.closest('.card-list-item');
    connectionRequest = element.closest('.card');
    numRequest = connectionRequest.querySelector('.badge');
    lessNumRequest = numRequest.innerText;
    lessNumRequest --;
    numRequest.innerText = lessNumRequest; 
    cardListItem.remove();
}


function accept(element) {
    myConecctions = document.querySelector('#connections');
    imageContact = element.closest('.card-list-item').querySelector('.avatar-s');
    nameContact = element.closest('.card-list-item').querySelector('span').innerText;
    
    myConecctions.innerHTML += `
        <li class="card-list-item start">
            <img src="${imageContact.src}" alt="${imageContact.alt}" class="avatar-s">
            ${nameContact}
        </li>`;
    numConnections = document.getElementById('numConnections');
    numConnections.innerText ++
    eliminate(element);
}
