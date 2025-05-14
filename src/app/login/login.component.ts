import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
user = new User();
erreur=0;
onLoggedin()
{
console.log(this.user);
 let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/']);
else
//alert('Login ou mot de passe incorrecte!');
this.erreur = 1;
}
}
