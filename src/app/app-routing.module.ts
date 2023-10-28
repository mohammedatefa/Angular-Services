import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDetailesComponent } from './students-detailes/students-detailes.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",redirectTo:"Student",pathMatch:"full"},
  {path:'Student',component:StudentComponent},
  {path:'Student/details/:id',component:StudentsDetailesComponent},
  {path:'Student/edit/:id',component:AddstudentComponent},
  {path:'Student/new',component:AddstudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
