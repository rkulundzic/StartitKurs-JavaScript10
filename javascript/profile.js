var profil = {
	name : 'Radmila',
	surname: 'Kulundžić',
	username: 'rkulundzic',
	description: 'Wonder woman / programer / architect / designer',
	profilPhoto: 'assets/img/profile.jpg',
	// posts: [
	// 	{postImg: 'assets/img/1.jpg', postInput: "Moram naci gde sam zagubila ovaj stomak. Hitno.", postLocation: "Skiathos Island"},
	// 	{postImg: 'assets/img/2.jpg', postInput: "Word", postLocation: "Novi Sad"},
	// 	{postImg: 'assets/img/3.jpg', postInput: "Luna park i Zoo vrt nedeljom", postLocation: "Zoološki Vrt"}
	// ]
};

var profilImg = document.getElementById('profil-img');
profilImg.src = profil.profilPhoto;
profilImg.style.height = "152px";
profilImg.style.borderRadius = "50%";

var userName = document.getElementById('username');
userName.innerHTML = profil.username;

var fullName = document.getElementById('full-name');
fullName.innerHTML = profil.name + " " + profil.surname;

var userBio = document.getElementById('user-bio');
userBio.innerHTML = profil.description;

var postPlaceholder = document.getElementById('new-post');
postPlaceholder.placeholder = "Upload an image";

var allPosts = document.getElementById('img-posts');

// for (var i = profil.posts.length - 1; i >= 0; i--) {

// 	var newDiv = document.createElement("div");
// 	var newImg = document.createElement("img");
// 	var imgText = document.createElement("div");
// 	var userImg = document.createElement("img");
// 	var user = document.createElement("p");
// 	var location = document.createElement("p");
// 	var userText = document.createElement("p");

// 	newDiv.appendChild(newImg);
// 	newDiv.appendChild(imgText);

// 	newImg.src = profil.posts[i].postImg;

// 	imgText.appendChild(userImg);
// 	imgText.appendChild(user);
// 	imgText.appendChild(location);
// 	imgText.appendChild(userText);

// 	userImg.src = profil.profilPhoto;
// 	user.innerHTML = profil.username;
// 	location.innerHTML = profil.posts[i].postLocation;

// 	userText.innerHTML = profil.name + " " + profil.surname + " " + profil.posts[i].userInput;

// 	newDiv.classList.add('post-container');
// 	newImg.classList.add('post-img');
// 	imgText.classList.add('post-text');
// 	userImg.classList.add('user-img');
// 	user.classList.add('post-username');
// 	location.classList.add('post-location');

// 	allPosts.insertBefore(newDiv, newDiv.firstChild);
// };