import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
user = new User();
erreur=0;
constructor(private authService : AuthService,
    private  router: Router) { }
onLoggedin()
{
  this.authService.login(this.user).subscribe({
        next: (data) => {
          let jwToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwToken);
          this.router.navigate(['/']);  
        },
        error: (err: any) => {
          this.erreur = 1; 
        }
        });

}
}
