import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classification } from '../model/classification.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-classification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-classification.component.html',
  styles: ``
})
export class UpdateClassificationComponent implements OnInit {
@Input()
  classification! : Classification;
  @Input()
  ajout!:boolean;

  @Output()
   classificationUpdated = new EventEmitter<Classification>();
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateClassification ",this.classification);
    }
  saveClassification(){
    
      this.classificationUpdated.emit(this.classification);

    }
}
