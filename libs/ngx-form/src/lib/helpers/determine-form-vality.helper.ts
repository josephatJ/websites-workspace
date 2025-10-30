import { CustomFieldInterface } from '../models';

export function determinFormValidity(
  keyedValues: any,
  formFields: CustomFieldInterface[]
): boolean {
  let isFormValid: boolean =
    (
      formFields?.filter(
        (formField: CustomFieldInterface) =>
          formField?.required &&
          keyedValues[formField?.id]?.value &&
          keyedValues[formField?.id]?.value != ''
      ) || []
    )?.length ===
    (
      formFields?.filter(
        (formField: CustomFieldInterface) => formField?.required
      ) || []
    )?.length;
  return isFormValid;
}
