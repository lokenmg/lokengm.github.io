import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {

  constructor() { }
  education : Array<any>=[];

  ngOnInit(): void {

    let education1 ={
      fecha   : "2008 - 2014",
      escuela : "Lic. Adolfo Mateos",
      lugar   : "Mariano Escovedo Ver.",
      promedio: "9.1"

    }

    let education2 ={
      fecha   : "2014 - 2017",
      escuela : "Escuela Secundaria Gral no. 2",
      lugar   : "Mariano Escobedo",
      promedio: "8.5"
    }

    let education3 ={
      fecha   : "2017 - 2020",
      escuela : "CBTis 142",
      lugar   : "Orizaba Veracruz",
      promedio: "9.0"
    }
    let education4 ={
      fecha   : "2020 - 2024",
      escuela : "Universidad Veracruzana",
      lugar   : "Ixtaczoquitlan",
      promedio: "9.0"
    }

    this.education.push(education1);
    this.education.push(education2);
    this.education.push(education3);
    this.education.push(education4);
  }

}
