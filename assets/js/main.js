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
});

//add event listener to the close icon which will close the menu
closeMenuIcon.addEventListener('click', function(){
  
  // alert('icon clicked');
  menu.style.display = 'none'; 
  listIcon.style.display = 'block';
  closeIcon.style.display = 'none';
  
});


