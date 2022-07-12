import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  catList: any = [];
  list = new BehaviorSubject<any>([]);
  pagelist: any = [];
  listof = new BehaviorSubject<any>([]);
  getfriends(page: number = 1) {
    return this.http.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/10`
    );
  }
  getUser(par: number) {
    return this.http.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${par}`
    );
  }

  saveInfo(par: number) {
    this.catList.push(par);
    this.list.next(this.catList);
  }
  getCats() {
    return this.list;
  }
  savePage(page: number) {
    this.pagelist.push(page);
    this.listof.next(this.pagelist);
  }
  getPage() {
    return this.listof;
  }
}
