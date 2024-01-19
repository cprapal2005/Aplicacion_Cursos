import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  public curso: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Accede a los parámetros de ruta utilizando snapshot.params
    this.curso = {
      nombre: this.activatedRoute.snapshot.params['nombre'],
      puntos: this.activatedRoute.snapshot.params['puntos'],
      imagen: this.activatedRoute.snapshot.params['imagen']
    };
  }
}
