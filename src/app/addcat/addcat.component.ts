import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ApiService } from '../service/api.service';
//import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css'],
})
export class AddcatComponent implements OnInit, AfterViewInit {
  @ViewChildren('lastCat', { read: ElementRef })
  lastCatt: any;
  cats: any = [];
  totalPage: any;
  currentPage: number = 1;
  obser: any;
  searchText: string = '';
  filteredCoints = [];
  constructor(
    private http: HttpClient,
    private api: ApiService //private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.intersectionObserver();
  }
  getUsers() {
    //  this.spinner.show();
    this.api.getfriends(this.currentPage).subscribe((res: any) => {
      // this.spinner.hide();
      res.list.forEach((e: any) => {
        this.cats.push(e);
      });
      this.totalPage = res?.pagination.total;

      console.log(this.totalPage);
    });
  }
  ngAfterViewInit() {
    this.lastCatt.changes.subscribe((e: any) => {
      if (e.last) this.obser.observe(e.last.nativeElement);
    });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.obser = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPage) {
          this.currentPage++;
          this.getUsers();
        }
      }
    }, options);
  }
  saveInfo(par: any) {
    this.api.saveInfo(par);
  }
}
