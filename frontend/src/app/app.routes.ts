import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},

];