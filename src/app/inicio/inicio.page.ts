import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';
import { QrService } from '../services/qr.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  result: string[] = [];
  constructor(public navCtrl : NavController,
    public alertController: AlertController,
    private readonly qrScannerService: QrService
    ) {}

  ngOnInit() {
  }

  

  
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Esta seguro desea salir de la aplicacion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.navCtrl.navigateRoot('inicio');
          }
        },
        {
          text: 'Salir',
          role: 'confirm',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
    //localStorage.removeItem('ingresado');
    //this.navCtrl.navigateRoot('login');
    };


  /*async mensaje(){const alert = await this.alertController.create({
  header: 'No funcional',
  message: 'Por el momento no se encuentra disponible esta opcion',
  buttons: ['Aceptar'],
});
await alert.present();}*/

name(){
  var usuarioN = localStorage.getItem('nombre');
  return usuarioN}

//dejar solo scan basico ver si despues puedo hacer condicional
/*async scan(): Promise<void> {
  const result = await CapacitorBarcodeScanner.scanBarcode({
    hint: CapacitorBarcodeScannerTypeHint.ALL
  });
  this.result = result.ScanResult;
  }*/

  async scanA(): Promise<void> {
    var usuarioa = localStorage.getItem('nombre')
    if (usuarioa !== null) {var usuarioA = usuarioa}
    //const result = await this.qrScannerService.scan()
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("Arquitectura|003D|L3|11-11-2024") && usuarioa !== null)
        {this.result, usuarioA= usuarioa, localStorage.setItem('nombreA',usuarioA)}
      else {this.result= ['Asignatura no valida']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
    //trabajar esta wea del resultao
    //this.result = result.ScanResult;
  }

  async scanC(): Promise<void> {
    var usuarioc = localStorage.getItem('nombre')
    if (usuarioc !== null) {var usuarioC = usuarioc}
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("Calidad Software|00124D|L6|11-11-20") && usuarioc !== null)
        {this.result, usuarioC= usuarioc, localStorage.setItem('nombreC',usuarioC)}
      else {this.result= ['Asignatura no valida']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }


  async scanP(): Promise<void> {
    var usuarioo = localStorage.getItem('nombre')
    if (usuarioo !== null) {var usuarioO = usuarioo}
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("Programacion Movil|005D|L10|11-11-2024") && usuarioo !== null)
        {this.result,usuarioO= usuarioo, localStorage.setItem('nombreO',usuarioO) }
      else {this.result= ['Asignatura no valida']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }


}
