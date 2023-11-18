var photo = document.querySelector(".photo")
var like = document.querySelector("#like")
var like_btn = document.querySelector("#btn")
photo.addEventListener("dblclick", function(){
    like.style.transform = 'translate(-50%, -50%) scale(1)';
    like.style.opacity = 0.9;
    setTimeout(function(){
        like_btn.style.color = 'red'
    },300)

    // setTimeout(function(){
    //     like.style.opacity = 0;
    // }, 1000)
    
    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(0)'
    },1000)
})