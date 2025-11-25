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
const btnDeleteSmallerCard = document.querySelector("#btnDeleteSmallerCard")
let supprimerBigCard = document.querySelector("#supprimerBigCard")
let containerPopupBigCard = document.querySelector("#popUpCard")
let arrAllEmployes = []
let smallCards = document.querySelector(".smallCard")




// function pour ajouter les experiences dans modal ajout

btnAjouterExp.addEventListener('click', e => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="experienceInputs">
    <div class="flex justify-center items-center ">
    <button class="removeExperience text-red-700 bg-black w-[8%] rounded-[50%]">X</button>
    </div>
    <div class=" flex experience-item  gap-6 p-3 bg-gray-50 items-center justify-between">
        <input id="inputExperience" type="text" placeholder="votre experience"
            class="inputExperiences inputsEntreprise w-[50%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">
        <input id="inputrole" type="text" placeholder="Role"
            class="inputExperiences inputsRole w-[50%] px-4 py-2 border-2 border-[#66b99d] rounded-[14px]">
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
    let containerExperiences = document.querySelector("#experiences-container")

    let removeExperience = containerExperiences.querySelectorAll(".removeExperience")

    removeExperience.forEach(btn => {
        btn.addEventListener('click', e => {
            let experienceToRemove = e.target.closest('.experienceInputs')
            experienceToRemove.remove()

        })
    })
})










// function pour afficher les employes dans aside 

function displayOne(employe) {
    if (employe.location == "unasigned") {
        const div = document.createElement("div")
        div.innerHTML = `<div class="smallCard bg-white rounded-lg shadow-md overflow-hidden w-48">
        <div class="p-3 flex items-center gap-3">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#66b99d]">
                <img src="${employe.photo}"
                     alt="Photo ${employe.nom}" 
                     class="w-full h-full">
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





// cette fonction est pour afficher small cards dans aside 

function displayHtmlSmallCard(arr) {



    arr.forEach(personne => {
        if (personne.location == "unasigned") {
            containerCards.innerHTML += `<div class="smallCard relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-48">
            
        <div class="p-3 flex items-center gap-3">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#66b99d] shadow-sm flex-shrink-0">
                <img src="${personne.photo}"
                     alt="Photo ${personne.nom}" 
                     class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col">
                <h2 id="nomId" class="text-sm font-bold text-gray-800">${personne.nom}</h2>
                <p class="roleSmallCard text-xs text-gray-600">${personne.role}</p>
            </div>
        </div>
    </div>`
            modalAjout.classList.add("hidden")
        }
    })
}


// btn modal ajout 
buttonAddworker.addEventListener('click', e => {
    modalAjout.classList.remove("hidden")
})

fermerFormulAjout.addEventListener('click', e => {
    modalAjout.classList.add("hidden")
})

let formReset = true;

let regexNom = /^["A-Za-z "]+$/;
let regexEmail = /^[A-Za-z0-9.\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]+$/
let regexTel = /^["0-9\+\- "]+$/
const experienceInputs = document.querySelectorAll(".experienceInputs")


let photoInput=document.querySelector("#inputPhoto")

let photoTest=document.getElementById('inputPhotoTest')




// ajouter une photo input dans submit formpour tester l'image

photoInput.addEventListener('input',e=>{
        photoTest.src=inputPhoto.value.trim()||"data:image/jpeg;base64,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"
    })

submitForm.addEventListener('submit', e => {
    formReset = true
    
    


    e.preventDefault()


    
    

    if (!regexNom.test(inputName.value) || (inputName.value.length <= 0)) {
        alert("name is invalid")
        return;
    }
    else if (inputPhoto.value.length <= 0) {
        inputPhoto.value="data:image/jpeg;base64,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"
    }
    else if (!regexTel.test(inputTel.value) || (inputTel.value.split(" ").join("").length > 13) || (inputTel.value.split(" ").join("").length < 10) || (inputTel.value.length <= 0)) {
        alert("phone is invalid")
        return;
    }
    else if (!regexEmail.test(inputEmail.value)) {
        alert("email is invalid")
        return;
    }


    let experiences = document.querySelectorAll(".experienceInputs")
    let arrExperiences = []
    let inputsEntreprise = document.querySelectorAll(".inputsEntreprise")
    let inputsRole = document.querySelectorAll(".inputsRole")
    inputsEntreprise.forEach(entrepriseValue => {
        if (!regexNom.test(entrepriseValue.value)) {
            alert("entreprise invalide")

            formReset = false
        }
    })


    inputsRole.forEach(roleValue => {
        if (!regexNom.test(roleValue.value)) {
            alert("role invalide")
            formReset = false
        }
    })

    

    
    experiences.forEach(div => {
        let experienceObjet = {
            "entreprise": div.querySelector("#inputExperience").value,
            "role": div.querySelector("#inputrole").value,
            "date from": div.querySelector("#inputDateFrom").value,
            "date to": div.querySelector("#inputDateTo").value
        }

        let dateFrom = experienceObjet["date from"].toString().split("-")
        let dateTo = experienceObjet["date to"].toString().split("-")
        if (parseInt(dateFrom[0]) > parseInt(dateTo[0])) {
            alert("la date de debut est plus grand que la date de fin")
            formReset = false

        }
        else if (parseInt(dateFrom[1]) > parseInt(dateTo[1]) && (parseInt(dateFrom[0]) == parseInt(dateTo[0]))) {
            alert("la date de debut est plus grand que la date de fin")
            formReset = false

        }
        else if (parseInt(dateFrom[1]) == parseInt(dateTo[1]) && (parseInt(dateFrom[0]) == parseInt(dateTo[0])) && (parseInt(dateFrom[2]) > parseInt(dateTo[2]))) {
            alert("la date de debut est plus grand que la date de fin")
            formReset = false

        }
        



        arrExperiences.push(experienceObjet)

    })
    if (formReset == false) return;
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




    



})




// ajouter chaque experience dans le modal ajout

function experienceDisplay(experiences) {
    exp_html = ""
    experiences.forEach(exp => {
        exp_html += `<p class="bg-[#66b99d] text-center rounded-lg w-[auto] text-xs text-gray-700 font-medium">${exp.entreprise}</p>`
    })
    return exp_html
}
let div = null;

let containerRooms = document.getElementById("containerRooms")




let container = null;

// filtrage de aside

containerRooms.onclick = e => {

    container = e.target.closest(".salle")
    if (container) {

        salleName = e.target.closest(".salle").id.toLowerCase()

        containerCards.innerHTML = ""

        arrAllEmployes.forEach(employe => {

            let employeRole = employe.role.toLowerCase()

            
            console.log()


            if (salleName == "archive" && employeRole == "manager" && employe.location == "unasigned") {

                displayOne(employe)

            } else if (salleName == "conference" && (employeRole == "manager" || employeRole == "nettoyage") && (employe.location == "unasigned")) {
                displayOne(employe)

            } else {
                if ((salleName != "archive") && (employeRole.split(" ").join("") === salleName || employeRole == "manager" || employeRole == "nettoyage" || salleName == "conference") && (employe.location == "unasigned")) {
                    displayOne(employe)



                }
            }
        })


        document.getElementById("containerCards").addEventListener("click", e => {
            // checker = true
            let carde = e.target.closest(".smallCard")
            let nameRech = carde.querySelector("#nomId").textContent

            arrAllEmployes.forEach(employe => {
                if (nameRech == employe.nom) {

                    document.getElementById("bigCard").onclick = (e) => {
                        if ((e.target.innerHTML).trim() == "Ajouter") {
                            containerPopupBigCard.classList.add("hidden")
                            let roomCliquer = container.querySelectorAll(".smallerCard")
                            // console.log(test)
                            
                            let placeCard = container.querySelector(".placeCard")
                            if (roomCliquer.length < 4) {
                                cardSmaller(employe, placeCard)
                                alertServeur()
                                alertSecurity()
                                alertReceptionnistes()
                                alertArchives()
                                employe.location = "asigned"
                                carde.remove()
                            } else {
                                alert("le maximum des salles est 4 personnes")
                                return;

                            }






                            // document.getElementById("containerCards").removeChild(carde)


                            // erooooooooooooooooooooooooor heeeeeeeeeeer hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh








                        }
                    }
                }





            })

        })














    }




    // arrAllEmployes.forEach(worker => {








    // let containerRooms = document.getElementById("containerRooms")


    const smallerCards = containerRooms.querySelectorAll(".smallerCard")



    smallerCards.forEach(card => {
        // une fois t cliki sur smallerCard it show info
        card.onclick = e => {
            e.stopPropagation()




            let nameRech = card.querySelector("#rechNom").textContent.trim()




            arrAllEmployes.forEach(worker => {

                if (nameRech == worker.nom.trim().split(" ")[0]) {
                    console.log(worker.nom.trim().split(" ")[0])
                    console.log(nameRech)





                    containerPopupBigCard.classList.remove("hidden")
                    containerPopupBigCard.innerHTML = ""
                    containerPopupBigCard.innerHTML = `
<div id="bigCard" class="w-full max-w-sm">
    <div class="z-50 bg-white rounded-[15px] overflow-hidden">
        <div class="p-5">
            <div class="flex gap-4">
                <div class="flex flex-col items-center">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-3  mb-3">
                        <img src="${worker.photo}" alt="Photo ${worker.nom}" class="w-full h-full object-cover">
                    </div>
                    <h2 class="text-lg text-gray-800 text-center">${worker.nom}</h2>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="pb-2 border-b-2 border-[#66b99d]">
                        <p class="text-xs text-gray-600 font-medium">Role</p>
                        <p class=" font-semibold text-[#66b99d]">${worker.role}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-medium uppercase ">Email</p>
                        <p class="text-xs text-gray-700 font-medium">${worker.email}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-medium uppercase">Telephone</p>
                        <p class="text-xs text-gray-700 font-medium">${worker.tel}</p>
                    </div>
                    <div>
                        <p class=" text-xs text-gray-500 font-medium uppercase mb-1">Expérience</p>
                        <div class="flex flex-col gap-2">${experienceDisplay(worker.experience)}</div>
                    </div>
                </div>
            </div>
            <div class="mt-5 flex gap-3">
                <button id="annulerBigCard" class="w-full py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-400">Annuler</button>
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

           

            










        }
        // endCard



        btnDelete = containerRooms.querySelectorAll(".btnDeleteSmallerCard")


        btnDelete.forEach(btn => {

            btn.onclick = e => {

                let smallerCard = e.target.closest(".smallerCard")


                e.stopPropagation()
                smallerCard.remove()
                alertServeur()
                alertSecurity()
                alertReceptionnistes()
                alertArchives()

                arrAllEmployes.forEach(employ => {
                    if (employ.nom.split(" ")[0].trim() == smallerCard.querySelector("#rechNom").textContent.trim()) {
                        employ.location = "unasigned"
                    }

                })
                containerCards.innerHTML = ""
                displayHtmlSmallCard(arrAllEmployes)






                // arrAllEmployes.forEach(employe => {
                //     if (nameRech == employe.nom.trim().split(" ")[0]) {
                //         employe.location = "unasigned"
                //     }
                // })
                // unasigned don't apply for everyone





            }
        })



    })





    // displayHtmlSmallCard(worker)

    // })








}

function alertServeur() {
    let roomLength = null;
    let serveurRoom = document.querySelector("#technicienIt")
    let smallerCards = serveurRoom.querySelectorAll(".smallerCard")
    roomLength = smallerCards.length;

    if (roomLength > 0) {
        console.log("mouad")
        serveurRoom.classList.remove("bg-red-900/50")
    }
    else {
        serveurRoom.classList.add("bg-red-900/50")
    }
}


function alertSecurity() {
    let roomLength = null;
    let serveurRoom = document.querySelector("#agentDeSecurite")
    let smallerCards = serveurRoom.querySelectorAll(".smallerCard")
    roomLength = smallerCards.length;

    if (roomLength > 0) {
        console.log("mouad")
        serveurRoom.classList.remove("bg-red-900/50")
    }
    else {
        serveurRoom.classList.add("bg-red-900/50")
    }
}

function alertReceptionnistes() {
    let roomLength = null;
    let serveurRoom = document.querySelector("#Receptionnistes")
    let smallerCards = serveurRoom.querySelectorAll(".smallerCard")
    roomLength = smallerCards.length;

    if (roomLength > 0) {
        console.log("mouad")
        serveurRoom.classList.remove("bg-red-900/50")
    }
    else {
        serveurRoom.classList.add("bg-red-900/50")
    }
}

function alertArchives() {
    let roomLength = null;
    let serveurRoom = document.querySelector("#archive")
    let smallerCards = serveurRoom.querySelectorAll(".smallerCard")
    roomLength = smallerCards.length;

    if (roomLength > 0) {
        console.log("mouad")
        serveurRoom.classList.remove("bg-red-900/50")
    }
    else {
        serveurRoom.classList.add("bg-red-900/50")
    }
}


// }
// worikiing   heeere
function cardSmaller(personne, roomClicked) {
// change test size
    roomClicked.innerHTML += `
    <div class="smallerCard  
     w-[94px] lg:w-[110px] max-w-[120px] md:max-w-[140px]
    bg-[#66b99d] rounded-[15px] 
    flex items-center gap-1 p-2 relative">

    <img src="${personne.photo}"
        alt="photo de ${personne.nom.split(' ')[1]}"
        class="w-10 h-10 md:w-12 md:h-12 rounded-[100%]">

    <div class="flex flex-col ">
        <p id="rechNom" class="text-[6px] lg:text-[8px] text-white text-center">
            ${personne.nom.split(" ")[0]}
        </p>
        <p class=" text-[5px] lg:text-[7px]  text-red-600 ">
            ${personne.role}
        </p>
    </div>

    <button class="btnDeleteSmallerCard 
        absolute -top-2 -right-2 
        bg-white w-5 h-5 md:w-6 md:h-6 
        rounded-full text-red-700 text-xs flex items-center justify-center">
        X
    </button>
</div>
`
}

containerCards.addEventListener('click', e => {
    let card = e.target.closest(".smallCard")
    let nameSearch = card.querySelector("#nomId").textContent
    arrAllEmployes.find(personne => {
        if (nameSearch == personne.nom) {
            containerPopupBigCard.classList.remove("hidden")
            containerPopupBigCard.innerHTML = `
<div id="bigCard" class="w-full max-w-sm">
    <div class="z-50 bg-white rounded-[15px] overflow-hidden">
        <div class="p-5">
            <div class="flex gap-4">
                <div class="flex flex-col items-center">
                    <div class="w-24 h-24 rounded-full overflow-hidden border-3  mb-3">
                        <img src="${personne.photo}" alt="Photo ${personne.nom}" class="w-full h-full object-cover">
                    </div>
                    <h2 class="text-lg text-gray-800 text-center">${personne.nom}</h2>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="pb-2 border-b-2 border-[#66b99d]">
                        <p class="text-xs text-gray-600 font-medium">Role</p>
                        <p class=" font-semibold text-[#66b99d]">${personne.role}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-medium uppercase ">Email</p>
                        <p class="text-xs text-gray-700 font-medium">${personne.email}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 font-medium uppercase">Telephone</p>
                        <p class="text-xs text-gray-700 font-medium">${personne.tel}</p>
                    </div>
                    <div>
                        <p class=" text-xs text-gray-500 font-medium uppercase mb-1">Expérience</p>
                        <div class="flex flex-col gap-2">${experienceDisplay(personne.experience)}</div>
                    </div>
                </div>
            </div>
            <div class="mt-5 flex gap-3">
                <button id="AjouterBigCard" class="w-[50%] py-2 text-sm  bg-[#66b99d] text-white rounded-lg ">Ajouter</button>
                <button id="annulerBigCard" class="w-[50%] py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-400">Annuler</button>
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

