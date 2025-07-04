import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'

import { ExperienciaPage } from './experiencia.page'

@NgModule({
  declarations: [ExperienciaPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ExperienciaPage }])
  ]
})
export class ExperienciaPageModule {}
