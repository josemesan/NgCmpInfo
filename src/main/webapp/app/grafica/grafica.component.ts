import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'jhi-grafica',
    templateUrl: './grafica.component.html',
    styles: []
})
export class GraficaComponent {
    @Input() envioDato: String[];
    @Output() datoGrafica = new EventEmitter();

    clickestudiante(evento): void {
        this.datoGrafica.emit({nombre: evento.target.textContent});
    }
}
