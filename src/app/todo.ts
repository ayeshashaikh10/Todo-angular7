export class Todo {
    id:number;
    name:string='';
    done:boolean=false;

    constructor(values: object={}){        
        Object.assign(this,values)
    }
}

