import { Injectable } from '@angular/core';
import { Istudent } from './istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentlist:Istudent[] = [
    {id:1,name:"Mohamed Atef",address:"Minya",age:25,school:"boys"},
    {id:2,name:"Marwa Reda",address:"Cairo",age:24,school:"girls"},
    {id:3,name:"Ahmed Nabil",address:"Giza",age:25,school:"boys"},
    {id:4,name:"Rana Ahmed",address:"Minya",age:24,school:"girls"},
    {id:5,name:"Ayman Moahmed",address:"Cairo",age:25,school:"boys"}
  ]
  students : Istudent[];
  constructor() {
    this.students = this.studentlist;
   }

   GetAll():Istudent[]{
    return this.students;
   }
   GetById(id:number): Istudent | undefined{
    return this.students.find(S => S.id == id);
   }
   add(std:Istudent): void{
    let nextid = this.studentlist[this.studentlist.length - 1].id +1;
    std.id = nextid;
    this.students.push(std);
   }
   edit(id:number,std:Istudent):void{
    let index=this.students.findIndex(p=> p.id==id);
    if (index != -1) {
      this.students[index].name = std.name;
      this.students[index].age = std.age;
      this.students[index].address = std.address;
      this.students[index].school = std.school;
    }
   }
   delete(id:number):void{
    let index=this.students.findIndex(p=> p.id==id);
    if (index != -1)
    {
      this.students.splice(index,1);
    }
   }

}
