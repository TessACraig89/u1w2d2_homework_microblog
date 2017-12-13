//get and store postBox value
//get and store posts li
//get and store postButton

// make empty madePosts array for <li> of madePosts

//postButton. addEventListener 'click'
//'click' triggers function that pushes postBox value into front of madePosts array using unshift
	//then sets postBox value to null
	//then call publishPost

//publishPost function
	//make new list element and store as liElement
	//take madePosts[i] and store in content variable
	//liElement append content
	//unshift liElement to posts

let postBoxValue = document.getElementById('postBox').value;

const postButton = document.getElementById('postButton')

let posts = document.getElementById('posts')

let madePosts = [];


postButton.addEventListener('click', pushToArray = () => {
	madePosts.unshift(postBoxValue);
	postBoxValue = null;
	publishPost();
})


const publishPost = () => {
	let liElement= document.createElement('LI');
	let content = madePosts[0]
	liElement.append(content);
	posts.appendChild(liElement);
}
	let liElement = document.createElement('LI');
	let content = madePosts[0]
	liElement.append(content);
	posts.appendChild(liElement);

//I don't know why undefined is the first list item and I want to unshift the liElement into posts but it won't work so I'm resorting to appendChild
