export class Todo {
    id:number;
    name:string='';
    done:boolean=false;
    taskDate:Date=new Date();

    constructor(values: object={}){        
        Object.assign(this,values)
    }
}

