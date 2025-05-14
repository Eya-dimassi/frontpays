import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { FormsModule } from '@angular/forms';
import { Classification } from '../model/classification.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-pays',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-pays.component.html',
  styleUrl: './add-pays.component.css'
})
export class AddPaysComponent implements OnInit{
  newPays= new Pays();
  message! : string;
  classifications!:Classification[];
  newIdClass! : number;
  newClassification! : Classification;

  constructor(private paysService: PaysService,private router: Router){}
  
  ngOnInit(): void {
    this.paysService.listeClassification().subscribe(c => {
      console.log(c);
      this.classifications = c._embedded.classifications;
    });
   
  }
  
  
  addPays(){
    this.newPays.classification = this.classifications.find(
      cl => cl.idClass === this.newIdClass
    )!;

    this.paysService.ajouterPays(this.newPays).subscribe(p => {
      console.log('Pays ajouté avec succès', p);
      this.router.navigate(['pays']);
    });
  }
          
}


