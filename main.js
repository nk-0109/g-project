/* Mock Lab Practical */
/* NAME */ 
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var feedbackField = document.getElementById("feedback");
var confirmButton = document.getElementById("confirmSelection");
var fullNameField = document.getElementById("fullName");


/*
confirmButton.addEventListener("click", function() {
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    validateName(firstName, lastName);
    fullNameField.value = firstName + " " + lastName;
    
});
*/


firstNameInput.addEventListener("input", function() {
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    validateName(firstName, lastName);
    fullNameField.value = firstName + " " + lastName;
    
});

lastNameInput.addEventListener("input", function() {
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    validateName(firstName, lastName);
    fullNameField.value = firstName + " " + lastName;
    
});



function validateName(firstName, lastName) {
    if (firstName === "" || lastName === "") {
        feedbackField.innerHTML = "Please fill in both your first and last name";
        feedbackField.style.color = "red";
    } else if (firstName.length <= 2 || lastName.length <= 2 || firstName.indexOf(" ") !== -1 || lastName.indexOf(" ") !== -1) {
        feedbackField.innerHTML = "Names must be longer than 2 characters and have no spaces";
        feedbackField.style.color = "red";
    } else {
        feedbackField.innerHTML = "\u2714 valid name";
        feedbackField.style.color = "green";
    }
}



/* AVATAR  */ 
var person1 = document.getElementById("person1");
var person2 = document.getElementById("person2");

person1.addEventListener("click", function () {
    clearSelected();
    person1.classList.add("selected");
    checkAllFields();
})

person2.addEventListener("click", function () {
    clearSelected();
    person2.classList.add("selected");
    checkAllFields();
})


function clearSelected() {
    person1.classList.remove("selected");
    person2.classList.remove("selected");
}


/* SUMMARY */

function getSelectedPersonId() {
    if (person1.classList.contains("selected")) {
        return person1.id;
    } else if (person2.classList.contains("selected")) {
        return person2.id;
    } else {
        return null;
    }
};


confirmButton.addEventListener("click", function() {

    var selectedPersonId = getSelectedPersonId();

    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    var button = document.getElementById("confirmSelection");
    if (firstName === "" || lastName === "" || !selectedPersonId) {
        button.textContent = "Please fill all fields";
        button.style.color = "red";
        return;
    }

    validateName(firstName, lastName);

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    var fullName = firstName + " " + lastName;
    
    //var selectedPerson = document.getElementById(selectedPersonId);
    //var profileImg = selectedPerson.src;

    sessionStorage.setItem("fullName", fullName);
    sessionStorage.setItem("selectedAvatar", selectedPersonId);


    window.location.href = "profile.html";
    
});


// CHECK ALL FIELDS VALID BEFORE NEXT PAGE  
function checkAllFields() {
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var selectedPersonId = getSelectedPersonId();
    var button = document.getElementById("confirmSelection");

    if (firstName !== "" && lastName !== "" && selectedPersonId) {
        button.textContent = "Graduate";
        button.style.color = "";
    } 
}

firstNameInput.addEventListener("input", checkAllFields);
lastNameInput.addEventListener("input", checkAllFields);





