function validateNumericInput() {
    let age = document.forms["numericForm"]["age"].value;

    if (age === "" ){
        alert("Age filed cannot be empty.");
        return false;
    }    

    if (isNaN(age)) {
        alert("Age must be a numeric value.");
        return false;
    }

    if (age < 1 || age > 120) {
        alert("Age must be between 1 and 120.");
        return false;
    }

    // If all validations pass
    return true;
}