import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class ComponentsModule {}
