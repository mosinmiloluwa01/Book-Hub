import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 @ViewChild('modal', { read: ElementRef, static: true }) modal: ElementRef;
 element
 
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.element = this.modal.nativeElement;
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('db-modal-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('db-modal-open');
  }

}
