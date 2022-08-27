import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { NotifyService } from 'src/app/services/notify/notify.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  
  veri:Object;
  constructor(private _api:ApiService,private _notify:NotifyService) { }
  
  ngOnInit() {
    
    this.getir()
  }


  getir(){
    this._notify.show();
    this._api.get('GetTodo',{
    }).subscribe(
      (resp)=>{console.log(resp);
        this.veri=resp;
      },
      (err)=>{console.log(err)}
    )
  }




}
