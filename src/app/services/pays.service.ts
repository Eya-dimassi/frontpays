import { Injectable } from '@angular/core';
import { Pays } from '../model/pays.model';
import { Classification } from '../model/classification.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassificationWrapper } from '../model/classificationWrapped.model';
import { AuthService } from './auth.service';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PaysService {
pays!: Pays[]; 
p!:Pays;
classifications:Classification[]=[];
 apiURL :string = 'http://localhost:8082/pays/api'; 
 apiURLClass: string = 'http://localhost:8082/pays';
constructor(private http: HttpClient,private authService : AuthService,) {}


  listePays(): Observable<Pays[]> {
    /*let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.get<Pays[]>(this.apiURL+"/all");
  }

  // Ajouter un pays
  ajouterPays(p: Pays): Observable<Pays> {
    /*let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.post<Pays>(this.apiURL+"/addpays", p);
  }

  // Supprimer un pays par ID
  supprimerPays(id: number): Observable<void> {
    const url = `${this.apiURL}/delpays/${id}`;
    /*let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.delete<void>(url);
  }

  // Consulter un pays par ID
  consulterPays(id: number): Observable<Pays> {
    const url = `${this.apiURL}/getbyid/${id}`;
    /*et jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.get<Pays>(url);
  }


  updatePays(p: Pays): Observable<Pays> {
    /*let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt}) */
    return this.http.put<Pays>(this.apiURL+"/updatepays", p);
  }

  // Rechercher un pays par nom
  rechercherParNom(nom: string): Observable<Pays[]> {
    const url = `${this.apiURL}/paysByName/${nom}`;
    return this.http.get<Pays[]>(url);
  }

  

  ajouterClassification(clas: Classification): Observable<Classification> {
    return this.http.post<Classification>(this.apiURLClass, clas, httpOptions);
  }

  listeClassification(): Observable<ClassificationWrapper> {
    /*let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})*/
    return this.http.get<ClassificationWrapper>(this.apiURLClass+"/class");
  }
  rechercherParClassification(idClass: number): Observable<Pays[]> {
  const url = `${this.apiURLClass}/paysclass/${idClass}`; 
  return this.http.get<Pays[]>(url);
}
consulterClassification(id: number): Classification {
  return this.classifications.find((clas) => clas.idClass == id)!;
}

}
