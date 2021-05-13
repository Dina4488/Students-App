export default class MessageModel {
    constructor(plainMsg){
        // this.courseId = plainCourse.courseId;
        this.id = plainMsg.id;
        this.topic = plainMsg.topic;
        this.desc = plainMsg.desc;
        this.userId = plainMsg.userId;
        this.name = plainMsg.name;  
    }

  
}