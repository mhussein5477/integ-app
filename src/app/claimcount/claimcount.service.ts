import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from './claimcount';
import { environment } from 'src/environments/environment';
import { TotalClaim } from './totalclaim';
import { Formvalues } from './dynamicform';

@Injectable({providedIn: 'root'})
export class ClaimService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getClaimsCount(): Observable<Claim> {
        return this.http.get<Claim>(`${this.apiServerUrl}/api/v1/claims/claimcount`);
      }

      public getTotalClaims(): Observable<TotalClaim> {
        return this.http.get<TotalClaim>(`${this.apiServerUrl}/api/v1/claims/totalclaimcount`);
      }   

      public getDynamicClaimCount(formvalues: Formvalues): Observable<Claim> {
        return this.http.get<Claim>(`${this.apiServerUrl}/api/v1/claims/totaldynamicclaims/${formvalues.date}/${formvalues.client}`);
      }

}