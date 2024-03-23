import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ModalConfig {
  backdrop: boolean,
  title: string,
  textBody: string,
  btnConfirm: string,
  btnCancel: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  backdrop = false;
  modalConfig: ModalConfig = {} as ModalConfig

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalConfig = data;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.backdrop = this.data.backdrop
    }, 160);
  }

  closeModal(isConfirm: boolean) {
    this.backdrop = false;
    this.dialogRef.close(isConfirm);
  }

}
