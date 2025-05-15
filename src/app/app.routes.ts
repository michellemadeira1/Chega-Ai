import { Routes } from "@angular/router";
import { EntregasComponent } from "./entregas/entregas.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MoradorComponent } from "./morador/morador.component";

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'main-login', title: 'MainLogin', component: LoginComponent },
  { path: 'morador', title: 'Morador', component: MoradorComponent },
  { path: 'entregas', title: 'Entregas', component: EntregasComponent },
];
