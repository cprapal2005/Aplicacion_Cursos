import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursosService {

  private subjectCursos: BehaviorSubject<any>;
  private cursos: any[];
  private contId: number = 0;

  constructor() { 
    this.cursos = [
      {id: "curso1",
        nombre: "BBDD",
        puntos: 6,
        imagen: null 
      },
      {id: "curso2",
        nombre: "Dentista",
        puntos: 8,
        imagen: null 
      }
    ];
    this.contId=2;
    this.subjectCursos= new BehaviorSubject<any>(this.cursos);
  }

  getCursos() {
    return this.subjectCursos.asObservable();
  }

  getCurso(id: string) {
    return {
      ...this.cursos.find(curso => {
        return curso.id === id;
      })
    };
  }

  anadirCurso(nombreCurso: string, puntosCurso: number, imagenCurso: string) {
    this.contId++;
    this.cursos.push({id: "curso"+this.contId, nombre: nombreCurso, puntos: puntosCurso, imagen: imagenCurso});
    this.subjectCursos.next([...this.cursos]);
  }

  eliminarCurso(id: string) {
    this.cursos = this.cursos.filter(curso => {return curso.id !== id;});
    this.subjectCursos.next([...this.cursos]);
  }

  modificarCurso(id: string, nombre: string, puntos: number) {

    this.cursos.find(curso => {return curso.id == id;}).nombre=nombre;
    this.cursos.find(curso => {return curso.id == id;}).puntos=puntos;

  }

}
