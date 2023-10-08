export const validateName = (value) => {
    const nameRegex = /^[A-Za-z\s]*$/;
    return nameRegex.test(value) || value === "";
};