import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './modal-content.component.html',
})
export class ModalContentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public project: any,
    public dialogRef: MatDialogRef<ModalContentComponent>
  ) 
  {}

close() {
    this.dialogRef.close();
  }
}

