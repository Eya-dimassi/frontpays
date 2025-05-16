import { Component, OnInit } from '@angular/core';
import { Classification } from '../model/classification.model';
import { PaysService } from '../services/pays.service';
import { CommonModule } from '@angular/common';
import { UpdateClassificationComponent } from '../update-classification/update-classification.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-classification',
  standalone: true,
  imports: [CommonModule,UpdateClassificationComponent,FormsModule],
  templateUrl: './liste-classification.component.html',
  styles: ``
})
export class ListeClassificationComponent implements OnInit {
classifications!: Classification[];
ajout:boolean=true;
updatedClass:Classification = {"idClass":null,"nomClass":""};

constructor(private paysService: PaysService) { }

  

  ngOnInit(): void {
    this.paysService.listeClassification().
    subscribe(cl => {this.classifications = cl._embedded.classifications;
    console.log(cl);
     });
    /*this.classifications=this.paysService.listeClassification();
    console.log(this.classifications);*/
    //this.chargerClassification();
   }




   chargerClassification(): void {
    this.paysService.listeClassification().
    subscribe(cl => {this.classifications = cl._embedded.classifications;
      console.log(cl);
      });
   }



  classUpdated(cl: Classification) {
    console.log("classification reçue du composant updateClass ",cl);
    this.paysService.ajouterClassification(cl).subscribe( ()=> this.chargerClassification());
    
  
  }
  
  updateClass(cl: Classification){
    this.updatedClass=cl;
    this.ajout=false; 

  }
}
