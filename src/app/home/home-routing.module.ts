import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //router outlet externo com a aplicação geral
  {
    path: '',
    component: HomeComponent,
    //No router outlet interno ele vai projetar quando for uma rota vazia LoginComponent
    children: [{
        path: '',
        component: LoginComponent
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent
      }
    ]
  }
];

//O que esse children esta falando: No router outlet interno, lembrando que tem o externo, mas no interno que é esse que nos criamos dentro do nosso component de home, ele quando for uma rota vazia ele vai projetar o login.Home

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
