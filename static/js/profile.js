function validate() {
    let form = document.forms["profile"];
    let username = form["username"];
    if (username.value.length === 0) {
        console.log("username cannot be empty");
        return false;
    }
    if (username.value.length < 4) {
        console.log("username cannot be less than 4 characters");
        return false;
    }
    usernameRegEx = /^[a-zA-Z0-9@.+-_]*$/;
    if (usernameRegEx.test(username.value) == false) {
        console.log("invalid username")
        return false;
    }
    let email = form["email"];
    if (email.value.length === 0) {
        console.log("email cannot be empty");
        return false;
    }
    var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegEx.test(email.value) == false) {
        console.log("invalid email")
        return false;
    }
    return true;
}