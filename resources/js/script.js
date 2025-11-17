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





let arrAllEmployes = [];
let arrSallePersonelle = []
let arrSalleArchives = []
let arrSalleSecurity = []
let arrSalleReception = []
let arrSalleConference = []
let arrSalleServeur = []



let smallCards = document.querySelector(".smallCard")


btnAjouterExp.addEventListener('click', e => {

    const div = document.createElement("div")

    div.innerHTML = `<div id="experienceInputs">
    <div 
                                    class=" flex experience-item  gap-6 p-3 bg-gray-50 items-center justify-between">

                                    <input id="inputExperience" type="text" placeholder="votre experience"
                                        class="inputExperiences w-[50%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">

                                    <input id="inputrole" type="text" placeholder="Role"
                                        class="inputExperiences w-[50%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">


                                </div>
                                <div 
                                    class="flex experience-item  p-3 bg-gray-50 items-center justify-between">
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












function displayHtmlSmallCard(arr) {
    arr.forEach(personne => {


        containerCards.innerHTML += `<div id="${arr.id}" class="smallCard bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-48">
        <div  class="p-3 flex items-center gap-3">
            <!-- Photo -->
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm flex-shrink-0">
                <img src="${personne.photo}"
                     alt="Photo ${personne.nom}" 
                     class="w-full h-full object-cover">
            </div>
            <!-- Name and role in vertical layout -->
            <div class="flex flex-col">
                <h2 id="nomId" class="text-sm font-bold text-gray-800">${personne.nom}</h2>
                <p class="text-xs text-gray-600">${personne.role}</p>
            </div>
        </div>
    </div>
    `

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
    let arrExperiences = [];
    experiences.forEach(div => {
        let experienceObjet = {
            "entreprise": div.querySelector("#inputExperience").value,
            "role": div.querySelector("#inputrole").value,
            "date from": div.querySelector("#inputDateFrom").value,
            "date to": div.querySelector("#inputDateTo").value
        };

        arrExperiences.push(experienceObjet)
        // console.log(arrExperiences)
    })


    // console.log("mouad")

    let newEmploy = {
        "id": Date.now(),
        "nom": inputName.value,
        // erooooooooooorhere
        // "experience":inputExperience.value,
        // "experinece":elelk,
        "experience": arrExperiences,
        "role": inputRole.value,
        "photo": inputPhoto.value,
        "email": inputEmail.value,
        "tel": inputTel.value

    }
    console.log(newEmploy)
    // console.log(newEmploy.nom)

    arrAllEmployes.push(newEmploy)
    if (inputRole.value.toLowerCase() == "receptionnistes") {
        arrSalleReception.push(newEmploy)
    }
    if (inputRole.value.toLowerCase() == "technicien it") {
        arrSalleServeur.push(newEmploy)
    }
    if (inputRole.value.toLowerCase() == "agent de sécurité") {
        arrSalleSecurity.push(newEmploy)
    }
    if (inputRole.value.toLowerCase() == "manager") {
        arrSalleSecurity.push(newEmploy)
        arrSalleArchives.push(newEmploy)
        arrSalleReception.push(newEmploy)
        arrSalleConference.push(newEmploy)
        arrSalleServeur.push(newEmploy)
        arrSallePersonelle.push(newEmploy)

    }
    if (inputRole.value.toLowerCase() == "nettoyage") {
        arrSalleSecurity.push(newEmploy)
        arrSalleReception.push(newEmploy)
        arrSalleConference.push(newEmploy)
        arrSalleServeur.push(newEmploy)
        arrSallePersonelle.push(newEmploy)
    }
    // console.log(arrSalleReception)

    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrAllEmployes)


})


buttonAddConference.addEventListener('click', e => {
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrSalleConference)
})

buttonAddServeur.addEventListener('click', e => {
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrSalleServeur)
})

buttonAddSecurity.addEventListener('click', e => {
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrSalleSecurity)
})



buttonAddReception.addEventListener('click', e => {
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrSalleReception)
})



buttonAddPersonelle.addEventListener('click', e => {
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrSallePersonelle)
})

buttonAddArchive.addEventListener('click', e => {
    containerCards.innerHTML = ""
    displayHtmlSmallCard(arrSalleArchives)
})





// had partie kat afficher l card kbera mli katclicker 3la small card

containerCards.addEventListener('click', e => {
    // e.stopPropagation()
    let nameSearch = e.target.querySelector("#nomId").textContent
    // console.log(e)
    arrAllEmployes.find(personne => {
        if (nameSearch == personne.nom) {
            containerPopupBigCard.classList.remove("hidden")
            containerPopupBigCard.innerHTML = "";
            containerPopupBigCard.innerHTML = `
            <!-- affichage modal -->
<div class="w-full max-w-sm">
    <!-- Carte Employé -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="p-5">
            <!-- Flex photo + infos -->
            <div class="flex gap-4">
                <!-- Colonne gauche -->
                <div class="flex flex-col items-center flex-shrink-0">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-500 shadow-md mb-3">
                        <img src="${personne.photo}"
                            alt="Photo ${personne.nom}" class="w-full h-full object-cover">
                    </div>
                    <h2 class="text-lg font-bold text-gray-800 text-center">${personne.nom}</h2>
                </div>

                <!-- Colonne droite -->
                <div class="flex-1 space-y-3">
                    <div class="pb-2 border-b-2 border-red-500">
                        <p class="text-xs text-gray-600 font-medium">Role</p>
                        <p class="text-base font-semibold text-red-600">${personne.role}</p>
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
                        <p class="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Expérience</p>
                        <p class="text-xs text-gray-700 font-medium">${personne.experience}</p>
                    </div>
                </div>
            </div>

            <!-- Boutons -->
            <div class="mt-5 flex gap-3">
                <!-- Bouton Annuler -->
                <button
                   id="annulerBigCard" class="flex-1 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                    Annuler
                </button>

                <!-- Bouton Supprimer -->
                <button
                    id="supprimerBigCard" class=" flex-1 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                    Supprimer
                </button>
            </div>

        </div>
    </div>
</div>
            `
            let supprimerBtn = document.querySelector("#supprimerBigCard")
            supprimerBtn.addEventListener('click', e => {

            })

        }
    })
    let annulerBigCard = document.querySelector("#annulerBigCard")

    annulerBigCard.addEventListener('click', e => {
        containerPopupBigCard.classList.add("hidden")
    })





})















// smallCard.addEventListener('click',e=>{
//     containerPopupBigCard.innerHTML+=`
//      <div class="w-full max-w-sm">
//         <!-- Carte Employé -->
//         <!-- Reduced padding from p-8 to p-5 and removed max-width constraint for compact design -->
//         <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <div class="p-5">
//                 <!-- Conteneur Flexbox: Photo à gauche, Infos à droite -->
//                 <!-- Reduced gap from gap-6 to gap-4 -->
//                 <div class="flex gap-4">
//                     <!-- Colonne gauche: Photo et Nom -->
//                     <div class="flex flex-col items-center flex-shrink-0">
//                         <!-- Photo -->
//                         <!-- Reduced photo size from w-32 h-32 to w-24 h-24 -->
//                         <div class="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-500 shadow-md mb-3">
//                             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
//                                 alt="Photo Employé" class="w-full h-full object-cover">
//                         </div>
//                         <!-- Nom -->
//                         <!-- Reduced font size from text-xl to text-lg -->
//                         <h2 class="text-lg font-bold text-gray-800 text-center">Jean Dupont</h2>
//                     </div>

//                     <!-- Colonne droite: Informations -->
//                     <!-- Reduced gap from space-y-4 to space-y-3 -->
//                     <div class="flex-1 space-y-3">
//                         <!-- Rôle (souligné en rouge) -->
//                         <div class="pb-2 border-b-2 border-red-500">
//                             <p class="text-xs text-gray-600 font-medium">Rôle</p>
//                             <p class="text-base font-semibold text-red-600">Manager</p>
//                         </div>

//                         <!-- Email -->
//                         <div>
//                             <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
//                             <p class="text-xs text-gray-700 font-medium">jean.dupont@exemple.com</p>
//                         </div>

//                         <!-- Téléphone -->
//                         <div>
//                             <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Téléphone</p>
//                             <p class="text-xs text-gray-700 font-medium">+212 612 345 678</p>
//                         </div>

//                         <!-- Expérience -->
//                         <div>
//                             <p class="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Expérience</p>
//                             <!-- Reduced space between items from space-y-2 to space-y-1 -->
//                             <ul class="space-y-1 text-xs text-gray-700">
//                                 <li class="flex items-start gap-2">
//                                     <span class="text-blue-500 font-bold mt-0.5">•</span>
//                                     <span><strong>TechCorp</strong> - Ingénieur (5 ans)</span>
//                                 </li>
//                                 <li class="flex items-start gap-2">
//                                     <span class="text-blue-500 font-bold mt-0.5">•</span>
//                                     <span><strong>InnovateLabs</strong> - Développeur (3 ans)</span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
// })








