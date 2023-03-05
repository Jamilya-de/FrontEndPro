async function getUserData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userData.json();
    console.log(user);

    const data = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    const posts = await data.json();
    const sum = posts.reduce((acc, post) => acc + post.id, 0)
    console.log(sum);
   
    
    const commentsId = prompt('Give me post Id')
    const commentsData = await fetch('https://jsonplaceholder.typicode.com/posts/{id}/comments')
    const comments = await commentsData.json();
    console.log(comments)
    // как привязать commentsId к commentsData?

    document.write('author: ' + user.name + '<br>');
    document.write(sum)
    document.write(comments)
}

getUserData();

