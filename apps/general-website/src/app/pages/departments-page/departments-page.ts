import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedPagesWelcomeContainer } from '../../shared/components/shared-pages-welcome-container/shared-pages-welcome-container';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedGeneralServiceAndState } from '../../shared/services/general-state.service';
import { FilterDepartmentActivitiesPipe } from '../../shared/pipes/filter-department-activities-pipe';
import { SharedPagesService } from '../../shared/services/pages-state.service';

@Component({
  selector: 'app-departments-page',
  imports: [
    CommonModule,
    SharedPagesWelcomeContainer,
    FilterDepartmentActivitiesPipe,
  ],
  templateUrl: './departments-page.html',
  styleUrl: './departments-page.css',
})
export class DepartmentsPage implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private generalStateService = inject(SharedGeneralServiceAndState);
  private pagesState = inject(SharedPagesService);
  currentPagePath = this.pagesState.currentPagePath;
  uuid: string | null = null;
  departments = this.generalStateService.departments;
  currentDepartmentAndProjectsPageItem =
    this.generalStateService.currentDepartmentAndProjectsPageItem;
  departmentsActivities = this.generalStateService.departmentsActivities;

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.uuid = params?.get('id');
      this.handleDepartmentLoad();
      this.handleDepartmentActivities();
    });
  }

  private handleDepartmentLoad() {
    this.pagesState.updateCurrentPagePath(
      `/departments/departments/${this.uuid}`
    );

    const department = this.departments().find((d: any) => d?.id === this.uuid);

    if (!department) {
      this.generalStateService
        .loadData(`items/departments?fields=*`)
        .subscribe({
          next: (response: any) => {
            this.generalStateService.updateDepartments(response);
            const dep = this.departments().find(
              (d: any) => d?.id === this.uuid
            );
            if (dep) {
              this.generalStateService.updateCurrentDepartmentAndProjectsPageItem(
                dep
              );
            }
          },
        });
    } else {
      this.generalStateService.updateCurrentDepartmentAndProjectsPageItem(
        department
      );
    }
  }

  private handleDepartmentActivities() {
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
    this.router.navigate([`departments/departments/${this.uuid}`]);
    this.generalStateService.updateCurrentDepartmentAndProjectsPageItem(
      department
    );
  }
}
