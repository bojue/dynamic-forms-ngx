import { Component } from '@angular/core';

type AsyncFunction = (previousResult: any) => Promise<any>;


@Component({
  selector: 'app-funciton',
  templateUrl: './funciton.component.html',
  styleUrls: ['./funciton.component.scss']
})


export class FuncitonComponent {
  count: number = 0
  constructor() {
    this.getData()
    this.executeAsyncFunctions(this.asyncFunctions)
  }

  asyncFunctions: any[] = [];

  async getData() {
    for(let i=0;i< 3;i++) {
      const item = this.promiseFun
      this.asyncFunctions.push(item)
    }
  }

  async executeAsyncFunctions(asyncFunctions: AsyncFunction[]) {
    let previousResult: any = null;
    for (const asyncFunction of asyncFunctions) {
      previousResult = await asyncFunction(previousResult);
    }
  }


  async promiseFun(previousResult?: any) {
    return new Promise<void | any>((resolve) => {
      resolve({
        date: new Date().getTime()
      })
    })
  }
}
