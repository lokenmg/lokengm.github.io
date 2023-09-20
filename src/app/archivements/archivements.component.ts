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
      descripcion: "Con una certificación ACE, demostrará su competencia en una variedad de áreas de contenido interactivo y en línea, tales como diseño web, video, aplicaciones de Internet ricas, comunicaciones técnicas o eLearning.",
      certification: "https://www.adobe.com/content/dam/acom/en/training/certification/ace/ACE-Logo-Color-2015.svg"
    }

    let logros2={
      tipo: "certificado",
      nombre: "PROFESIONAL CERTIFICADO DE DESARROLLO WEB",
      descripcion: "Esta certificación cubre HTML, CSS, JavaScript y PHP .",
      certification: "https://www.sololearn.com/Certificate/1014-2026329/pdf/"
    }

    let logros3={
      tipo: "Certificado",
      nombre: "SERVICIOS DE AMAZON WEB (AWS CERTIFIED DEVELOPER)",
      descripcion: "experto en el diseño y desarrollo de soluciones basadas en la nube en AWS, y tener alguna experiencia profesional con el desarrollo y mantenimiento de aplicaciones escritas para varias soluciones de Amazon.",
      certification: "https://www.sololearn.com/Certificate/1051-2026329/pdf/"
    }

    let logros4={
      tipo: "Certificado",
      nombre: "Intro to pythom kaggle",
      descripcion: "Aprende los conceptos básicos de python en este curso práctico e interactivo con Kaggle.",
      certification: "https://github.com/lokenmg/python/blob/master/curso1/rodrigo%20mencias%20-%20Python.png"
    }

    let logros5={
      tipo: "Certificado",
      nombre: "Intro to pandas kaggle",
      descripcion: "Aprende los conceptos básicos de pandas en este curso práctico e interactivo con Kaggle.",
      certification: "https://github.com/lokenmg/python/blob/master/pandas/rodrigo%20mencias%20-%20Pandas.png"
    }

    let logros6={
      tipo: "Certificado",
      nombre: "Intro to machine learning kaggle",
      descripcion: "Aprende los conceptos básicos de Machine Learning en este curso práctico e interactivo con Kaggle.",
      certification: "https://github.com/lokenmg/python/blob/master/rodrigo%20mencias%20-%20Intro%20to%20Machine%20Learning.png"
    }

    let logros7={
      tipo: "Certificado",
      nombre: "intermediate Machine learning kaggle",
      descripcion: "Aprende los conceptos básicos de SQL en este curso práctico e interactivo con Kaggle.",
      certification: "https://github.com/lokenmg/python/blob/master/IntermediateML/rodrigo%20mencias%20-%20Intermediate%20Machine%20Learning.png"
    }

    this.archivement.push(logros1);
    this.archivement.push(logros2);
    this.archivement.push(logros3);
    this.archivement.push(logros4);
    this.archivement.push(logros5);
    this.archivement.push(logros6);
    this.archivement.push(logros7);
  }

}
