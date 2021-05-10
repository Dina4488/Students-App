export default class StudentModel {
    constructor(plainUser){
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;      
        this.courses = plainUser.courses;
        this.name = this.fname + " " + this.lname;
    }

  

    
}