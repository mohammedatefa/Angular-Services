import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Istudent } from '../istudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-detailes',
  templateUrl: './students-detailes.component.html',
  styleUrls: ['./students-detailes.component.css']
})
export class StudentsDetailesComponent  implements OnInit {
  studentid:number = 0;
  Student:Istudent|undefined;
  constructor( private activatedROUTE:ActivatedRoute,private stdservice:StudentService) {}
    ngOnInit(): void {
  this.studentid = this.activatedROUTE.snapshot.params['id'];
  this.Student = this.stdservice.GetById(this.studentid);
    }
  }
