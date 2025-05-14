import { Routes } from '@angular/router';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { PaysComponent } from './pays/pays.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import { RechercheParClassificationComponent } from './recherche-par-classification/recherche-par-classification.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeClassificationComponent } from './liste-classification/liste-classification.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { paysGuard } from './pays.guard';

export const routes: Routes = [
    { path: 'pays', component: PaysComponent },
    { path: '', redirectTo: '/pays', pathMatch: 'full' },
    {path: "add-pays", component : AddPaysComponent, canActivate:[paysGuard]},
    {path: "updatePays/:id", component: UpdatePaysComponent},
    {path:"rechercheParClassification",component:RechercheParClassificationComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    { path: 'listeClassifications', component: ListeClassificationComponent },
    {path: 'login', component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},
];
