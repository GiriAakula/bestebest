import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobilesComponent } from './components/products/mobiles/mobiles.component';
import { LaptopsComponent } from './components/products/laptops/laptops.component';
import { ReviewersComponent } from './components/products/reviewers/reviewers.component';
import { VASComponent } from './components/products/vas/vas.component';
import { SubscriptionComponent } from './components/products/subscription/subscription.component';
import { FooterComponent } from './components/products/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/products/about/about.component';
import { RoutesComponent } from './components/products/routes/routes.component';
import { FaqComponent } from './components/products/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobilesComponent,
    LaptopsComponent,
    ReviewersComponent,
    VASComponent,
    SubscriptionComponent,
    FooterComponent,
    AboutComponent,
    RoutesComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
