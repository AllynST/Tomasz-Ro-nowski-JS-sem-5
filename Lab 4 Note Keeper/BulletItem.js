class BulletItem{
    name
    state = false;

    constructor(name){
        this.name = name;
    }

    stateHandler = ()=>{
        this.state = !this.state;
    }

    nameChangeHandler = name =>{
        this.name = name;
    }
}