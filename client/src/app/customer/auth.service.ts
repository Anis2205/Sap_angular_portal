import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from
"@angular/router";
import { Customerservice } from "./customer.service";

@Injectable({
providedIn:'root'
})
export class Authservice implements CanActivate{
constructor(private cservice:Customerservice,private route : Router){
}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
if(this.cservice.accesstoken){
return true;
}
else{
this.route.navigate(['/'])
return false;
}
}
}
