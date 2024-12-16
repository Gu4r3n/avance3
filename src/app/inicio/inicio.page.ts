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
  
  fechaSeleccionadaA: string = '';
  fechaSeleccionadaC: string = '';
  fechaSeleccionadaM: string = '';
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
    };

name(){
  var usuarioN = localStorage.getItem('nombre');
  return usuarioN}


  //inicio scan arquitectura
  onFechaSeleccionadaA(event: any) {
    this.fechaSeleccionadaA = event.detail.value; // Captura el valor seleccionado
    console.log('Fecha seleccionada:', this.fechaSeleccionadaA);
      }

  async scanA(): Promise<void> {
    let usuarioa = localStorage.getItem('nombre')
    let fecha4 = ''
    let fecha11 = ''
    let fecha18 = ''
    let fecha25 = ''
    //const result = await this.qrScannerService.scan()
  if(this.fechaSeleccionadaA == '04') {

    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("ASY4131|003D|L3|20241104") && usuarioa !== null)
        {this.result, fecha4 = usuarioa, localStorage.setItem('fe4',fecha4) }
          //if (usuarioa !== null) { localStorage.setItem('nombreA',usuarioa)}}//arreglar tema de nombre estudiante
      
      else if(
        this.result.includes("CSY4111|004D|L6|20241106") 
      || this.result.includes("CSY4111|004D|L6|20241113")
      || this.result.includes("CSY4111|004D|L6|20241120")
      || this.result.includes("CSY4111|004D|L6|20241127")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("PGY4121|005D|L10|20241108")
    ||this.result.includes("PGY4121|005D|L10|20241115")
    ||this.result.includes("PGY4121|005D|L10|20241122")
    ||this.result.includes("PGY4121|005D|L10|20241129")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

      else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 04/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

else if (this.fechaSeleccionadaA == '11'){

  try {
    this.result = await this.qrScannerService.scan();
    console.log('Códigos escaneados:', this.result);
    if (this.result.includes("ASY4131|003D|L3|20241111") && usuarioa !== null)
      {this.result, fecha11 = usuarioa, localStorage.setItem('fe11',fecha11)}//arreglar tema de nombre estudiante
    
    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
    || this.result.includes("CSY4111|004D|L6|20241113")
    || this.result.includes("CSY4111|004D|L6|20241120")
    || this.result.includes("CSY4111|004D|L6|20241127")
  )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

  else if(
    this.result.includes("PGY4121|005D|L10|20241108")
  ||this.result.includes("PGY4121|005D|L10|20241115")
  ||this.result.includes("PGY4121|005D|L10|20241122")
  ||this.result.includes("PGY4121|005D|L10|20241129")
  )
  {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}
    
    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 11/11/24']}
  } catch (error) {
    console.error('Error al escanear código:', error);
  }
}

else if (this.fechaSeleccionadaA == '18'){

  try {
    this.result = await this.qrScannerService.scan();
    console.log('Códigos escaneados:', this.result);
    if (this.result.includes("ASY4131|003D|L3|20241118") && usuarioa !== null)
      {this.result, fecha18 = usuarioa, localStorage.setItem('fe18',fecha18)}//arreglar tema de nombre estudiante
    
    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
    || this.result.includes("CSY4111|004D|L6|20241113")
    || this.result.includes("CSY4111|004D|L6|20241120")
    || this.result.includes("CSY4111|004D|L6|20241127")
  )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

  else if(
    this.result.includes("PGY4121|005D|L10|20241108")
  ||this.result.includes("PGY4121|005D|L10|20241115")
  ||this.result.includes("PGY4121|005D|L10|20241122")
  ||this.result.includes("PGY4121|005D|L10|20241129")
  )
  {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 18/11/24']}
  } catch (error) {
    console.error('Error al escanear código:', error);
  }
}

else if (this.fechaSeleccionadaA == '25'){

  try {
    this.result = await this.qrScannerService.scan();
    console.log('Códigos escaneados:', this.result);
    if (this.result.includes("ASY4131|003D|L3|20241125") && usuarioa !== null)
      {this.result, fecha25 = usuarioa, localStorage.setItem('fe25',fecha25)}//en vola puedo poner un else if pa comprobar asignatura equivocada equivocada 
    
    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
    || this.result.includes("CSY4111|004D|L6|20241113")
    || this.result.includes("CSY4111|004D|L6|20241120")
    || this.result.includes("CSY4111|004D|L6|20241127")
  )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

  else if(
    this.result.includes("PGY4121|005D|L10|20241108")
  ||this.result.includes("PGY4121|005D|L10|20241115")
  ||this.result.includes("PGY4121|005D|L10|20241122")
  ||this.result.includes("PGY4121|005D|L10|20241129")
  )
  {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}
    
    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 25/11/24']}
  } catch (error) {
    console.error('Error al escanear código:', error);
  }
}

  else{console.log('fecha invalida')}
}
//fin scan arquitectura-----

//inicio scan Calidad
onFechaSeleccionadaC(event: any) {
  this.fechaSeleccionadaC = event.detail.value; 
  console.log('Fecha seleccionada:', this.fechaSeleccionadaC);
    }

  async scanC(): Promise<void> {
    let usuarioa = localStorage.getItem('nombre')
    let fecha6 = ''
    let fecha13 = ''
    let fecha20 = ''
    let fecha27 = ''

    if(this.fechaSeleccionadaC == '06'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);

      if (this.result.includes("CSY4111|004D|L6|20241106") && usuarioa !== null)
        {this.result, fecha6 = usuarioa, localStorage.setItem('fe6',fecha6) }

      else if(
          this.result.includes("ASY4131|003D|L3|20241104") 
        || this.result.includes("ASY4131|003D|L3|20241111")
        || this.result.includes("ASY4131|003D|L3|20241118")
        || this.result.includes("ASY4131|003D|L3|20241125")
      )
        {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

      else if(
        this.result.includes("PGY4121|005D|L10|20241108")
      ||this.result.includes("PGY4121|005D|L10|20241115")
      ||this.result.includes("PGY4121|005D|L10|20241122")
      ||this.result.includes("PGY4121|005D|L10|20241129")
      )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}
      else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 06/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else if (this.fechaSeleccionadaC == '13'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("CSY4111|004D|L6|20241113") && usuarioa !== null)
        {this.result, fecha13 = usuarioa, localStorage.setItem('fe13',fecha13) }


      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("PGY4121|005D|L10|20241108")
    ||this.result.includes("PGY4121|005D|L10|20241115")
    ||this.result.includes("PGY4121|005D|L10|20241122")
    ||this.result.includes("PGY4121|005D|L10|20241129")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

      else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 13/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else if (this.fechaSeleccionadaC == '20'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("CSY4111|004D|L6|20241120") && usuarioa !== null)
        {this.result, fecha20 = usuarioa, localStorage.setItem('fe20',fecha20) }

      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("PGY4121|005D|L10|20241108")
    ||this.result.includes("PGY4121|005D|L10|20241115")
    ||this.result.includes("PGY4121|005D|L10|20241122")
    ||this.result.includes("PGY4121|005D|L10|20241129")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

      else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 20/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else if (this.fechaSeleccionadaC == '27'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("CSY4111|004D|L6|20241127") && usuarioa !== null)
        {this.result, fecha27 = usuarioa, localStorage.setItem('fe27',fecha27) }

      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("PGY4121|005D|L10|20241108")
    ||this.result.includes("PGY4121|005D|L10|20241115")
    ||this.result.includes("PGY4121|005D|L10|20241122")
    ||this.result.includes("PGY4121|005D|L10|20241129")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

      else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 27/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else{console.log('fecha invalida')}
  }
//fin scan calidad----


//inicio scan de movil
onFechaSeleccionadaM(event: any) {
  this.fechaSeleccionadaM = event.detail.value; 
  console.log('Fecha seleccionada:', this.fechaSeleccionadaM);
    }

  async scanP(): Promise<void> {
    let usuarioa = localStorage.getItem('nombre')
    let fecha8 = ''
    let fecha15 = ''
    let fecha22 = ''
    let fecha29 = ''

    if(this.fechaSeleccionadaM == '08'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("PGY4121|005D|L10|20241108") && usuarioa !== null)
        {this.result, fecha8 = usuarioa, localStorage.setItem('fe8',fecha8) }

      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
      || this.result.includes("CSY4111|004D|L6|20241113")
      || this.result.includes("CSY4111|004D|L6|20241120")
      || this.result.includes("CSY4111|004D|L6|20241127")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 08/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else if(this.fechaSeleccionadaM == '15'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("PGY4121|005D|L10|20241115") && usuarioa !== null)
        {this.result, fecha15 = usuarioa, localStorage.setItem('fe15',fecha15) }

      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
      || this.result.includes("CSY4111|004D|L6|20241113")
      || this.result.includes("CSY4111|004D|L6|20241120")
      || this.result.includes("CSY4111|004D|L6|20241127")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 15/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else if(this.fechaSeleccionadaM == '22'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("PGY4121|005D|L10|20241122") && usuarioa !== null)
        {this.result, fecha22 = usuarioa, localStorage.setItem('fe22',fecha22) }

      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
      || this.result.includes("CSY4111|004D|L6|20241113")
      || this.result.includes("CSY4111|004D|L6|20241120")
      || this.result.includes("CSY4111|004D|L6|20241127")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 22/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }


  else if(this.fechaSeleccionadaM == '29'){
    try {
      this.result = await this.qrScannerService.scan();
      console.log('Códigos escaneados:', this.result);
      if (this.result.includes("PGY4121|005D|L10|20241129") && usuarioa !== null)
        {this.result, fecha29 = usuarioa, localStorage.setItem('fe29',fecha29) }

      else if(
        this.result.includes("ASY4131|003D|L3|20241104") 
      || this.result.includes("ASY4131|003D|L3|20241111")
      || this.result.includes("ASY4131|003D|L3|20241118")
      || this.result.includes("ASY4131|003D|L3|20241125")
    )
      {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else if(
      this.result.includes("CSY4111|004D|L6|20241106") 
      || this.result.includes("CSY4111|004D|L6|20241113")
      || this.result.includes("CSY4111|004D|L6|20241120")
      || this.result.includes("CSY4111|004D|L6|20241127")
    )
    {this.result = ['Asisgnatura incorrecta por ende su seccion, sala y horario seran incorrectos']}

    else {this.result= ['Fecha no Valida, por favor escane la fecha correspondiente a 29/11/24']}
    } catch (error) {
      console.error('Error al escanear código:', error);
    }
  }

  else{console.log('fecha invalida')}
  }
//fin scan movil

}
