import { Component, OnInit } from '@angular/core';
import { ClaimService } from './claimcount.service';
import { Claim } from './claimcount';
import { HttpErrorResponse } from '@angular/common/http';
import * as XLSX from 'xlsx'; 
import { TotalClaim } from './totalclaim';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-claimcount',
  templateUrl: './claimcount.component.html',
  styleUrls: ['../../bootstrap/css/style.min.css']
})
export class ClaimcountComponent implements OnInit {

  public resultClaims!: Claim;
  public myTotalClaims!: TotalClaim;

  
  constructor(private claimService: ClaimService,
    private http: HttpClient){}
  
  ngOnInit() {
    this.getTotalClaims();
  }


 
  public getTotalClaims(): void {
    this.claimService.getTotalClaims().subscribe(
      (response: TotalClaim) => {
        console.log(response);
        this.myTotalClaims = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDynamicClaims(addForm: NgForm): void {
    this.claimService.getDynamicClaimCount(addForm.value).subscribe(
      (response: Claim) => {
        console.log(response);
        this.resultClaims = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



/*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}
