import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent implements OnInit {

  usersID = ''
  TempUsers:any; TemproleData:any; roleData:any;
  User = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    roleID: new FormControl('', [Validators.required]),
  })

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private studentListService: StudentListService, public activeModal: NgbActiveModal) { }
  close(message: string = '') {
    this.notifyParent.emit(message);
    this.activeModal.close();
  }
  ngOnInit(): void {

    this.getRoles();
    if (this.usersID !== '') {
      this.getUserByID(this.usersID);
    }
  }

  save(){
    if (this.usersID !== '') {
      this.updateUser();

    }else{
      this.newUser()
    }
  }

  newUser() {

    let userDetails = {
      firstName: this.User.value.firstName,
      middleName: this.User.value.middleName,
      LastName: this.User.value.LastName,
      idNumber: this.User.value.idNumber,
      gender: this.User.value.gender,
      phone: this.User.value.phone,
      address: this.User.value.address,
      email: this.User.value.email,
      roleID: this.User.value.roleID
    }
    console.log(userDetails)

    this.studentListService.AddUser(userDetails)
    .subscribe(() => {
        console.log('User added successfully!')
        this.close('reload')
      }, (err) => {
        console.log(err);
        console.log('not sent')
        this.close()
    });

  }

  updateUser() {

    let userDetails = {
      firstName: this.User.value.firstName,
      middleName: this.User.value.middleName,
      LastName: this.User.value.LastName,
      idNumber: this.User.value.idNumber,
      gender: this.User.value.gender,
      phone: this.User.value.phone,
      address: this.User.value.address,
      email: this.User.value.email,
      roleID: this.User.value.roleID
    }

    console.log(userDetails);
    // this.request.PutRequest('/api/user',userDetails).subscribe(
    //   {
    //     next: date => {
    //       this.close('reload')
    //       this.request.showSuccess('User Updated','Edit User')

    //     }, error: err => {
    //       this.close()
    //       this.request.showError("User not Updated", "Edit User")
    //     }
    //   }
    // )
  }

  getUserByID(usersID: any) {
    this.studentListService.GetUserByID(usersID).subscribe(res => {
      this.TempUsers = res;
      this.User.patchValue(this.TempUsers.results[0]);
    });
  }

  getRoles(){

    this.studentListService.GetRoles().subscribe(res => {
      this.TemproleData = res;
      this.roleData = this.TemproleData.results

      console.log(this.roleData)
    });
  //   this.request.GetRequest('/roles/roles_list').subscribe(
  //     {
  //       next: data => {
  //         this.roleData = data;
  //       }
  //     }
  //   )
  }

}
