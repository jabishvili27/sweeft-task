import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-openCat',
  templateUrl: './openCat.component.html',
  styleUrls: ['./openCat.component.css'],
})
export class OpenCatComponent implements OnInit {
  cats: any;
  cat: any;
  result: any;
  results: any;
  constructor(private http: HttpClient, private api: ApiService) {}

  ngOnInit() {
    this.api.getCats().subscribe((item) => {
      this.result = item[item.length - 1]?.id;
      this.results = item;
    });
    this.updateInfo(this.result);
  }
  updateInfo(par = this.result) {
    this.api.getCats().subscribe((item) => {
      this.result = item[item.length - 1]?.id;
      this.results = item;
    });
    if (this.result) {
      this.api.getUser(par).subscribe((res) => {
        this.cats = res;
      });
    }
    this.api.getfriends().subscribe((res) => {
      this.cat = res;
    });
  }
  saveInfo(par: any) {
    this.api.saveInfo(par);
    this.updateInfo();
  }
  returnCatPage(par: any) {
    this.cats = par;
    this.updateInfo(par.id);
  }
}
