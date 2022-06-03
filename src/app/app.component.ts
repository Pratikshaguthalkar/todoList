import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
 
  // todos : any;
  todoObj: any;
  newTodo: any;
  amt: any;
  total : any;

  todos = [{
    id:1,
    name : 'todo1',
    iscompleted : false,
    amount:200,
    createdAt : 2022-11-2,
    isDelete: false
  },
  {
    id:2,
    name : 'todo2',
    iscompleted : false,
    amount: 1000,
    createdAt : 2022-11-2,
    isDelete: false
  },
  {
    id:3,
    name : 'todo3',
    iscompleted : false,
    amount: 430,
    createdAt : 2022-11-2,
    isDelete: false
  }
  ]
  

  

  constructor(){
    
    // this.todos= [];
   
  }
  

  // addTodo(){
    
    
  //   this.todoObj={
  //     name : this.newTodo,
  //     amount: this.amt
  //     // iscompleted: false
  //   }
  //   this.todos.push({id: 3, name: this.todoObj.name, iscompleted: false, amount: this.todoObj.amount, createdAt:2011-10-4, isDelete: false});
     
  //   this.newTodo = '';
    
    
  // }

  deleteTodo(index:any){

   this.todos= this.todos.filter(a=>a.id!=index)



    debugger
    // if(this.todos[index].iscompleted){
    //   this.todos.splice(index,1);
    // }
    
  }
  

  // log(x:any){
  //   console.log(x);
  // }

  submit(f:any){
     
    console.log(f.value.title);
    this.todos.push({id: 3, name: f.value.title, iscompleted: false, amount: f.value.amount, createdAt:2011-10-4, isDelete: false});
    
    
  }
  
  addition(){
    const sum = this.todos.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);
    console.log(sum);
    this.total = sum;
  }
  
}
