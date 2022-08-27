//Selectors are DOM (Document object model) methods that allows us 
//to get access to different properties and methods

//Single selectors are able to select a single element only

// document.getElementById()
// select a single element by its ID


//You can select an  element and store it in a variable
const task_title = document.getElementById('task-title');
console.log(task_title);

//You can access different info from the elements
let  val = task_title.className;

//You can change the style of it 
task_title.style.background='#333';
task_title.style.color='#fff';
task_title.style.padding='5px';
// task_title.style.display='none';

//You can change the content
task_title.textContent='Task  list';
task_title.innerText='My tasks';
task_title.innerHTML = '<span style="color:red">Task list</span>';

// document.querySelector()
// select the element by its id,class,name

const title = document.querySelector('#task-title');
const card = document.querySelector('.card-action');
const heading = document.querySelector('h5');

// css psudo selectors can help to select any single item
document.querySelector('li:last-child').style.color='green';
document.querySelector('li:nth-child(3)').style.color='pink';
document.querySelector('li:nth-child(4)').textContent='Hello world!';
document.querySelector('li:nth-child(odd)').style.background='#333';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';



console.log(heading);

