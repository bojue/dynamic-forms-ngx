import { Component } from '@angular/core';
import { CompItem, compsData, getId } from '../configs/editor-data';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent {
  compsData: any = compsData
  compSelectComp: any = undefined

  pageComps:any[] = [

  ];

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('CompItem', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (comp: CompItem) => {
        const currComp =  new CompItem(comp.type);
        this.selectComp(currComp)
        return currComp
      },
      accepts: (el, target: any, source, sibling) => {
        return target.id !== 'left';
      },
      moves: (el, container:any, handle:any) => {
        return  container.id === 'left' ||  handle?.classList?.contains('move-icon')
      }
    });
  }

  controlEvent(state: 'copy' | 'delete', index: number) {
    switch(state) {
      case 'copy':
        const currComp = {
          ...this.pageComps[index],
          id: getId()
        }
        this.selectComp(currComp)
        this.pageComps.splice(index, 0,currComp)
        break;
      case 'delete':
        this.pageComps.splice(index, 1)
        break;
      default:
        console.info("控制类型没有设置:", state)
    }
  }

  addComp(comp:any) {
    const curr = new CompItem(comp.text);
    this.pageComps.push(curr)
    this.selectComp(curr)
  }


  selectComp(comp: any) {
    this.compSelectComp = {
      ...comp
    }
  }


}
