import { Component, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string
  barcodeData: any;
  constructor(
    private barcodeScanner: BarcodeScanner,
  ) {



  }


  scanQRCode() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcodeData = barcodeData;
      this.modal.isOpen = true;

    }).catch(err => {
      console.log('Error', err);
      this.modal.isOpen = false;
    });
  }



  confirm() {
    this.modal.isOpen = false;
    this.modal.dismiss();
  }

  onWillDismiss(event: Event) {
    this.modal.isOpen = false;
    console.log('--', event);
  }


}