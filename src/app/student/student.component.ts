import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from '../istudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:Istudent[] = [];
  constructor( private stdservice:StudentService){}
    ngOnInit(): void {
  this.students = this.stdservice.GetAll();
    }
    delete(id:number){
      var res = confirm("Do you Want To delete it");
      if (res) {
       this.stdservice.delete(id);
      }
    }
  }
