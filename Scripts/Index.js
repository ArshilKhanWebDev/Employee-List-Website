let imageInput = document.getElementById('imageFile');
let idInput = document.getElementById('idInput');
let nameInput = document.getElementById('nameInput');
let professionInput = document.getElementById('professionInput');
let employeeCardContainer = document.getElementById('employeecardcontainer');
let showingImg = document.getElementById('showingImg');

imageInput.onchange = function(){
    showingImg.setAttribute("src", URL.createObjectURL(imageInput.files[0]));
}

function addCard(){
    if(nameInput.value === '')
    {
        alert("Please Write Name");
    }else if(idInput.value === ''){
        alert("Please Write ID");
    }else if(professionInput.value === ''){
        alert("Please Write Profession");
    }else if (!imageInput.files[0]){
        alert("Please Upload Image");
    }else{
        createCard();
        resetInput();
        saveData();
    }
}

function resetInput(){
    idInput.value = "";
    nameInput.value = "";
    professionInput.value = "";
    showingImg.src = '../Images/ProfilePic.png';
}

function createCard(){
    let card = document.createElement('div');
    card.classList.add("employeecard");
    employeeCardContainer.appendChild(card);
    let deleteButton = document.createElement('span');
    deleteButton.innerHTML = '\u00d7';
    card.appendChild(deleteButton); 
    let cardImg = document.createElement('img');
    const imgUrl = URL.createObjectURL(imageInput.files[0]);
    cardImg.setAttribute("src", imgUrl) 
    card.appendChild(cardImg);
    let id = document.createElement('p');
    id.innerHTML = "ID - " + idInput.value;
    card.appendChild(id); 
    let name = document.createElement('p');
    name.innerHTML = "Name - " + nameInput.value;
    card.appendChild(name);  
    let profession = document.createElement('p');
    profession.innerHTML = "Profession - " + professionInput.value;
    card.appendChild(profession);   
}

employeeCardContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', employeeCardContainer.innerHTML);
}

function loadData(){
    employeeCardContainer.innerHTML = localStorage.getItem('data');
}

loadData();