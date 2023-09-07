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
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientModule } from "@angular/common/http";

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
    CotizacionesModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
