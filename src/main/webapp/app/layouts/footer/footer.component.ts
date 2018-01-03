import { Component } from '@angular/core';
import { GraficaComponent } from '../../grafica/grafica.component';
import { ServicioService } from '../../servicio.service';

@Component({
    selector: 'jhi-footer',
    templateUrl: './footer.component.html',
    entryComponents: [GraficaComponent],
    providers: [ServicioService]
})
export class FooterComponent {
    dato: String [];
    mostrar(evento): void {
        console.log(evento.nombre);
    }
    constructor(servicio: ServicioService) {
        this.dato = servicio.lista();
    }
}
