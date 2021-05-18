export default class MessageModel {
   
;    constructor(plainMsg){        
        this.id = plainMsg.id;
        this.topicId = plainMsg.topicId;
        this.topicName = "";
        this.desc = plainMsg.desc;
        this.userId = plainMsg.userId;
        this.name = plainMsg.name;
        this.isNew = plainMsg.isNew;
    }    
}
   