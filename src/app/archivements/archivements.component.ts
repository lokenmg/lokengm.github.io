import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archivements',
  templateUrl: './archivements.component.html',
  styleUrls: ['./archivements.component.scss']
})
export class ArchivementsComponent implements OnInit {

  constructor() { }

  archivement : Array<any>=[];

  ngOnInit(): void {
    let logros1={
      tipo: "Certificado",
      nombre :"EXPERTO CERTIFICADO DE ADOBE (ACE)",
      descripcion: "Con una certificación ACE, demostrará su competencia en una variedad de áreas de contenido interactivo y en línea, tales como diseño web, video, aplicaciones de Internet ricas, comunicaciones técnicas o eLearning."
    }

    let logros2={
      tipo: "certificado",
      nombre: "PROFESIONAL CERTIFICADO DE DESARROLLO WEB",
      descripcion: "Esta certificación cubre HTML, CSS, JavaScript y PHP ."
    }

    let logros3={
      tipo: "Certificado",
      nombre: "SERVICIOS DE AMAZON WEB (AWS CERTIFIED DEVELOPER)",
      descripcion: "experto en el diseño y desarrollo de soluciones basadas en la nube en AWS, y tener alguna experiencia profesional con el desarrollo y mantenimiento de aplicaciones escritas para varias soluciones de Amazon."
    }

    this.archivement.push(logros1);
    this.archivement.push(logros2);
    this.archivement.push(logros3);
  }

}
