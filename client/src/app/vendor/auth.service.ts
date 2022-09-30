import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from
"@angular/router";
import { Vendorservice } from "./vendor.service";

@Injectable({
providedIn:'root'
})
export class Authservicevendor implements CanActivate{
constructor(private vservice:Vendorservice,private route : Router){
}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
if(this.vservice.accesstoken){
return true;
}
else{
this.route.navigate(['/'])
return false;
}
}
}
