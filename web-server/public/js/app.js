console.log("This is from js/app.js file");

const postsMsg = document.querySelector('#posts');

// fetch('https://jsonplaceholder.typicode.com/posts').then((response => {
//     response.json().then(data => {
//         data.forEach(post => {
//             postsMsg.textContent += post.title + " "
//         })
//     })
// }))

fetch('/weather').then((response => {
    response.json().then(data => {
        data.forEach(post => {
            postsMsg.textContent += post.title + " "
        })
    })
}))