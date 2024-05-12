import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [AppRoutingModule, ComponentsModule],
  exports: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
  ],
})
export class PagesModule {}
