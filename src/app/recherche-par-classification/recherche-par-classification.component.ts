import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { Classification } from '../model/classification.model';
import { PaysService } from '../services/pays.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche-par-classification',
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-classification.component.html',
  styles: ``
})
export class RechercheParClassificationComponent implements OnInit {
  pays!:Pays[] ;
  classifications!:Classification[];
  idClass!:number;

  constructor(private paysService:PaysService){}

  ngOnInit(): void{
    this.paysService.listeClassification(). subscribe(clas => {this.classifications = clas._embedded.classifications;
      console.log(clas);
    });

  
  }
  onChange(){
   
    this.paysService.rechercherParClassification(this.idClass).subscribe(p =>{this.pays=p});

  }

}
