import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from
"@angular/router";
import { Employeeservice } from "./employee.service";


@Injectable({
providedIn:'root'
})
export class Authserviceemployee implements CanActivate{
constructor(private eservice:Employeeservice,private route : Router){
}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
if(this.eservice.accesstoken){
return true;
}
else{
this.route.navigate(['/'])
return false;
}
}
}
