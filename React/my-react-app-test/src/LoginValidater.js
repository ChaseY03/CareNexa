function CredentialCheck(input){

    let result = {};

    if (input.username === "") {
        result.username = "Please enter username";
    }
    else {
        result.username = "";
    }

    if (input.password === "") {
        result.password = "Please enter password"
    }
    else {
        result.password = "";
    }

    return result;
}

export default CredentialCheck;