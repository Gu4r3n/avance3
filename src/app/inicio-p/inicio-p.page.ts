import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-inicio-p',
  templateUrl: './inicio-p.page.html',
  styleUrls: ['./inicio-p.page.scss'],
})
export class InicioPPage implements OnInit {

  fechaSeleccionadaA: string = '';
  fechaSeleccionadaC: string = '';
  fechaSeleccionadaM: string = '';
  

  constructor(public navCtrl : NavController,
    public alertController: AlertController,
    private loadingCtrl: LoadingController) { }

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
            this.navCtrl.navigateRoot('inicio-p');
          }
        },
        {
          text: 'Salir',
          role: 'confirm',
          handler: () => {
            localStorage.removeItem('ingresadoP');
            this.navCtrl.navigateRoot('login-p');
          }
        }
      ]
    });
    await alert.present();
    //localStorage.removeItem('ingresadoP');
    //this.navCtrl.navigateRoot('login-p');
    };

    name(){
      var usuarioP = localStorage.getItem('nombreP');
      return usuarioP}


    //borra(){localStorage.removeItem('nombreE')}

//apartado qr de arquitectura

  onFechaSeleccionadaA(event: any) {
    this.fechaSeleccionadaA = event.detail.value; // Captura el valor seleccionado
    console.log('Fecha seleccionada:', this.fechaSeleccionadaA);
      }


async mensajeA(){
  
  await this.cargando();
  if(this.fechaSeleccionadaA == '04') {
    
  const alert = await this.alertController.create({
  header: 'QR Arquitectura',
  message: '<img src="/assets/img/arqui04.png" /> <br> estudiantes presentes: <br>' +localStorage.getItem('fe4'),
  buttons: ['Aceptar'],
});
await alert.present();
}

else if(this.fechaSeleccionadaA == '11') {
  const alert = await this.alertController.create({
    header: 'QR Arquitectura',
    message: '<img src="/assets/img/arqui11.png" /> <br> estudiantes presentes: <br>' +localStorage.getItem('fe11'),
    buttons: ['Aceptar'],
  });
  await alert.present();
}

else if(this.fechaSeleccionadaA == '18') {
  const alert = await this.alertController.create({
    header: 'QR Arquitectura',
    message: '<img src="/assets/img/arqui18.png" /> <br> estudiantes presentes: <br>' +localStorage.getItem('fe18'),
    buttons: ['Aceptar'],
  });
  await alert.present();
}

else if(this.fechaSeleccionadaA == '25') {
  const alert = await this.alertController.create({
    header: 'QR Arquitectura',
    message: '<img src="/assets/img/arqui25.png" /> <br> estudiantes presentes: <br>' +localStorage.getItem('fe25'),
    buttons: ['Aceptar'],
  });
  await alert.present();
}

else{const alert = await this.alertController.create({
  header: 'QR Arquitectura',
  message: 'Fecha incorrecta al mes correspondiente',
  buttons: ['Aceptar'],
});
await alert.present();
  }
}
// final apartado qr de Arquitectura

//apartado qr de calidad

onFechaSeleccionadaC(event: any) {
  this.fechaSeleccionadaC = event.detail.value; // Captura el valor seleccionado
  console.log('Fecha seleccionada:', this.fechaSeleccionadaC);
    }

async mensajeC(){
  await this.cargando();

  if(this.fechaSeleccionadaC == '06') {
  const alert = await this.alertController.create({
  header: 'QR Calidad de Software',
  message: '<img src="/assets/img/calida06.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe6'),
  buttons: ['Aceptar'],
});
await alert.present();
}

  else if (this.fechaSeleccionadaC == '13'){
    const alert = await this.alertController.create({
      header: 'QR Calidad de Software',
      message: '<img src="/assets/img/calidad13.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe13'),
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  else if (this.fechaSeleccionadaC == '20'){
    const alert = await this.alertController.create({
      header: 'QR Calidad de Software',
      message: '<img src="/assets/img/calida20.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe20'),
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  else if (this.fechaSeleccionadaC == '27'){
    const alert = await this.alertController.create({
      header: 'QR Calidad de Software',
      message: '<img src="/assets/img/calida27.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe27'),
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  else{const alert = await this.alertController.create({
    header: 'QR Calidad de Software',
    message: 'Fecha incorrecta al mes correspondiente',
    buttons: ['Aceptar'],
  });
  await alert.present();
    }

}
// final apartado qr de Calidad


// apartado qr movil
onFechaSeleccionadaM(event: any) {
  this.fechaSeleccionadaM = event.detail.value; // Captura el valor seleccionado
  console.log('Fecha seleccionada:', this.fechaSeleccionadaM);
    }

async mensajeP(){
  await this.cargando();

  if(this.fechaSeleccionadaM == '08') {
  const alert = await this.alertController.create({
  header: 'QR Programacion Moviles',
  message: '<img src="/assets/img/movil08.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe8'),
  buttons: ['Aceptar'],
});
await alert.present();}

else if (this.fechaSeleccionadaM == '15') {
  const alert = await this.alertController.create({
    header: 'QR Programacion Moviles',
    message: '<img src="/assets/img/movil15.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe15'),
    buttons: ['Aceptar'],
  });
  await alert.present();
}

else if (this.fechaSeleccionadaM == '22') {
  const alert = await this.alertController.create({
    header: 'QR Programacion Moviles',
    message: '<img src="/assets/img/movil22.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe22'),
    buttons: ['Aceptar'],
  });
  await alert.present();
}

else if (this.fechaSeleccionadaM == '29') {
  const alert = await this.alertController.create({
    header: 'QR Programacion Moviles',
    message: '<img src="/assets/img/movil29.png" /> <br> estudiantes presentes: <br>' + localStorage.getItem('fe29'),
    buttons: ['Aceptar'],
  });
  await alert.present();
}

else{const alert = await this.alertController.create({
  header: 'QR Programacion Moviles',
  message: 'Fecha incorrecta al mes correspondiente',
  buttons: ['Aceptar'],
});
await alert.present();
  }

}


  async cargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Generando QR de Asignatura',
      duration: 500,
    });
    await loading.present();
    await loading.onDidDismiss();
  }


}
