import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {
  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle: any) => handle.className === "group-handle"
    });
  }


  public groups:Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'}, {name: 'Item B'}, {name: 'Item C'}, {name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    }
  ];
}
