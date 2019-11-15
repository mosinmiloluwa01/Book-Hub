import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  open(modal){
    modal.style.display = "block";
  }
  close(modal){
    modal.path[3].style.display = "none";
  }
}
