
// Blog post data, can be retrieved from local storage
const blogPosts = [
  {
    title: "Site updating",
    date: "2024-10-26",
    content: "Hey just so for the curious viewer, I'm currently updating all of my code, and I've taken down all my blogs that absolutely no one read. But, don't panic, in a couple of days they should be up and running. I'm in the process of setting things up so it's semi-automated.<br><br> In the mean time, enjoy an image of a cat from an old <a href=\"https://cat-chitchat.pictures-of-cats.org/p/the-author-of.html\", target=\"_blank\">blog</a>:<br><br><br><img src=\"https://pictures-of-cats.org/wp-content/uploads/2020/05/Omar1.jpg\" width=\"400\">",
  }
];


function renderBlogPosts() {
  const container = document.getElementById("blog-container");
  const template = document.getElementById("post-template").content;
  const blogContainer = document.getElementById('blog-posts');

  blogPosts.reverse().forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title + ' - ' + post.date;

    const contentElement = document.createElement('p');
    contentElement.innerHTML = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    blogContainer.appendChild(postElement);

    const hr = document.createElement("hr");
    if (index < blogPosts.length - 1) {
        const hr = document.createElement("hr");
        blogContainer.appendChild(hr);
    }
  });
}

// Render posts on page load
renderBlogPosts();
console.log("Yay, script is running :D");
