const UserList=document.querySelector('.users__list')
const UserTemplate=document.querySelector('.users__template').content

//  USER DATA
function Userdata(arr,node){
    node.innerHTML=null
    
    const UserFragment=document.createDocumentFragment()
    
    arr.forEach((row)=>{
        
        const clonedUsertemplate=UserTemplate.cloneNode(true);
        
        clonedUsertemplate.querySelector('.user__item').dataset.userId = row.id;
        clonedUsertemplate.querySelector('.user__username').textContent = row.username;
        clonedUsertemplate.querySelector('.user__id').textContent = row.id;
        clonedUsertemplate.querySelector('.user__name').textContent=row.name;
        clonedUsertemplate.querySelector('.address__street').textContent=row.address.street;
        clonedUsertemplate.querySelector('.address__suite').textContent=row.address.suite;
        clonedUsertemplate.querySelector('.address__city').textContent=row.address.city;
        clonedUsertemplate.querySelector('.address__zipcode').textContent=row.address.zipcode;
        clonedUsertemplate.querySelector('.user__address--location').href='https://www.google.com/maps/place/'+row.address.geo.lat +','+ row.address.geo.lng;
        clonedUsertemplate.querySelector('.company__name').textContent=row.company.name;
        clonedUsertemplate.querySelector('.company__catchPhrase').textContent=row.company.catchPhrase;
        clonedUsertemplate.querySelector('.company__bs').textContent=row.company.bs;
        clonedUsertemplate.querySelector('.user__phone').textContent=row.phone;
        clonedUsertemplate.querySelector('.user__phone').href='tel:'+row.phone;
        clonedUsertemplate.querySelector('.user__website').href=row.website;
        clonedUsertemplate.querySelector('.show--button').textContent='Show';
        
        
        UserFragment.appendChild(clonedUsertemplate)
        
    });
    
    node.appendChild(UserFragment)
}


fetch('https://jsonplaceholder.typicode.com/users/')
.then((response) => response.json())
.then((User) =>{
    Userdata(User,UserList)
})

//   POST DATA
const PostList=document.querySelector('.posts__list')
const PostTemplate=document.querySelector('.posts__template').content;


function Postdata(arr,node){
    node.innerHTML=null
    
    const PostFragment=document.createDocumentFragment()
    
    arr.forEach((row)=>{
        
        const clonedPosttemplate=PostTemplate.cloneNode(true);
        
        clonedPosttemplate.querySelector('.post__title').textContent = row.title;
        clonedPosttemplate.querySelector('.post__body').textContent=row.body;
        
        
        
        PostFragment.appendChild(clonedPosttemplate)
        
    });
    
    node.appendChild(PostFragment)
}

// UserList.addEventListener('click',evt=>{
//     if(evt.target.matches('.show--button')){
        
// function filterPosts(userID, data) {
//     const userPosts = data.filter((post) => {
//         return post.userId == userID;
//     });
//     renderPosts(userPosts, elPostsList);
// }
//     }
// })


// function filterPosts(userID, data) {
//     const userPosts = data.filter((post) => {
//         return post.userId == userID;
//     });
//     renderPosts(userPosts, PostList);
// }
// UserList.addEventListener("click", (evt) => {
//     document.querySelectorAll(".user__item").forEach((li) => {
//         li.style.opacity = "0.5";
//     });
//     const clickedUserId = evt.target.closest("li").dataset.user_id;
//     evt.target.closest("li").style.opacity = "1";
//     // elCommentsList.innerHTML = null;
//     fetchUsers("posts", clickedUserId);
// });


fetch('https://jsonplaceholder.typicode.com/posts/')
.then((response) => response.json())
.then((Post) =>{
    Postdata(Post,PostList)
})


//  COMMENT DATA

const CommentList=document.querySelector('.comments__list')
const CommentTemplate=document.querySelector('.comments__template').content;

function Commentsdata(arr,node){
    node.innerHTML=null
    
    const CommentFragment=document.createDocumentFragment()
    
    arr.forEach((row)=>{
        
        const clonedCommenttemplate=CommentTemplate.cloneNode(true);
        
        clonedCommenttemplate.querySelector('.comment__name').textContent = row.name;
        clonedCommenttemplate.querySelector('.comment__email').textContent=row.email;
        clonedCommenttemplate.querySelector('.comment__body').textContent=row.body;
        
        
        
        CommentFragment.appendChild(clonedCommenttemplate)
        
    });
    
    node.appendChild(CommentFragment)
}

fetch('https://jsonplaceholder.typicode.com/comments?postId=2')
.then((response) => response.json())
.then((comment) =>{
    Commentsdata(comment,CommentList)
})

// async function fetchComments(id) {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/comments?postId=" + id
//     );
//     const data = await response.json();
//     renderComments(data, elCommentsList);
//   } catch (err) {
//     console.log(err, "error");
//   }
// }

// elPostsList.addEventListener("click", (evt) => {
//   const clickedPostId = evt.target.closest("li").dataset.post_id;
//   fetchComments(clickedPostId);
// });