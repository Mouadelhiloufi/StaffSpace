let buttonAddworker = document.querySelector("#buttonAdd")
let modalAjout = document.querySelector("#modalAjout")
let fermerFormulAjout = document.querySelector("#fermerFormulAjout")
let submitForm = document.querySelector("#submitForm")
let containerCards = document.querySelector("#containerCards")
let inputName = document.querySelector("#inputNom")
let inputRole = document.querySelector("#inputRole")
let inputPhoto = document.querySelector("#inputPhoto")
let inputEmail = document.querySelector("#inputEmail")
let experienceContainer = document.querySelector("#experiences-container")
let btnAjouterExp = document.querySelector("#ajouterExperience")
let inputExperience = document.querySelector("#inputExperience")
let inputTel = document.querySelector("#inputTel")
let buttonAddConference = document.querySelector("#buttonAddConference")
let buttonAddServeur = document.querySelector("#buttonAddServeur")
let buttonAddSecurity = document.querySelector("#buttonAddSecurity")
let buttonAddReception = document.querySelector("#buttonAddReception")
let buttonAddPersonelle = document.querySelector("#buttonAddPersonelle")
let buttonAddArchive = document.querySelector("#buttonAddArchive")
let supprimerBigCard = document.querySelector("#supprimerBigCard")
let containerPopupBigCard = document.querySelector("#popUpCard")
let arrAllEmployes = []
let smallCards = document.querySelector(".smallCard")

btnAjouterExp.addEventListener('click', e => {
    const div = document.createElement("div")
    div.innerHTML = `<div id="experienceInputs">
    <div class=" flex experience-item  gap-6 p-3 bg-gray-50 items-center justify-between">
        <input id="inputExperience" type="text" placeholder="votre experience"
            class="inputExperiences w-[50%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">
        <input id="inputrole" type="text" placeholder="Role"
            class="inputExperiences w-[50%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">
    </div>
    <div class="flex experience-item  p-3 bg-gray-50 items-center justify-between">
        <div class="w-[47%]"><label class="block">Date From</label>
            <input id="inputDateFrom" type="date"
                class="inputExperiences w-[100%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">
        </div>
        <div class="w-[47%]"><label class="block">Date To</label>
            <input id="inputDateTo" type="date"
                class="inputExperiences w-[100%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">
        </div>
    </div>
    </div>`
    experienceContainer.append(div)
})

function displayOne(employe) {
    const div = document.createElement("div")
    div.innerHTML = `<div class="smallCard bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-48">
        <div class="p-3 flex items-center gap-3">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm flex-shrink-0">
                <img src="${employe.photo}"
                     alt="Photo ${employe.nom}" 
                     class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col">
                <h2 id="nomId" class="text-sm font-bold text-gray-800">${employe.nom}</h2>
                <p class="text-xs text-gray-600">${employe.role}</p>
            </div>
        </div>
    </div>`
    containerCards.appendChild(div)
}

function displayHtmlSmallCard(arr) {
    arr.forEach(personne => {
        containerCards.innerHTML += `<div class="smallCard bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-48">
        <div class="p-3 flex items-center gap-3">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm flex-shrink-0">
                <img src="${personne.photo}"
                     alt="Photo ${personne.nom}" 
                     class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col">
                <h2 id="nomId" class="text-sm font-bold text-gray-800">${personne.nom}</h2>
                <p class="text-xs text-gray-600">${personne.role}</p>
            </div>
        </div>
    </div>`
        modalAjout.classList.add("hidden")
    })
}

buttonAddworker.addEventListener('click', e => {
    modalAjout.classList.remove("hidden")
})

fermerFormulAjout.addEventListener('click', e => {
    modalAjout.classList.add("hidden")
})

submitForm.addEventListener('submit', e => {
    e.preventDefault()
    let experiences = document.querySelectorAll("#experienceInputs")
    let arrExperiences = []
    experiences.forEach(div => {
        let experienceObjet = {
            "entreprise": div.querySelector("#inputExperience").value,
            "role": div.querySelector("#inputrole").value,
            "date from": div.querySelector("#inputDateFrom").value,
            "date to": div.querySelector("#inputDateTo").value
        }
        arrExperiences.push(experienceObjet)
    })

    let newEmploy = {
        "id": Date.now(),
        "nom": inputName.value,
        "experience": arrExperiences,
        "role": inputRole.value,
        "photo": inputPhoto.value,
        "email": inputEmail.value,
        "tel": inputTel.value
    }

    arrAllEmployes.push(newEmploy)
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrAllEmployes)
})

function experienceDisplay(data) {
    exp_html = ""
    data.forEach(item => {
        exp_html += `<p class="bg-[#66b99d] text-center rounded-lg w-[auto] text-xs text-gray-700 font-medium">${item.entreprise}</p>`
    })
    return exp_html
}
let div = null;
function moveElement(roomClicked) {
    div =(roomClicked.closest(".salle")).id
    
    console.log(div)
    
    
    containerCards.innerHTML = ""
    arrAllEmployes.forEach(employe => {
        if (div == "archive" && employe.role.toLowerCase() == "manager") {
            displayOne(employe)
        } else if (div == "conference" && (employe.role.toLowerCase() == "manager" || employe.role.toLowerCase() == "nettoyage")) {
            displayOne(employe)
        } else {
            if (employe.role.toLowerCase().split(" ").join("") === div || employe.role.toLowerCase() == "manager" || employe.role.toLowerCase() == "nettoyage") {
                displayOne(employe)
            }
        }
    })

    document.getElementById("containerCards").addEventListener("click", e => {
        // checker = true
        let carde = e.target.closest(".smallCard")
        let nameRech=carde.querySelector("#nomId").textContent
        arrAllEmployes.forEach(employe=>{
            if(nameRech==employe.nom){
            document.getElementById("bigCard").addEventListener("click", e => {
            if ((e.target.innerHTML).trim() == "Ajouter") {
                containerPopupBigCard.classList.add("hidden")
                 div.append(cardSmaller(employe,roomClicked))
                
                
                document.getElementById("containerCards").removeChild(carde)

            }
        })
        }
        })
        
    })
}

function cardSmaller(personne, roomClicked) {
    roomClicked.closest(".room").innerHTML = `
    <div class="w-24 bg-white rounded-xl p-2 flex flex-col items-center">
        <img src="${personne.photo}" 
            class="w-14 h-14 rounded-full object-cover mb-1">
        <p class="text-xs font-semibold text-gray-800 text-center">
            ${personne.nom}
        </p>
    </div>`
}

containerCards.addEventListener('click', e => {
    let card = e.target.closest(".smallCard")
    let nameSearch = card.querySelector("#nomId").textContent
    arrAllEmployes.find(personne => {
        if (nameSearch == personne.nom) {
            containerPopupBigCard.classList.remove("hidden")
            containerPopupBigCard.innerHTML = `
<div id="bigCard" class="w-full max-w-sm">
    <div class="bg-white rounded-xl overflow-hidden">
        <div class="p-5">
            <div class="flex gap-4">
                <div class="flex flex-col items-center flex-shrink-0">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-500 shadow-md mb-3">
                        <img src="${personne.photo}" alt="Photo ${personne.nom}" class="w-full h-full object-cover">
                    </div>
                    <h2 class="text-lg font-bold text-gray-800 text-center">${personne.nom}</h2>
                </div>
                <div class="flex-1 space-y-3">
                    <div class="pb-2 border-b-2 border-[#66b99d]">
                        <p class="text-xs text-gray-600 font-medium">Role</p>
                        <p class="text-base font-semibold text-[#66b99d]">${personne.role}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                        <p class="text-xs text-gray-700 font-medium">${personne.email}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Telephone</p>
                        <p class="text-xs text-gray-700 font-medium">${personne.tel}</p>
                    </div>
                    <div>
                        <p class=" text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Expérience</p>
                        <div class="flex flex-col gap-2">${experienceDisplay(personne.experience)}</div>
                    </div>
                </div>
            </div>
            <div class="mt-5 flex gap-3">
                <button id="AjouterBigCard" class="flex-1 py-2 text-sm font-semibold bg-[#66b99d] text-white rounded-lg transition">Ajouter</button>
                <button id="annulerBigCard" class="flex-1 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Annuler</button>
            </div>
        </div>
    </div>
</div>`

            let ajouterBigCard = document.querySelector("#AjouterBigCard")
            ajouterBigCard.addEventListener('click', e => {
                
            })

            const annulerBigCard = document.querySelector("#annulerBigCard")
            annulerBigCard.addEventListener('click', e => {
                containerPopupBigCard.classList.add("hidden")
            })
        }
    })
})
