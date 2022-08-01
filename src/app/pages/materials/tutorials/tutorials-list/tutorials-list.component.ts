import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TutorialsModalComponent } from './tutorials-modal/tutorials-modal.component';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class TutorialsListComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editDelete = true;
  deleteIcon = 'icofont-trash';

  viewBtn = true;
  viewIcon = 'icofont-eye';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  downoald = true;
  downloadIcon = 'icofont-download';

  public basicContent: string;

  title = 'datatables';
  dtOptions: DataTables.Settings= {};

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor(private _router: Router, public modalService: NgbModal) {
  }

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

  tutorialView()
  {
    this._router.navigate(['/tutorials/tutorials-view'])
  }
  open_add_modal() {

    const modalRef = this.modalService.open(TutorialsModalComponent, { size: "lg" });
    // modalRef.componentInstance.role_id=role_id
  }

}
