export interface IMenuRoute {
  value: string;
  route: JSX.Element;
}

export interface IEmployees {
  selectedFirstName?: string;
  selectedLastName?: string;
  selectedDateBirth?: string;
  selectedStartDate?: string;
  selectedStreet?: string;
  selectedCity?: string;
  selectedState?: string;
  selectedZipCode?: string;
  selectedDepartment: string;
}
