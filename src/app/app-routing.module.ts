import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/products/about/about.component'
import { FaqComponent } from './components/products/faq/faq.component';
import { RoutesComponent } from './components/products/routes/routes.component';

const routes: Routes = [
  {
    path:'',
    component: RoutesComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
