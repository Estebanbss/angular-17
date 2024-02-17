import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@intefaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import {toSignal} from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
 template: `
  <app-title [title]="titleLabel()"/>

  @if(user()){

    <section>
      <img
      [srcset]="user()!.avatar"
      [alt]="user()!.first_name"
      />

      <div>
        <h3>{{user()?.first_name}} {{user()?.last_name}}</h3>
        <p>{{user()?.email}}</p>
      </div>
    </section>

  }@else {

    <p>Loading info...</p>
  }
 `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  )

  public titleLabel = computed( () => `User info: ${this.user()?.first_name === undefined ? '' :this.user()?.first_name } ${this.user()?.last_name === undefined ? '' :this.user()?.last_name}`);
  // constructor(){
  // this.route.params.subscribe(params => {
  //     console.log(params)
  //   })
  // }


 }
