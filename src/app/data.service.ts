import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;
  private data2: any;

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  setData2(data2: any) {
    this.data2 = data2;
  }

  getData2(): any {
    return this.data2;
  }
  
}
