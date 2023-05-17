const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name1 = document.querySelector("#name")
const date = document.querySelector("#date");
const card = document.querySelector(".card");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1200)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = "Apple mı İBM mi ?"
    excerpt.innerHTML = "Apple dünyanın en büyük şirketidir ama ibm hahahahahaha";
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    name1.innerHTML = "Hüseyin Aydın";
    let tarih = new Date().getFullYear();
    date.innerHTML = tarih;

    animated_bg.forEach((item)=>{
        item.classList.remove("animated-bg");
    })
    animated_bg_text.forEach((item)=>{
        item.classList.remove("animated-bg-text");
    })
}