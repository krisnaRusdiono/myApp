import { Component } from '@angular/core';
import { MANAGERIAL_DATA } from 'src/app/data';

@Component({
  selector: 'app-managerial',
  templateUrl: './managerial.component.html',
  styleUrls: ['./managerial.component.scss']
})
export class ManagerialComponent {
  managerialList = MANAGERIAL_DATA;
}
