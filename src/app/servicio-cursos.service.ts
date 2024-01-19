import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursosService {

  private subjectCursos: BehaviorSubject<any>;
  private cursos: any[];
  

  constructor() { 
    this.cursos = [
      {nombre: "BBDD",
       puntos: 6,
       imagen: null 
      },
      {nombre: "Dentista",
       puntos: 8,
       imagen: null 
      }
    ];
    this.subjectCursos= new BehaviorSubject<any>(this.cursos);
  }

  getCursos() {
    return this.subjectCursos.asObservable();
  }

  anadirCurso(nombreCurso: string, puntosCurso: number, imagenCurso: string) {
    this.cursos.push({nombre: nombreCurso, puntos: puntosCurso, imagen: imagenCurso});
    this.subjectCursos.next([...this.cursos]);
  }

  eliminarCurso(nombreCurso: string) {
    this.cursos = this.cursos.filter(curso => curso.nombre.includes(!nombreCurso));
    this.subjectCursos.next([...this.cursos]);
  }

}
