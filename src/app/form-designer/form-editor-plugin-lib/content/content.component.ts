import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() dyCompSettingObject: any

  children: any[] = []

  ngOnInit() {
    this.children = this.dyCompSettingObject.children
  }
}
