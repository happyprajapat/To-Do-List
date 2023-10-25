// const inputBox = document.getElementById("input-box")
// const listContainer = document.getElementById("list-container")
// const crossBtn =  document.getElementsByClassName("cross");

// function addTask(){
//     if(inputBox.value === ''){
//         alert('Write Something!');
//     }
//     else{
//         listContainer.insertAdjacentHTML("beforeend",   `<li>${inputBox.value}<ion-icon class="cross" name="close-outline"></ion-icon></li>`);
//     }
//     inputBox.value='';
// }

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "LI")
//     {
//         e.target.classList.toggle("checked");
//     }

//     else if(crossBtn.target.className === "cross"){
//         crossBtn.target.parentElement.remove();
//     }
// },false)


// WRITTEN BY MEE
const inputText = document.querySelector('#input-box');
const addItem = document.querySelector('.add-btn');
const list = document.querySelector('#list-container');
const displayCount =  document.querySelector(".count-value");
let taskCount = 0;


console.log(inputText);
console.log(list);
console.log(addItem);
console.log(displayCount);

list.addEventListener("click",function(e){
    e.target.classList.toggle("checked");
})

addItem.addEventListener("click",function(e){
    console.log("Happy")
    if(inputText.value === "")
    {
        alert("Please Type something!!");
    }
    else
    {
        const newTask = document.createElement('li');
        newTask.appendChild(document.createTextNode(`${inputText.value}`));
        console.log(newTask);
        list.appendChild(newTask); 

        const addCross =  document.createElement('ion-icon');
        addCross.className= "cross";
        addCross.setAttribute('name','close-outline');
        console.log(addCross);
        newTask.appendChild(addCross);



        addCross.addEventListener('click',function()
        {
            console.log("Cross clicked")
            newTask.remove();
            taskCount--;
            displayCount.innerText = `${taskCount}`;
        })

        
        taskCount++;
        displayCount.innerText = `${taskCount}`;
        console.log(taskCount);

    }
    inputText.value = "";
})

