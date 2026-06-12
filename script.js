function like(btn){
    let likes = btn.parentElement.querySelector(".likes");
    let count = parseInt(likes.innerText);
    likes.innerText = (count + 1) + " likes";
}

function openImage(img){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeImage(){
    document.getElementById("modal").style.display = "none";
}
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}
