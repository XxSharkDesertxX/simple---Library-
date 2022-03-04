// in the name of god ==> end practice dom and book project 

// variablse
const inputText = document.querySelector(".add_book");
const link = document.querySelector(".add_btn");
const ul =document.querySelector("ul");
const deletes = `<span class="delete"> Delete </span> `;
const chekbox = document.querySelector(".checkboxs");
const serch = document.querySelector(".header_body_search");

// hidden object
chekbox.addEventListener("change",function (e) {
    const title_main =document.querySelector(".main_titles");
    if(chekbox.checked){
        ul.style.display="none";
        title_main.style.display="none";    
    }else{
        ul.style.display="block";
        title_main.style.display="inherit";
    }
    e.preventDefault();
});

// add book 
link.addEventListener("click",function (e) {
    const spnaName = document.createElement("span");
    spnaName.className="name_book";
    spnaName.textContent=inputText.value;

    const li =document.createElement("li");
    li.className="book_item";
    li.appendChild(spnaName);
    li.innerHTML+= deletes;

    ul.appendChild(li);
    storTolocalStorage(inputText.value);
    inputText.value=null;
    e.preventDefault();
});

// Delete item 
ul.addEventListener("click",function (e) {
    if(e.target.className=== "delete"){
        e.target.parentElement.remove();
        removeFromLocalStorage( e.target.parentElement.childern[0].textContent);
    }
    e.preventDefault(); 
});

// local storages
document.addEventListener("DOMContentLoaded",function (e) {
    if(localStorage.getItem('takes') === null){
        takes =[];
    }else{
        takes= localStorage.getItem("takes").split(",");
    }
    for(let i of takes){
        const spnaName = document.createElement("span");
        spnaName.className="name_book";
        spnaName.textContent=i;
        const li =document.createElement("li");
        li.className="book_item";
        li.appendChild(spnaName);
        li.innerHTML+= deletes;
        ul.appendChild(li);
    }    
});
function storTolocalStorage(task) {
    let takes;
    if(localStorage.getItem('takes') === null){
        takes =[];
    }else{
        takes= localStorage.getItem("takes").split(",");
    }
    takes.push(task);
    localStorage.setItem("takes",takes);
}

function removeFromLocalStorage(task) {
    let takes;
    if(localStorage.getItem('takes') === null){
        takes =[];
    }else{
        takes= localStorage.getItem("takes").split(",");
    }

    for(let i=0; i<takes.length; i++){
        if(takes[i] === task){
            takes.splice(i,1);
        }
    }

    if(takes.length=== 0 ){
        localStorage.clear();
    }else{
        localStorage.setItem("takes",takes);
    }

    localStorage.setItem("takes",takes);
}


// serch in items
serch.addEventListener("keyup",function (e) {
    
    for(let i of ul.children){
        if(i.firstChild.textContent.indexOf(serch.value) !== -1){
            i.style.display = "flex";
            i.style.flex.justifycontent="spacebetwen";
        }else{
            i.style.display="none";
        }
    }

    e.preventDefault();
});