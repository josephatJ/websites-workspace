import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDepartmentActivities',
})
export class FilterDepartmentActivitiesPipe implements PipeTransform {
  transform(departmentActivities: any[], department: string): any[] {
    return !department
      ? departmentActivities
      : departmentActivities.filter(
          (activity) => activity.department === department
        ) || [];
  }
}
