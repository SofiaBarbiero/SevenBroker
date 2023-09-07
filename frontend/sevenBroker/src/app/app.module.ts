import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { PortafolioModule } from './portafolio/portafolio.module';
import { HomeModule } from './home/home.module';
import { CompraModule } from './compra/compra.module';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    PortafolioModule,
    HomeModule,
    CompraModule,
    CotizacionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
