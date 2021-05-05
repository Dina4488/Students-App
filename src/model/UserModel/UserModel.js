export default class UserModel {
    constructor(plainUser){
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.role = plainUser.role;

    }
}