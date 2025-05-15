import { Routes } from "@angular/router";
import { EntregasComponent } from "./entregas/entregas.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MoradorComponent } from "./morador/morador.component";
import { MainLoginComponent } from "./main-login/main-login.component";
import { EncomendasComponent } from "./encomendas/encomendas.component";

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'mainLogin',  component: MainLoginComponent },
  { path: 'morador', component: MoradorComponent },
  { path: 'entregas', component: EntregasComponent },
  { path: 'encomenda', component:  EncomendasComponent }
];
