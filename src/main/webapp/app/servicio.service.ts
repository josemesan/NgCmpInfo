import { Injectable } from '@angular/core';

@Injectable()
export class ServicioService {
    lista(): Array<String> {
        return ['pedro', 'manuel', 'alejandro'];
    }
}
