class Autenticacion{
    constructor(){
        this.username = "" ;
        this.password = "";
    }

    login = (username, password) => {
        this.username = username;
        this.password = password;
       if (username === "admin" && password === "passwd") {
           console.log("User logged in");
         alert("User logged in");
       } else {
           console.log("User or passwd incorrect");
            alert("User or passwd incorrect");
       }
    }
}

export {Autenticacion};