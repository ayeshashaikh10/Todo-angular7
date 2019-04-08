export class Todo {
    taskId:number;
    name:string='';
    done:boolean=false;
    taskDate:any;
    todoType:string='';

    constructor(values: object={}){        
        Object.assign(this,values)
    }
}

export class subTodo {
    subTaskId:number;
    subTaskName:string='';
    subTaskDone:boolean=false;
    subTaskDate:any;
    taskId:number;
    notes:string='';

    constructor(values: object={}){        
        Object.assign(this,values)
    }
}
