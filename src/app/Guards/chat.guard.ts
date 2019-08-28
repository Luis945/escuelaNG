import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

  constructor(private router:Router){ }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if( localStorage.getItem('tipo')=="jefesito"||localStorage.getItem('tipo')=='profe'){
        return true;
       }
       else{
        this.router.navigate([''])
        return false;
       }
  }
}