import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentListService } from './student-list.service';
import { StudentModalComponent } from './student-modal/student-modal.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
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
export class StudentListComponent implements OnInit {
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
  TempUsers: any;
  Users: any;

  constructor(private studentListService: StudentListService, public modalService: NgbModal) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
    this.studentListService.GetUsers().subscribe(res => {
      this.TempUsers = res;
      this.Users = this.TempUsers.results
    });
  }

  open_student_modal(usersID='') {

    const modalRef = this.modalService.open(StudentModalComponent, { size: "xl" });
    modalRef.componentInstance.usersID=usersID;
    
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
