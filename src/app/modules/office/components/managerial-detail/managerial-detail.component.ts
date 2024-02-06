import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MANAGERIAL_DATA } from 'src/app/data';
import { ManagerialInterface } from 'src/app/interfaces/managerial.interface';

@Component({
  selector: 'app-managerial-detail',
  templateUrl: './managerial-detail.component.html',
  styleUrls: ['./managerial-detail.component.scss']
})
export class ManagerialDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { };

  data: ManagerialInterface | undefined;

  ngOnInit(): void {
    this.getData();
  };

  getData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const filteredData = MANAGERIAL_DATA.filter(value => value.id == Number(id));

    if (filteredData.length > 0){
      this.data = filteredData[0];
    }
  }
}
