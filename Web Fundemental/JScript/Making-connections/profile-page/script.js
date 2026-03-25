function changeName() {
    document.getElementById("user-name").innerText = "New Name";
}

function removeRequest(id) {
    document.getElementById(id).remove();
    var requests = document.getElementById("request-count");
    requests.innerText = parseInt(requests.innerText) - 1;
}

function acceptRequest(id) {
    document.getElementById(id).remove();
    var requests = document.getElementById("request-count");
    requests.innerText = parseInt(requests.innerText) - 1;
    var connections = document.getElementById("connection-count");
    connections.innerText = parseInt(connections.innerText) + 1;
}