let elList = document.querySelector(".list")
let elPosts = document.querySelector(".posts")
let elComments = document.querySelector(".comments")
let elInput = document.querySelector(".search-input")
let elInput2 = document.querySelector(".search-input2")
let elInput3= document.querySelector(".search-input3")


let usesrData = []
let postsData = []
let commentsData = []


function renderNavbar(arr, list, isData){
    if(isData == "users"){
        elList.innerHTML = null
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
        elPosts.innerHTML = null
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
        elComments.innerHTML = null
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
        if (isDataValue === "users") {
            usersData = data;
          } else if (isDataValue === "posts") {
            postsData = data;
          } else {
            commentsData = data;
          }
        renderNavbar(data, lists, isDataValue)
    })
}

renderFetch("https://jsonplaceholder.typicode.com/users", elList, "users")
renderFetch("https://jsonplaceholder.typicode.com/comments", elComments,"comments")
renderFetch("https://jsonplaceholder.typicode.com/posts", elPosts, "posts")



// search part 
function filterUsers() {
  const query = elInput.value.toLowerCase();
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(query)
  );
  renderNavbar(filteredUsers, elList, "users");
}

function filterPosts() {
  const query = elInput2.value.toLowerCase();
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(query)
  );
  renderNavbar(filteredPosts, elPosts, "posts");
}

function filterComments() {
  const query = elInput3.value.toLowerCase();
  const filteredComments = commentsData.filter((comment) =>
    comment.name.toLowerCase().includes(query)
  );
  renderNavbar(filteredComments, elComments, "comments");
}


elInput.addEventListener("input", filterUsers);
elInput2.addEventListener("input", filterPosts);
elInput3.addEventListener("input", filterComments);