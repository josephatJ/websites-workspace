export interface CustomFieldInterface {
  id: string;
  label: string;
  options?: CustomFieldOptionInterface[];
  cols?: number;
  rows?: number;
  disabled?: any;
  value?: any;
  type?: string;
  placeholder?: string;
  required?: any;
  showClear?: boolean;
  minDate?: Date;
  maxDate?: Date;
  mask?: string;
  min?: number;
  max?: number;
}

export interface CustomFieldOptionInterface {
  id: string;
  code: any;
  label: string;
  value?: string;
}

export class CustomFieldOption implements CustomFieldOptionInterface {
  id: string;
  code: any;
  label: string;
  value?: string;

  constructor(init?: Partial<CustomFieldOption>) {
    this.id = init?.id || '';
    this.code = init?.code || null;
    this.label = init?.label || '';
    this.value = init?.value;
  }
}

export class CustomField implements CustomFieldInterface {
  id: string;
  label: string;
  options?: CustomFieldOption[];
  cols?: number;
  rows?: number;
  disabled?: any;
  value?: any;
  type?: string;
  placeholder?: string;
  required?: any;
  showClear?: boolean;
  minDate?: Date;
  maxDate?: Date;
  mask?: string;
  min?: number;
  max?: number;

  constructor(init?: Partial<CustomField>) {
    this.id = init?.id || '';
    this.label = init?.label || '';
    this.options = init?.options?.map((o) => new CustomFieldOption(o)) || [];
    this.cols = init?.cols;
    this.rows = init?.rows;
    this.disabled = init?.disabled;
    this.value = init?.value;
    this.type = init?.type;
    this.placeholder = init?.placeholder;
    this.required = init?.required;
    this.showClear = init?.showClear;
    this.minDate = init?.minDate;
    this.maxDate = init?.maxDate;
    this.mask = init?.mask;
    this.min = init?.min;
    this.max = init?.max;
  }
}
