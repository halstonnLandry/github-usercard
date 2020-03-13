/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/halstonnLandry')
.then(response=>{
  console.log(response.data);
  document.querySelector('.cards').append(userMake(response.data))
  const followersArray = [response.data.followers];

  })
.catch(error=>{console.log(error);
})




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
//cb for creating tags

//creating elements
function userMake(user){
  const cardMake=
    document.createElement('div');
  const imgMake=
    document.createElement('img');
    const infoMake=
    document.createElement('div');
  const nameMake=
    document.createElement('h3');   
  const usernameMake=
    document.createElement('p');
  const locationMake=
    document.createElement('p');
  const profileMake=
    document.createElement('p');
  const followersMake=
    document.createElement('p');
  const followingMake=
    document.createElement('p');
  const bioMake=
    document.createElement('p');
  const linkMake=
    document.createElement('a');
//appending elements
cardMake.append(imgMake);
cardMake.append(infoMake);
infoMake.append(nameMake);
infoMake.append(usernameMake);
infoMake.append(locationMake);
infoMake.append(profileMake);
infoMake.append(followersMake);
infoMake.append(followingMake);
infoMake.append(bioMake);
profileMake.append(linkMake);
//applying classes
  cardMake.classList.add('card');
  infoMake.classList.add('card-info');
  nameMake.classList.add('name');
  usernameMake.classList.add('username');

//applying content
imgMake.src=user.avatar_url;
nameMake.textContent=`${user.name}`;
usernameMake.textContent=`${user.login}`;
locationMake.textContent=`${user.location}`;
linkMake.setAttribute('href',user.html_url);
linkMake.textContent=user.html_url;
  return cardMake;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const followersArray=[ 
  'mtruj013',
  'mrsimpson3000',
  'easpaas',
  '	MatthewHeideman',
  'Riley-Robinson'
];
axios.get('https://api.github.com/users/halstonnLandry')
.then(response=>{
  followersArray.forEach(followers => {
    axios.get(`https://api.github.com/users/${followers}`)
  .then(response=>{
    console.log(response.data);
    document.querySelector('.cards').append(userMake(response.data))
    })
  .catch(error=>{console.log(error);
  })
  });
  })
.catch(error=>{console.log(error);
})