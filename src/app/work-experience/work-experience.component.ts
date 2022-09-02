import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience : Array<any>=[];
  constructor() { }

  ngOnInit(): void {



  let work1 = {
    fecha:"2010-2018",
    ubicacion:"Mariano Escobedo",
    puesto:"Encargado de mostrador",
    empresa:"Abarrotes Mirian",
    logros: [
      {descripcion: "vendedor del año"},
      {descripcion: "mas ventas en un día"}
    ]
  };

  let work2={
    fecha:"2018-2022",
    ubicacion:"Mariano Escobedo",
    puesto:"Encargado",
    empresa:"Abarrotes Mirian",
    logros: [
      {descripcion: "vendedor del año"},
      {descripcion: "mas ventas en un día"},
      {descripcion: "mas ventas de abarrotes..."}
    ]
  };

  this.workExperience.push(work1);
  this.workExperience.push(work2);

  }
}
