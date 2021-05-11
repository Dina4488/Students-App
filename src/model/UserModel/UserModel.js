export default class UserModel {
    constructor(plainUser){
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.role = plainUser.role;
        this.courses = plainUser.courses;
        this.name = this.fname + " " + this.lname
        // console.log(this.courses);
    }

    login(email,pwd){
        return email.toLowerCase() === this.email.toLowerCase() 
            && pwd === this.pwd ;
    }

    
}