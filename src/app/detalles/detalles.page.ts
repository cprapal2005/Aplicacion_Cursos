import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioCursosService } from '../servicio-cursos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  public curso: any;
  public cursoID! : string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private servicioCursos: ServicioCursosService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/home']);
        return;
      }
      this.cursoID = paramMap.get('id')+"";
      this.curso = this.servicioCursos.getCurso(this.cursoID);
    });
  }

  borrarCurso() {
    this.alertCtrl
      .create({
        header: 'Confirmar',
        message: '¿Estas seguro de borrar el curso?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: () => {
              this.servicioCursos.eliminarCurso(this.cursoID);
              this.router.navigate(['/home']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  modificarPuntos(event: CustomEvent) {
    if(isFinite(event.detail.value)) this.servicioCursos.modificarCurso(this.cursoID, this.curso.nombre, parseInt(event.detail.value));
  }

  modificarNombre(event: CustomEvent) {
    this.servicioCursos.modificarCurso(this.cursoID, event.detail.value, parseInt(this.curso.puntos));
  }

}
