import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputOtpModule } from 'primeng/inputotp';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { CustomField } from '../models/default-field.model';
import { determinFormValidity } from '../helpers/determine-form-vality.helper';

@Component({
  selector: 'lib-ngx-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputOtpModule,
    DatePickerModule,
    SelectModule,
  ],
  templateUrl: './ngx-form.html',
  styleUrl: './ngx-form.css',
})
export class NgxForm implements OnChanges {
  @Input() formFields!: CustomField[];
  @Input() responsivenessClass: string = 'col-md-4';
  formValues: any = {};
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes as any)?.formFields?.currentValue?.length > 0) {
      (changes as any)?.formFields?.currentValue?.forEach(
        (currentFormField: any) => {
          this.formValues[currentFormField?.id] = {
            value:
              currentFormField?.type !== 'PHONE_NUMBER'
                ? currentFormField?.value
                : currentFormField?.value?.split('-')?.join(''),
            key: currentFormField?.id,
            field: currentFormField,
          };
        }
      );
      this.formData.emit({
        data: this.formValues,
        isFormValid: determinFormValidity(this.formValues, this.formFields),
      });
    }
  }

  getDataValue(value: any, fieldDefinition: CustomField): void {
    // console.log('value checking', value);
    this.formValues[fieldDefinition?.id] = {
      value:
        fieldDefinition?.type !== 'PHONE_NUMBER'
          ? value?.code
            ? value?.code
            : value
          : value.split('-').join(''),
      key: fieldDefinition?.id,
      field: fieldDefinition,
    };
    // console.log('formValues', this.formValues);
    this.formData.emit({
      data: this.formValues,
      isFormValid: determinFormValidity(this.formValues, this.formFields),
    });
  }

  onGetUserDetails(userDetails: any): void {}
}
