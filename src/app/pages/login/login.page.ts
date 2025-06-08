import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  usuario = ''
  password = ''

  constructor(private router: Router, private alertCtrl: AlertController) {}

  async ingresar() {
    const usuarioValido = /^[a-zA-Z0-9]{3,8}$/.test(this.usuario)
    const passwordValida = /^[0-9]{4}$/.test(this.password)

    if (!usuarioValido || !passwordValida) {
      const alerta = await this.alertCtrl.create({
        header: 'Error',
        message: 'El usuario debe tener 3 a 8 caracteres alfanuméricos y la contraseña 4 dígitos.',
        buttons: ['OK']
      })
      await alerta.present()
      return
    }

    this.router.navigate(['/home'], {
      state: { usuario: this.usuario }
    })
  }
}
