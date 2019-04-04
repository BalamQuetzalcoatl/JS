import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  sendMessages = (data: string) => {
    return data;
  }
}
