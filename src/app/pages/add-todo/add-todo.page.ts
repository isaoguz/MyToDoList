import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import *as moment from 'moment';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  Title:string=null;
  Description:string=null;
  Date:string=moment().format("DD-MM-YYYY hh:mm");
  constructor(private _api:ApiService,private _router:Router,private _notify:NotifyService,private _utility:UtilityService) { }

  ngOnInit() {
  }

  
  save(){
    if(    this.Title==null && this.Description==null){
      this._notify.show();
      this._notify.presentToast("Eksik Bilgi Girdiniz","danger","top",2000)
    }
    else{

      this._api.post('AddTodo','',{
        title:this.Title,
        description:this.Description,
        date : this.Date
      }).subscribe(
        (resp)=>{console.log(resp)
          this._notify.show();
          this._notify.presentToast("Save to To Do List","success","top",1000)
          
        },
        (err)=>{console.log(err)}
        )
        
      }
  }


  goTo(){
    this._router.navigate(["/todo-list"])
  }
}
