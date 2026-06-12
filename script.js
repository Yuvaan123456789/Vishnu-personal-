// Like Button + Heart Animation

function like(btn){

```
let likes =
btn.parentElement.querySelector(".likes");

let count =
parseInt(likes.innerText);

likes.innerText =
(count + 1) + " likes";

btn.classList.add("active");

setTimeout(()=>{
    btn.classList.remove("active");
},300);
```

}

// Full Screen Image

function openImage(img){

```
document.getElementById("modal")
.style.display="flex";

document.getElementById("modalImg")
.src=img.src;
```

}

function closeImage(){

```
document.getElementById("modal")
.style.display="none";
```

}

// Dark Mode

function toggleDarkMode(){

```
document.body.classList.toggle("dark-mode");
```

}

// Search Photos

function searchPosts(){

```
let input =
document.getElementById("searchInput")
.value.toLowerCase();

let posts =
document.querySelectorAll(".post");

posts.forEach(post=>{

    let text =
    post.innerText.toLowerCase();

    if(text.includes(input)){
        post.style.display="block";
    }else{
        post.style.display="none";
    }

});
```

}

// Comments

function addComment(btn){

```
let commentBox =
btn.parentElement.querySelector(".comment-input");

let commentList =
btn.parentElement.querySelector(".comment-list");

if(commentBox.value.trim()!==""){

    let li =
    document.createElement("li");

    li.innerText =
    "💬 " + commentBox.value;

    commentList.appendChild(li);

    commentBox.value="";
}
```

}

// Upload Image

function uploadImage(event){

```
let file =
event.target.files[0];

if(!file) return;

let imageURL =
URL.createObjectURL(file);

let gallery =
document.getElementById("gallery");

let post =
document.createElement("div");

post.className="post";

post.innerHTML=`

<div class="post-header">
    📸 Uploaded Photo
</div>

<img src="${imageURL}"
     onclick="openImage(this)">

<div class="actions">

    <button onclick="like(this)"
            class="like-btn">

        ❤️ Like

    </button>

    <span class="likes">
        0 likes
    </span>

    <a href="${imageURL}"
       download>

       📥 Download

    </a>

</div>

<div class="comments">

    <input
    type="text"
    class="comment-input"
    placeholder="Write comment...">

    <button
    onclick="addComment(this)">
    Post
    </button>

    <ul class="comment-list"></ul>

</div>

`;

gallery.prepend(post);
```

}

// Upload Video

function uploadVideo(event){

```
let file =
event.target.files[0];

if(!file) return;

let videoURL =
URL.createObjectURL(file);

let gallery =
document.getElementById("gallery");

let post =
document.createElement("div");

post.className="post";

post.innerHTML=`

<div class="post-header">
    🎥 Uploaded Video
</div>

<video controls>

    <source
    src="${videoURL}"
    type="video/mp4">

</video>

<div class="actions">

    <button onclick="like(this)"
            class="like-btn">

        ❤️ Like

    </button>

    <span class="likes">
        0 likes
    </span>

    <a href="${videoURL}"
       download>

       📥 Download

    </a>

</div>

<div class="comments">

    <input
    type="text"
    class="comment-input"
    placeholder="Write comment...">

    <button
    onclick="addComment(this)">
    Post
    </button>

    <ul class="comment-list"></ul>

</div>

`;

gallery.prepend(post);
```

}
