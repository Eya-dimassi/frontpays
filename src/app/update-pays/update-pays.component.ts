import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from '../services/pays.service';
import { Pays } from '../model/pays.model';
import { Classification } from '../model/classification.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-pays',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-pays.component.html',
  styles: ``
})
export class UpdatePaysComponent implements OnInit {
  currentPays = new Pays();
  classifications!: Classification[];
  updateClassId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paysService: PaysService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.paysService.listeClassification().subscribe(clas => {
      this.classifications = clas._embedded.classifications;
    });

    this.paysService.consulterPays(this.activatedRoute.snapshot.params['id'])
      .subscribe(p => {
        this.currentPays = p;
        this.updateClassId = this.currentPays.classification?.idClass!;
      });
  }

  updatePays(): void {
    this.currentPays.classification = this.classifications.find(
      c => c.idClass == this.updateClassId
    )!;

    this.paysService.updatePays(this.currentPays).subscribe(() => {
      this.router.navigate(['pays']);
    });
  }
}

