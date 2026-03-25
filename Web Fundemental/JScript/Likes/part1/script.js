var likes = 3;

function addLike() {
    likes++;
    document.getElementById("like-count").innerText = likes + " like(s)";
}