// empty madePosts array for <li> of madePosts

//get and store postBox value

//function that pushes post into allposts array
	//push postBox value to madePosts array

//get postButton and addEventListener 'click'
//'click' triggers push to posts array fuction


//function that that posts each madePosts[i] to the page seperately

//function that clears the postBox after

const madePosts = [];

const postBoxValue = document.getElementById('postBox').value

const pushToArray = () => {
	madePosts.push(postBoxValue);
}

document.getElementById('postButton').addEventListener('click', pushToArray();)


const makePost = () => {

}
