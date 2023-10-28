
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router  } from '@angular/router';
import { Istudent } from '../istudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent  implements OnInit {
  Student:Istudent = {
    id: 0,
    name: '',
    address: '',
    age: 0,
    school: ''
  }
  constructor(private stdservice:StudentService , private activatedroute:ActivatedRoute ,private router:Router){
  }
  studentid:number=0;
   ngOnInit(): void {
    this.studentid = this.activatedroute.snapshot.params['id'];
    if (this.studentid != 0) {
     let std = this.stdservice.GetById(this.studentid);
     if (std) {this.Student = std}
    }
   }

  GetDate(e:Event){
   e.preventDefault();
   // Edit
   if (this.studentid) {
     this.stdservice.edit(this.studentid,this.Student);
   }
   // add
   else{
     this.stdservice.add(this.Student);
   }
   // redirection
   this.router.navigate(['/Student']);
  }
 }
