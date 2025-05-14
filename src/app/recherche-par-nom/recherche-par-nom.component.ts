import { Component, OnInit } from '@angular/core';
import { PaysService } from '../services/pays.service';
import { Pays } from '../model/pays.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
allPays!: Pays[];
  pays!: Pays[];
  searchTerm!: string;
  nomPays!: string;

  constructor(private paysService: PaysService) {}

  ngOnInit(): void {
    this.paysService.listePays().subscribe(p => {
      console.log(p);
      this.pays = p;
      
    });
  }

  rechercherPays() {
    if (this.nomPays === "")
      this.ngOnInit();
    else
      this.paysService.rechercherParNom(this.nomPays).subscribe(p => {
        console.log(p);
        this.pays = p;
      });
  }

  onKeyUp(filterText: string) {
    this.pays = this.allPays.filter(item =>
      item.nomPays?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
