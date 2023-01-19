
let input = document.getElementById("input");
let one = document.getElementById("one")

let arr = [];

function addTask() {
    let inputValue = input.value
    if (inputValue == "") {
        alert("Please fill out the task");
    } else {
        let id = Math.floor(Math.random() * Date.now()).toString()
        arr.push({ inputValue, id });
        renderUI();
    }
}

function handleDelete(id) {
    arr = arr.filter(item => item.id != id);
    renderUI();
}

function renderUI() {
    console.log("ARR: ", arr)
    one.innerHTML = ''
    document.getElementById("input").value = ""

    arr.map((i) => { 
        one.innerHTML += `
        <div>
        <P>${i.inputValue}</P>
        <button  onClick="handleDelete(${i.id})">Del</button>
        </div>
        `
    })
}





