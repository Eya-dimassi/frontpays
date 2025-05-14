import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { FormsModule } from '@angular/forms';
import { PaysService } from '../services/pays.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pays',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  pays!: Pays[];

  constructor(private paysService: PaysService,public authService: AuthService) {}


   ngOnInit(): void {
    this.chargerPays();
    
  }
  chargerPays(){
    this.paysService.listePays().subscribe(p => {
    console.log(p);
    this.pays = p;
    });
    }
  supprimerPays(p:Pays){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.paysService.supprimerPays(p.idPays!).subscribe(() => {
     console.log("pays supprimé");
     this.chargerPays();
     });
    
  }
}
