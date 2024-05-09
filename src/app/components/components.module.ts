import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [AppRoutingModule],
  exports: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
  ],
})
export class ComponentsModule {}
