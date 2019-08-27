import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PadreGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

  constructor(private router:Router){ }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('token')){
      return true;
    }
    this.router.navigate(['/'])
    return false;

  }
}