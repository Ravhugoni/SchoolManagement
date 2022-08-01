import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-missing-word-modal',
  templateUrl: './missing-word-modal.component.html',
  styleUrls: ['./missing-word-modal.component.scss']
})
export class MissingWordModalComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(message: string = '') {
    this.notifyParent.emit(message);
    this.activeModal.close()
  }

}
