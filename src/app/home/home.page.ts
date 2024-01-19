import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioCursosService } from '../servicio-cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cursosAnadidos$!: Observable<any[]>;

  constructor(private servicioCursos: ServicioCursosService) {}

  ngOnInit() {
    this.cursosAnadidos$ = this.servicioCursos.getCursos();
  }

  anadirCurso(curso: any) {
    this.servicioCursos.anadirCurso(curso.nombre, curso.puntos, curso.imagen);
  }

}
