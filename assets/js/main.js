//get element by query selector
let openMenuIcon = document.querySelector('.open-menu-icon');
let closeMenuIcon = document.querySelector('.close-menu-icon');
let menu = document.querySelector('.menu');

//get element by id
let listIcon = document.getElementById('icon-name-list');
let closeIcon = document.getElementById('icon-name-close');


//add event listener to the open icon which will open the menu
openMenuIcon.addEventListener('click', function() {
  // alert('icon clicked'); //test PASSED!
  menu.style.display = 'block';
  // openMenuIcon.style.visibility = 'hidden'; // refer to the css file (line 110-117) on notes to see how to hide the icon
  closeIcon.style.display = 'block';
  listIcon.style.display = 'none';

  //add smooth transition to open the menu
  openMenuIcon.style.transition = '0.25s ease-in';
  openMenuIcon.style.opacity = '1';
  openMenuIcon.style.transform = 'translateX(1)';
});

//add event listener to the close icon which will close the menu
closeMenuIcon.addEventListener('click', function(){
  
  // alert('icon clicked');
  menu.style.display = 'none'; 
  listIcon.style.display = 'block';
  closeIcon.style.display = 'none';

  //add smooth transition to close the menu
  // closeMenuIcon.style.opacity = '0';
  // closeMenuIcon.style.transform = 'translateX(-1)';
});

// create variables to display and hide the search form
let openSearchForm = document.getElementById('search-icon');
let closeSearchForm = document.getElementById('close-search-btn');
let searchFormBox = document.getElementById('search-form-box');

//when menu icon is clicked, display the search form
openSearchForm.addEventListener('click', function(){
 //alert('search icon clicked'); //test PASSED
 searchFormBox.style.visibility = 'visible';

  //add smooth transition to the search form
  searchFormBox.style.transition = '0.25s ease-in';
  searchFormBox.style.opacity = '1';
  searchFormBox.style.transform = 'translateX(1)';

  //add image to the menu background
  searchFormBox.style.backgroundImage = 'url(./assets/images/Photoleap-5.png)';
  document.body.style.backgroundImage = 'url(./assets/images/Photoleap-5.png)';
});

//when close icon is clicked, hide the search form
closeSearchForm.addEventListener('click', function(){
  //alert('close search clicked'); //test PASSED
  searchFormBox.style.visibility = 'hidden';

  //if the menu is open when search icon is clicked,close it when the search form is closed
  // menu.style.display = 'none'; //test PASSED but lacks logic

  if(menu.style.display === 'block'){
    menu.style.display = 'none';
  }
  
  //add smooth transition to the search form
  searchFormBox.style.transition = '0.25s ease-out';
  searchFormBox.style.opacity = '0';
  searchFormBox.style.transform = 'translateX(-1)';
});



