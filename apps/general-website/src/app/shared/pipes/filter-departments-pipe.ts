import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDepartments',
})
export class FilterDepartmentsPipe implements PipeTransform {
  transform(departments: any[], filter: string): any[] {
    return !filter
      ? departments
      : departments.filter((department) => department.id === filter) || [];
  }
}
