import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() {}

  sayHi() {
    return of('Hi');
  }

}
