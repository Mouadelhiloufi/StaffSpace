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
// let buttonAddConference = document.querySelector("#buttonAddConference")
// let buttonAddServeur = document.querySelector("#buttonAddServeur")
// let buttonAddSecurity = document.querySelector("#buttonAddSecurity")
// let buttonAddReception = document.querySelector("#buttonAddReception")
// let buttonAddPersonelle = document.querySelector("#buttonAddPersonelle")
// let buttonAddArchive = document.querySelector("#buttonAddArchive")
const btnDeleteSmallerCard = document.querySelector("#btnDeleteSmallerCard")
let supprimerBigCard = document.querySelector("#supprimerBigCard")
let containerPopupBigCard = document.querySelector("#popUpCard")
let arrAllEmployes = []
let smallCards = document.querySelector(".smallCard")

btnAjouterExp.addEventListener('click', e => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="experienceInputs">
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
    </div>
    `
    experienceContainer.append(div)
})








function displayOne(employe) {
    if(employe.location=="unasigned"){
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
}

function displayHtmlSmallCard(arr) {

    arr.forEach(personne => {
        if (personne.location == "unasigned") {
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
        }
    })
}

buttonAddworker.addEventListener('click', e => {
    modalAjout.classList.remove("hidden")
})

fermerFormulAjout.addEventListener('click', e => {
    modalAjout.classList.add("hidden")
})


let regexNom = /^["A-Za-z "]+$/;
let regexEmail=  /^[A-Za-z0-9.\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]+$/ 
let regexTel=/^["0-9\+\- "]+$/
 const experienceInputs=document.querySelectorAll(".experienceInputs")
let regexExp=true;
submitForm.addEventListener('submit', e => {


    e.preventDefault()


    // imHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERE


    // if(!regexNom.test(inputExperience.value)){
    //     alert("experience not valid")
    // }
    
    
    

   
    if (!regexNom.test(inputName.value)||(inputName.value.length<=0)){
        alert("name is invalid")}
        else if(inputPhoto.value.length<=0){
            alert("veuillez remplir le champ du photo")
        }
    else if(!regexTel.test(inputTel.value)||(inputTel.value.split(" ").join("").length>13)||(inputTel.value.split(" ").join("").length<10)||(inputTel.value.length<=0)){
        alert("phone is invalid")
    }
    else if(!regexEmail.test(inputEmail.value)){
        alert("email is invalid")
     }
// else if(regexExp){
// experienceInputs.forEach(experience=>{
//     console.log(experience)
//     if(!regexNom.test(experience.value))
// {
//     alert("entreprise non valide")
// }
// })
// }
    
    // else if(){}
    else{
    let experiences = document.querySelectorAll(".experienceInputs")
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
        "tel": inputTel.value,
        "location": 'unasigned'
    }

    arrAllEmployes.push(newEmploy)
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrAllEmployes)
    submitForm.reset()
    }
    

})






function experienceDisplay(experiences) {
    exp_html = ""
    experiences.forEach(item => {
        exp_html += `<p class="bg-[#66b99d] text-center rounded-lg w-[auto] text-xs text-gray-700 font-medium">${item.entreprise}</p>`
    })
    return exp_html
}
let div = null;
// function moveElement(roomClicked) {
let containerRooms = document.getElementById("containerRooms")



let container = null;
containerRooms.addEventListener('click', e => {

    container = e.target.closest(".salle")
    if (container) {

        salleName = e.target.closest(".salle").id.toLowerCase()
        // roesl = {
        //     "manager": ["conference", 'archives'],
        // }
        containerCards.innerHTML = ""
        arrAllEmployes.forEach(employe => {
            // console.log(employe.role.toLowerCase().split(" ").join(""))
            employeRole = employe.role.toLowerCase()
            // if (roels[employe.role].include(salleName))
            // console.log(employe.location)



            if (salleName == "archive" && employeRole == "manager" && employe.location == "unasigned") {
                console.log(employe.location)
                // console.log("first")    
                displayOne(employe)

            } else if (salleName == "conference" && (employeRole == "manager" || employeRole == "nettoyage") && (employe.location == "unasigned")) {
                displayOne(employe)
                console.log(employe.location)
                // console.log("second")
            } else {
                if ((salleName != "archive") && (employeRole.split(" ").join("") === salleName || employeRole == "manager" || employeRole == "nettoyage" || salleName == "conference") && (employe.location == "unasigned")) {
                    displayOne(employe)
                    console.log(employe.location)

                    // console.log("third")
                }
            }
        })

        document.getElementById("containerCards").addEventListener("click", e => {
            // checker = true
            let carde = e.target.closest(".smallCard")
            let nameRech = carde.querySelector("#nomId").textContent
            // console.log(arrAllEmployes);
            arrAllEmployes.forEach(employe => {
                if (nameRech == employe.nom) {

                    document.getElementById("bigCard").onclick = (e) => {
                        if ((e.target.innerHTML).trim() == "Ajouter") {
                            containerPopupBigCard.classList.add("hidden")


                            let placeCard = container.querySelector(".placeCard")
                            cardSmaller(employe, placeCard)
                            employe.location = "asigned"
                            carde.remove()


                            // document.getElementById("containerCards").removeChild(carde)


// erooooooooooooooooooooooooor heeeeeeeeeeer 

                           const btnDelete = container.querySelectorAll(".btnDeleteSmallerCard")
                           btnDelete.forEach(btn=>{
                           
                           btn.addEventListener('click', e => {
                            
                                let smallerCard=e.target.closest(".smallerCard")
                                
                                    console.log("moaud")
                                e.stopPropagation()
                                smallerCard.remove()
                                employe.location="unasigned"
                                displayOne(employe)

                                
                            })
                            })
                            





                        }
                    }
                }

//                 const smallerCards=container.querySelectorAll(".smallerCard")
//                 smallerCards.forEach(card=>{
//                     card.addEventListener('click',e=>{
//                         e.stopPropagation()
//                         console.log("mouad")
//                         if(employe.location=="asigned"){
//                         containerPopupBigCard.innerHTML = `
// <div id="bigCard" class="w-full max-w-sm">
//     <div class="bg-white rounded-xl overflow-hidden">
//         <div class="p-5">
//             <div class="flex gap-4">
//                 <div class="flex flex-col items-center flex-shrink-0">
//                     <div class="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-500 shadow-md mb-3">
//                         <img src="${employe.photo}" alt="Photo ${employe.nom}" class="w-full h-full object-cover">
//                     </div>
//                     <h2 class="text-lg font-bold text-gray-800 text-center">${employe.nom}</h2>
//                 </div>
//                 <div class="flex-1 space-y-3">
//                     <div class="pb-2 border-b-2 border-[#66b99d]">
//                         <p class="text-xs text-gray-600 font-medium">Role</p>
//                         <p class="text-base font-semibold text-[#66b99d]">${employe.role}</p>
//                     </div>
//                     <div>
//                         <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
//                         <p class="text-xs text-gray-700 font-medium">${employe.email}</p>
//                     </div>
//                     <div>
//                         <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Telephone</p>
//                         <p class="text-xs text-gray-700 font-medium">${employe.tel}</p>
//                     </div>
//                     <div>
//                         <p class=" text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Expérience</p>
//                         <div class="flex flex-col gap-2">${experienceDisplay(employe.experience)}</div>
//                     </div>
//                 </div>
//             </div>
//             <div class="mt-5 flex gap-3">
//                 <button id="AjouterBigCard" class="flex-1 py-2 text-sm font-semibold bg-[#66b99d] text-white rounded-lg transition">Ajouter</button>
//                 <button id="annulerBigCard" class="flex-1 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Annuler</button>
//             </div>
//         </div>
//     </div>
// </div>`
// }

                        
//                     })
//                 })




            })

        })
    }
})
// }
// worikiing   heeere
function cardSmaller(personne, roomClicked) {
    roomClicked.innerHTML += `
    <div class="smallerCard max-w-[100%] min-w-[30%] gap-2 bg-[#66b99d] rounded-[20px] flex items-center">
    
        <img src="${personne.photo}" 
            class="max-w-[100%] h-14 rounded-full  mb-1">
            <div class="bg-[##66b99d] w-[#]">
        <p class="text-xs text-wrap:wrap  text-white text-center">
            ${personne.nom.split(" ")[0]}
        </p></div>
        <button class="btnDeleteSmallerCard bg-white rounded-[100%] md:-top-6 md:w-4 left-[44%] text-red-700">X</button>
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



            const annulerBigCard = document.querySelector("#annulerBigCard")
            annulerBigCard.addEventListener('click', e => {
                containerPopupBigCard.classList.add("hidden")

            })









        }
    })
})

