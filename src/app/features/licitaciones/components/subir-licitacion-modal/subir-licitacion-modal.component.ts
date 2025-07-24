import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subir-licitacion-modal',
  templateUrl: './subir-licitacion-modal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubirLicitacionModalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SubirLicitacionModalComponent>
  ) {
    this.form = this.fb.group({
      id: [null, Validators.required],
      titulo: ['', Validators.required],
      organismo: ['', Validators.required],
      fechaCierre: ['', Validators.required],
      estado: ['Abierta', Validators.required],
      segmento: ['CORP', Validators.required],
      presupuesto: [''],
      productoServicio: ['']
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const nuevaLicitacion = {
        ...this.form.value,
        fechaCierre: this.form.value.fechaCierre.toISOString().split('T')[0]
      };
      this.dialogRef.close(nuevaLicitacion);
    }
  }
}
