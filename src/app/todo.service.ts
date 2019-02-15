import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public items: any = [];

  constructor(private httpClient: HttpClient) {

  }

  getItems() {
    return this.items.slice();
  }
}
