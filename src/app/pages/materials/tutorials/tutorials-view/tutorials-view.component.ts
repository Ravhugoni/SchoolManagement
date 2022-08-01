import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorials-view',
  templateUrl: './tutorials-view.component.html',
  styleUrls: ['./tutorials-view.component.scss']
})
export class TutorialsViewComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  tutorialList()
  {
    this._router.navigate(['/tutorials/tutorials-list'])
  }

}
