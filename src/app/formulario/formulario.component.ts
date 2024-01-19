import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  @Output() curso = new EventEmitter<any>();
  cursoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  añadirCurso(curso: string, puntos: number) {

    this.curso.emit({nombre: curso, puntos: puntos, imagen: null});

  }
  
  ngOnInit() {
    this.cursoForm = this.formBuilder.group({
      curso: ['', [Validators.required]],
      puntos: ['', [Validators.required, Validators.pattern("^[0-9]")]]
    });
  }

  onSubmit() {
    if (this.cursoForm.valid) {
      this.añadirCurso(this.cursoForm.value.curso, parseInt(this.cursoForm.value.puntos));
    }
  }

}
