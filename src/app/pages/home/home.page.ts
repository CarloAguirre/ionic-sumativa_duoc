import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  usuario = ''

  constructor(private router: Router) {
    const navState = this.router.getCurrentNavigation()?.extras.state
    this.usuario = navState?.['usuario'] || ''
  }

  navegar(ruta: string) {
    this.router.navigate([`/${ruta}`])
  }
}
