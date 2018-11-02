import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FKDialogComponent } from '@fourkites/frontend-client-shared-module';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  private openConfirmation(){
    this.dialog.open(FKDialogComponent, {
      width: "400px",
      data: {
        title: "Title",
        content: "Content",
        acceptText: "Proceed",
        rejectText: "Reject"
      }
    })
  }

}
