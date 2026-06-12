
console.log("Insta clone running...");
function like(btn) {
    let likeText = btn.parentElement.querySelector(".likes");
    let count = parseInt(likeText.innerText);

    likeText.innerText = (count + 1) + " likes";
}
