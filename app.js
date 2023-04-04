let form = document.getElementById("form")
let arrayContier = JSON.parse(sessionStorage.getItem("continer")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let userName =  e.target.userName.value.toUpperCase()
    let password = e.target.password.value
    let email = e.target.email.value
    let phoneNumber = e.target.phoneNumber.value

    const usernameRegex = /^\S+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const phoneRegex = /^07\d{8}$/

    if (!usernameRegex.test(userName) || !passwordRegex.test(password) || !emailRegex.test(email) || !phoneRegex.test(phoneNumber)) {

        if (!usernameRegex.test(userName)) {
            alert("please enter username without space")
        }
        if (!passwordRegex.test(password)) {
            alert("please enter password more than 8 characters, with at least 1 number, uppercase, and special characters The allowed special characters are @, $, !, %, *, ?, and &.")
        }
        if (!emailRegex.test(email)) {
            alert("follows email format ")
        }
        if (!phoneRegex.test(phoneNumber)) {
            alert("phone numbers that start with 07 and have exactly 10 digits.")
        }

    } else {
    let newRegester = new UserData(userName, password, email, phoneNumber)
    for (let i = 0; i < arrayContier.length; i++) {
        if(arrayContier[i].userName == newRegester.userName){
            alert("the user is already exists please insert valid user name")
            return
        }
        
    }
    arrayContier.push(newRegester)
    sessionStorage.setItem("continer", JSON.stringify(arrayContier))
    form.reset()
    }
})
class UserData {
    constructor(userName, password, email, phoneNumber) {
        this.userName = userName
        this.password = password
        this.email = email
        this.phoneNumber = phoneNumber
    }
}