import { Component, 
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef } from '@angular/core';
import { CompItem, compsData, getId } from '../configs/editor-data';
import { DragulaService } from 'ng2-dragula';
import { subscribeOn } from 'rxjs';
import { ButtonComponent } from '../form-editor-plugin-lib/button/button.component';
import { ContentComponent } from '../form-editor-plugin-lib/content/content.component';


@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent {
  @ViewChild('dyRoom', { read: ViewContainerRef })
  dyRoom!: ViewContainerRef;
  compsData: any = compsData
  compSelectComp: any = undefined

  // 页面动态API参数
  dyPageContentComp: any[] = []

  pageComps:any[] = [

  ];

  constructor(
    private dragulaService: DragulaService,
    private cfr: ComponentFactoryResolver) {
    dragulaService.createGroup('CompItem', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (comp: CompItem) => {
        const currComp =  new CompItem(comp.type);
        currComp['children'] = [ new CompItem('button')]
        this.selectComp(currComp)
        console.log('currComp', currComp)
        this.dyPageContentComp.push(currComp)
        return currComp
      },
      accepts: (el, target: any, source, sibling) => {
        console.log('dyPageContentComp', this.dyPageContentComp)
        return target.id !== 'left';
      },
      moves: (el, container:any, handle:any) => {
        console.log('move')
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

  addDyComp() {
    let compFactory = this.cfr.resolveComponentFactory(ContentComponent)
    let compRef = this.dyRoom.createComponent(compFactory)

    // 当前组件实例
    const compInstance = compRef.instance;
    const nextSettingObject =  {
      id: this.pageComps.length
    }
    this.dragulaService.createGroup('GROUP_NAME', compRef.location.nativeElement);
    compInstance.dyCompSettingObject = nextSettingObject


    const index = 0

    const currComp = {
      ...this.pageComps[index],
      id: getId()
    }
    this.selectComp(currComp)
    this.pageComps.splice(index, 0,currComp)
  }


}
