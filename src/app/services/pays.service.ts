import { Injectable } from '@angular/core';
import { Pays } from '../model/pays.model';
import { Classification } from '../model/classification.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassificationWrapper } from '../model/classificationWrapped.model';
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
 apiURLClass: string = 'http://localhost:8082/class';
constructor(private http: HttpClient) {}


  listePays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.apiURL);
  }

  // Ajouter un pays
  ajouterPays(p: Pays): Observable<Pays> {
    return this.http.post<Pays>(this.apiURL, p, httpOptions);
  }

  // Supprimer un pays par ID
  supprimerPays(id: number): Observable<void> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<void>(url, httpOptions);
  }

  // Consulter un pays par ID
  consulterPays(id: number): Observable<Pays> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Pays>(url);
  }


  updatePays(p: Pays): Observable<Pays> {
    return this.http.put<Pays>(this.apiURL, p, httpOptions);
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
    return this.http.get<ClassificationWrapper>(this.apiURLClass);
  }
  rechercherParClassification(idClass: number): Observable<Pays[]> {
  const url = `${this.apiURLClass}/paysclass/${idClass}`; 
  return this.http.get<Pays[]>(url);
}
consulterClassification(id: number): Classification {
  return this.classifications.find((clas) => clas.idClass == id)!;
}

}
