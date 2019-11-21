import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: any[] = [];

  constructor() { }

  open(id) {
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

  close(id) {
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }

  add(modal: any) {
    this.modals.push(modal);
  }
}
