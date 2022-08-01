import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tutorials-modal',
  templateUrl: './tutorials-modal.component.html',
  styleUrls: ['./tutorials-modal.component.scss']
})
export class TutorialsModalComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  close(message: string = '') {
    this.notifyParent.emit(message);
    this.activeModal.close()
  }

}
