import type { NamePath, RuleObject } from 'ant-design-vue/lib/form/interface';
import type { VNode } from 'vue';
import type { BasicButtonProps } from '/@/components/Button/types';
import type { FormItem } from './formItem';
import type { ColEx, ComponentType } from './index';
import { TableActionType } from '../../../Table/src/types/table';

export type FieldMapToTime = [string, [string, string], string?][];

export type Rule = RuleObject & {
  trigger?: 'blur' | 'change' | ['change', 'blur'];
};

export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}

export interface ButtonProps extends BasicButtonProps {
  text?: string;
}

export interface FormActionType {
  submit: () => Promise<void>;
  setFieldsValue: <T>(values: T) => void;
  resetFields: () => Promise<any>;
  getFieldsValue: () => any;
  clearValidate: (name?: string | string[]) => void;
  updateSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => void;
  setProps: (formProps: Partial<FormProps>) => void;
  removeSchemaByFiled: (field: string | string[]) => void;
  appendSchemaByField: (schema: FormSchema, prefixField?: string) => void;
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
  scrollToField: (name: NamePath, options?: ScrollOptions) => void;
}
export type RegisterFn = (formInstance: FormActionType) => void;

export type UseFormReturnType = [RegisterFn, FormActionType];

export interface FormProps {
  // 表单值
  model?: any;
  // 整个表单所有项宽度
  labelWidth?: number | string;
  // 重置时提交
  submitOnReset?: boolean;
  // 整个表单通用Col配置
  labelCol?: Partial<ColEx>;
  // 整个表单通用Col配置
  wrapperCol?: Partial<ColEx>;

  // 通用col配置
  baseColProps?: Partial<ColEx>;

  // 表单配置规则
  schemas?: FormSchema[];
  // 用于合并到动态控制表单项的 函数values
  mergeDynamicData?: any;
  // 紧凑模式,用于搜索表单
  compact?: boolean;
  // 空白行span
  emptySpan?: number | Partial<ColEx>;
  // 表单内部组件大小
  size?: 'default' | 'small' | 'large';
  // 是否禁用
  disabled?: boolean;
  // 时间区间字段映射成多个
  fieldMapToTime?: FieldMapToTime;
  // 自动设置placeholder
  autoSetPlaceHolder?: boolean;
  // 校验信息是否加入label
  rulesMessageJoinLabel?: boolean;
  // 是否显示收起展开按钮
  showAdvancedButton?: boolean;
  // 超过指定行数自动收起
  autoAdvancedLine?: number;
  // 是否显示操作按钮
  showActionButtonGroup?: boolean;

  // 重置按钮配置
  resetButtonOptions?: Partial<ButtonProps>;

  // 确认按钮配置
  submitButtonOptions?: Partial<ButtonProps>;

  // 操作列配置
  actionColOptions?: Partial<ColEx>;

  // 显示重置按钮
  showResetButton?: boolean;
  // 显示确认按钮
  showSubmitButton?: boolean;

  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
  transformDateFunc?: (date: any) => string;
  colon?: boolean;
}
export interface FormSchema {
  // 字段名
  field: string;
  // 内部值更改触发的事件名，默认 change
  changeEvent?: string;
  // v-model绑定的变量名 默认 value
  valueField?: string;
  // 标签名
  label: string;
  // 文本右侧帮助文本
  helpMessage?: string | string[];
  // BaseHelp组件props
  helpComponentProps?: Partial<HelpComponentProps>;
  // label宽度,有传的话 itemProps配置的 labelCol 和WrapperCol会失效
  labelWidth?: string | number;
  // 禁用调有formModel全局设置的labelWidth,自己手动设置 labelCol和wrapperCol
  disabledLabelWidth?: boolean;
  // 组件
  component: ComponentType;
  // 组件参数
  componentProps?:
    | ((opt: {
        schema: FormSchema;
        tableAction: TableActionType;
        formActionType: FormActionType;
        formModel: any;
      }) => any)
    | object;
  // 必填
  required?: boolean;

  // 校验规则
  rules?: Rule[];
  // 校验信息是否加入label
  rulesMessageJoinLabel?: boolean;

  // 参考formModelItem
  itemProps?: Partial<FormItem>;

  // formModelItem外层的col配置
  colProps?: Partial<ColEx>;

  // 默认值
  defaultValue?: any;
  isAdvanced?: boolean;

  // 配合详情组件
  span?: number;

  ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);

  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);

  // 渲染form-item标签内的内容
  render?: (renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string;

  // 渲染 col内容,需要外层包裹 form-item
  renderColContent?: (renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string;

  renderComponentContent?:
    | ((renderCallbackParams: RenderCallbackParams) => any)
    | VNode
    | VNode[]
    | string;

  // 自定义slot, 在 from-item内
  slot?: string;

  // 自定义slot,类似renderColContent
  colSlot?: string;

  dynamicDisabled?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);

  dynamicRules?: (renderCallbackParams: RenderCallbackParams) => Rule[];
}
export interface HelpComponentProps {
  maxWidth: string;
  // 是否显示序号
  showIndex: boolean;
  // 文本列表
  text: any;
  // 颜色
  color: string;
  // 字体大小
  fontSize: string;
  icon: string;
  absolute: boolean;
  // 定位
  position: any;
}
