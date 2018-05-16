$(document)
  .ready(function () {

    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed'
    });
    
    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });

    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });

    // blogContainer holds all of our posts
    var blogContainer = $("#blog-container");
    var postCategorySelect = $("#category");

    // Variable to hold our posts
    var posts;

    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    /*   var url = window.location.search;
      var authorId;
      if (url.indexOf("?author_id=") !== -1) {
        authorId = url.split("=")[1];
        getPosts(authorId);
      }
      // If there's no authorId we just get all posts as usual
      else {
        getPosts();
      } */

    // This function grabs posts from the database and updates the view
    function getPosts(author) {
      authorId = author || "";
      if (authorId) {
        authorId = "/?author_id=" + authorId;
      }
      $.get("/api/posts" + authorId, function (data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty(author);
        } else {
          initializeRows();
        }
      });
    }

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
      blogContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      blogContainer.append(postsToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(post) {

      var newPostTitle = $("<h2>");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title);
      newPostBody.text(post.body);

      return newPostCard;
    }

    // This function displays a message when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Author #" + id;
      }
      blogContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({
        "text-align": "center",
        "margin-top": "50px"
      });
      messageH2.html("No posts yet.");
      blogContainer.append(messageH2);
    }

  });