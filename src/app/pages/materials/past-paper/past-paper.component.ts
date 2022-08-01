import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-paper',
  templateUrl: './past-paper.component.html',
  styleUrls: ['./past-paper.component.scss'],
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
export class PastPaperComponent implements OnInit {
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
  dtOptions: DataTables.Settings = {};

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor() {
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

}