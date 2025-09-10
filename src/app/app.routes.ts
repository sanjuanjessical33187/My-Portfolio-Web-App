import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'about', component: About},
    { path: 'services', component: Services},
    { path: 'portfolio', component: Portfolio},
    { path: 'contact', component: Contact},
    { path: 'footer', component: Footer},
    { path: '**', component: Home}
];
