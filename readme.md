Summary

Imagine you want to let people write really short public blog posts. 
The homepage of your microblog app should be a list of these micro-posts with a form to add a new one. 
We don't have a backend yet, so we won't be worrying about login, users, followers, and all of that good stuff quite yet. 
The new posts won't even stay on the page when we refresh. But we can create new blog posts, have them added to the page!

Skills:
Git - save your progress
JavaScript - access the DOM
HTML forms - get input from the user
CSS - style blog

1.Start by creating a folder with index.html, style.css and app.js files and initializing a git repo.
2.Your HTML page should have a list in it that will display the posts. It can be empty, with JS adding posts, or have some dummy posts in it to start.
3.Your JS will hold an array of posts that it appends to the HTML list.
4.When your user clicks submit, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.
5.Make frequent commits and pushes. You should commit every time you add a new feature, and it is working! A feature can be something as small as adding a little style.

Stretch Challenges (optional)
-Add a count of how many posts have been posted that updates every time a new post is created.
-Save posts to sessionStorage or localStorage.
-Add comments to posts
-Sort posts by order created OR alphabetically
