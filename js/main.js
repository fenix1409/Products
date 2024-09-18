let elList = document.querySelector(".list")
let elPosts = document.querySelector(".posts")
let elComments = document.querySelector(".comments")

function renderNavbar(arr, list, isData){
    if(isData == "users"){
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.className = "w-full p-5 rounded-md"
            elItem.innerHTML = `
            <div class="">
                <h2><span class="text-green-200">Name:</span> ${item.name}</h2>
                <p><span class="text-green-200">Email:</span> ${item.email}</p>
                <a href="tel:${item.phone}"><span class="text-green-200">Number:</span> ${item.phone}</a>
            </div>
        `
        list.appendChild(elItem)
        });
    }
    else if(isData == "posts"){
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.className = "w-full p-5 rounded-md"
            elItem.innerHTML = `
            <div class="">
                <h2><span class="text-green-200">Name:</span> ${item.title}</h2>
                <p><span class="text-green-200">Email:</span> ${item.isData}</p>
                <a href="">${item.body}</a>
            </div>
        `
        list.appendChild(elItem)
    });
    }
    else{
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.className = "w-full p-5 rounded-md"
            elItem.innerHTML = `
            <div class="">
                <h2><span class="text-green-200">Name:</span> ${item.name}</h2>
                <p><span class="text-green-200">Email:</span> ${item.email}</p>
                <a href="tel:${item.phone}"><span class="text-green-200">Number:</span> ${item.phone}</a>
            </div>
        `
        list.appendChild(elItem)
        });
    }
}

function renderFetch(API, lists, isDataValue){
    fetch(API, {
        method: "GET",
        headers:{
            "Content-type":"application/json"
        }
    }).then(res => res.json()).then(data => {
        renderNavbar(data, lists, isDataValue)
    })
}

renderFetch("https://jsonplaceholder.typicode.com/users", elList, "users")
renderFetch("https://jsonplaceholder.typicode.com/comments", elComments,"comments")
renderFetch("https://jsonplaceholder.typicode.com/posts", elPosts, "posts")