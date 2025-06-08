import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage {
  perfilForm: FormGroup
  animando = false

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nombre: [''],
      carrera: [''],
      email: [''],
      fechaNacimiento: ['']
    })
    const datosGuardados = localStorage.getItem('perfilForm')
    if (datosGuardados) {
      this.perfilForm.setValue(JSON.parse(datosGuardados))
    }
  }


  guardar() {
    const datos = this.perfilForm.value
    localStorage.setItem('perfilForm', JSON.stringify(datos))
    console.log('Perfil guardado:', datos)
  }


limpiar() {
  this.perfilForm.reset()
  localStorage.removeItem('perfilForm')

  this.animando = true
  setTimeout(() => {
    this.animando = false
  }, 600)
}

}
