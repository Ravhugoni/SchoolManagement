import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-record-audio',
  templateUrl: './record-audio.component.html',
  styleUrls: ['./record-audio.component.scss']
})
export class RecordAudioComponent implements OnInit {

  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editDelete = true;
  deleteIcon = 'icofont-trash';

  viewBtn = true;
  viewIcon = 'icofont-eye';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public basicContent: string;

  title = 'datatables';
  dtOptions: DataTables.Settings = {};

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }
  open_add_modal() {

    const modalRef = this.modalService.open(AddModalComponent, { size: "lg" });
    // modalRef.componentInstance.role_id=role_id
  }

}
