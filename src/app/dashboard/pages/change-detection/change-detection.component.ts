import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <app-title [ngClass]="{'bg-red-500 text-white': this.frameworkAsSignal().name === 'Angular', 'bg-blue-500 text-white' : this.frameworkAsSignal().name === 'React'}" [title]="currentFramework()"/>

  <pre [ngClass]="{'bg-red-500 text-white': this.frameworkAsSignal().name === 'Angular', 'bg-blue-500 text-white' : this.frameworkAsSignal().name === 'React'}">{{frameworkAsSignal( ) | json}}</pre>
  <pre>{{frameworkAsProperty | json}}</pre>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name} `
  )

  constructor() {

    for (let i = 0; i < 1000; i++) {
      setTimeout(() => {
        if (this.frameworkAsSignal().name === 'Angular') {
          this.frameworkAsSignal.update(value => ({
            ...value,
            name: 'React'
          }));
        } else {
          this.frameworkAsSignal.update(value => ({
            ...value,
            name: 'Angular'
          }));
        }
        console.log('Done!');
      }, i * 3000); // Espera 3 segundos * el índice antes de ejecutar cada iteración
    }

  }
}
