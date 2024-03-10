import {v1 as uuid } from 'uuid'
export const getTypeByType = {
  input: "单行输入",
  textarea: "多行输入",
  button: "按钮",
}

export class CompItem {
  type: string
  name: string
  id: string
  data_key: string
  data_value: string 
  [key: string]: any
  constructor(public compType: string) {
    this.type = compType;
    this.id = uuid();
    this.data_key = `${compType}_${ this.id }`;
    this.data_value = compType ? "这是文本内容！" : '';
    this.name =  {
      input: "单行输入",
      textarea: "多行输入",
      button: "按钮",
      text: "文字"
    }[compType] as string
    
  }
}
const CompData_SHOW = [
  new CompItem('text')
]


const CompData_FORM = [
  new CompItem('input'),
  new CompItem('button'),
  new CompItem('content')
];

export function getId() {
  return uuid()
}

export const compsData = [{
  name: '表单组件',
  showState: true,
  data: CompData_FORM,
  children: [{
    name: '单行输入',
    text: 'input',
    icon: 'assets/form-editor-designer/input.svg'
  },
  {
    name: '按钮',
    text: 'button',
    icon: 'assets/form-editor-designer/button.svg'
  },  
  {
    name: '容器',
    text: 'content',
    icon: 'assets/form-editor-designer/button.svg'
  }]
}]