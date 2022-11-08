class Note{
    id = Date.now()
    title;
    content
    color
    pin = false;
    date = Date.now()
    bulletList = []
    notificationState = false;
    



    constructor(title,content,color){
        this.title = title;
        this.content = content;
        this.color = color;
    }

    pinHandler = () =>{
        this.pin = !this.pin;
    }

    dateHandler = date =>{
        this.date = date;
    }

    editNote = (title,content,color)=>{
        this.title = title;
        this.content = content;
        this.color = color;
    }

    addToBulletList = (name) =>{
        this.bulletList.push(new BulletItem(name))
    }

    bulletListStateHandler = item =>{
        //TODO dont know if needed
    }

    notificationStateHandler = ()=>{
        this.notificationState = !this.notificationState;
    }




    
}