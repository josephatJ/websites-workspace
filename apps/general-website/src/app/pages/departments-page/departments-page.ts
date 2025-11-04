import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';

@Component({
  selector: 'app-departments-page',
  imports: [CommonModule, SharedPagesWelcomeContainer],
  templateUrl: './departments-page.html',
  styleUrl: './departments-page.css',
})
export class DepartmentsPage implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private generalStateService = inject(SharedGeneralServiceAndState);
  uuid!: string;
  category!: string;
  departments = this.generalStateService.departments;
  currentDepartmentAndProjectsPageItem =
    this.generalStateService.currentDepartmentAndProjectsPageItem;
  departmentsActivities = this.generalStateService.departmentsActivities;

  ngOnInit(): void {
    this.uuid = this.activateRoute.snapshot.params['id'];
    this.category = this.activateRoute.snapshot.params['category'];

    if (
      this.category === 'departments' &&
      !this.departments().find(
        (department: any) => department?.id === this.uuid
      )
    ) {
      this.generalStateService
        .loadData(`items/departments?fields=*`)
        .subscribe({
          next: (response: any) => {
            this.generalStateService.updateDepartments(response);
            const department = this.departments().find(
              (department: any) => department?.id === this.uuid
            );
            if (department) {
              this.generalStateService.updateCurrentDepartmentAndProjectsPageItem(
                department
              );
            }
          },
        });
    } else {
      if (this.category === 'departments') {
        const department = this.departments().find(
          (department: any) => department?.id === this.uuid
        );
        if (department) {
          this.generalStateService.updateCurrentDepartmentAndProjectsPageItem(
            department
          );
        }
      } else {
        // Handle projects or other categories if needed
        console.warn('Category not handled:', this.category);
      }
    }

    if (this.departmentsActivities().length === 0) {
      this.generalStateService
        .loadData(`items/departmentActivities?fields=*`)
        .subscribe({
          next: (response: any) => {
            this.generalStateService.updateDepartmentsActivities(response);
          },
        });
    }
  }

  onSetCurrentDepartment(department: any, category: string) {
    this.uuid = department?.id;
    this.category = category;
    this.router.navigate([
      `departments-and-projects/${this.category}/${this.uuid}`,
    ]);
    this.generalStateService.updateCurrentDepartmentAndProjectsPageItem(
      department
    );
  }
}
