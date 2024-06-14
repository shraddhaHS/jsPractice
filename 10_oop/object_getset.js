const User = {
    _email: 'shraddha@gmail.com',
    _password: "abc123",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const hello = Object.create(User)
console.log(hello.email);