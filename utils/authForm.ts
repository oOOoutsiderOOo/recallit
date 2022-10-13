const emailValidationFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;

export const validateInput = (name: string, value: string) => {
    let hasError = false;
    let error = "";
    switch (name) {
        case "email":
            if (value.trim() === "") {
                hasError = true;
                error = "Please enter an email ";
            } else if (!emailValidationFormat.test(value)) {
                hasError = true;
                error = "Email is not valid";
            } else {
                hasError = false;
                error = "";
            }
            break;

        case "password":
            if (value.trim() === "") {
                hasError = true;
                error = "Please enter a password";
            } else if (value.length < minPasswordLength) {
                hasError = true;
                error = `the password must be at least ${minPasswordLength} characters long`;
            } else {
                hasError = false;
                error = "";
            }
            break;

        default:
            break;
    }

    return { hasError, error };
};

export const onInputChange = (type, value, dispatch, formState) => {
    const { hasError, error } = validateInput(type, value);
    let isFormValid = true;

    const otherField = type === "email" ? "password" : "email";
    if (hasError === false && formState[otherField].hasError === false) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }

    dispatch({
        type: "UPDATED_FORM",
        payload: { ...formState[type], value, hasError, error, name: type, isFormValid },
    });
};
