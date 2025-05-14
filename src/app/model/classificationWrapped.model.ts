import { Classification } from './classification.model';

export class ClassificationWrapper {
  _embedded!: { classifications: Classification[] };
}
