//get and declare var for post button and posts

//make madePosts array

//add click event and push to array function to postButton
	//get and declar var value of postBox
		//unshift(move to front of array) postBox value into madePosts
		//set postBoxValue to zero
		//call publishPost function

//publishPost function
	//create list element
	//let content start with 0 post
		//appendchild liElement to posts array to add to the page
const postButton = document.getElementById('postButton')

let posts = document.getElementById('posts')

let madePosts = [];


postButton.addEventListener('click', pushToArray = () => {
  let postBoxValue = document.getElementById('postBox').value;
    madePosts.unshift(postBoxValue);
    postBoxValue = null;
    publishPost();
})

const publishPost = () => {
    let liElement= document.createElement('LI');
    let content = madePosts[0];
    liElement.append(content);
    posts.appendChild(liElement);
}
