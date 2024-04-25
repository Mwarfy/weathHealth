import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { departments } from "../types/departments";
import { IEmployees } from "../types/general";
import { states } from "../types/states";

export type IReducer = {
  selectedFirstName?: string;
  selectedLastName?: string;
  selectedDateBirth: string;
  selectedStartDate: string;
  selectedStreet?: string;
  selectedCity?: string;
  selectedState: string;
  selectedZipCode?: string;
  selectedDepartment: string;
  employees: IEmployees[];
};

export const initialState: IReducer = {
  selectedFirstName: undefined,
  selectedLastName: undefined,
  selectedDateBirth: "",
  selectedStartDate: "",
  selectedStreet: undefined,
  selectedCity: undefined,
  selectedState: states[0].name,
  selectedZipCode: undefined,
  selectedDepartment: departments[0].name,
  employees: [],
};

export const setSelectedFirstName = createAction<string>(
  "setSelectedFirstName"
);
export const setSelectedLastName = createAction<string>("setSelectedLastName");
export const setSelectedDateBirth = createAction<string>(
  "setSelectedDateBirth"
);
export const setSelectedStartDate = createAction<string>(
  "setSelectedStartDate"
);
export const setSelectedStreet = createAction<string>("setSelectedStreet");
export const setSelectedCity = createAction<string>("setSelectedCity");
export const setSelectedState = createAction<string>("setSelectedState");
export const setSelectedZipCode = createAction<string>("setSelectedZipCode");
export const setSelectedDepartment = createAction<string>(
  "setSelectedDepartment"
);

export const addEmployee = createAction<IEmployees>("addEmployees");

export const reducer = createSlice({
  name: "reducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setSelectedFirstName, (state, action) => {
        state.selectedFirstName = action.payload;
      })
      .addCase(setSelectedLastName, (state, action) => {
        state.selectedLastName = action.payload;
      })
      .addCase(setSelectedDateBirth, (state, action) => {
        state.selectedDateBirth = action.payload;
      })
      .addCase(setSelectedStartDate, (state, action) => {
        state.selectedStartDate = action.payload;
      })
      .addCase(setSelectedStreet, (state, action) => {
        state.selectedStreet = action.payload;
      })
      .addCase(setSelectedCity, (state, action) => {
        state.selectedCity = action.payload;
      })
      .addCase(setSelectedState, (state, action) => {
        state.selectedState = action.payload;
      })
      .addCase(setSelectedZipCode, (state, action) => {
        state.selectedZipCode = action.payload;
      })
      .addCase(setSelectedDepartment, (state, action) => {
        state.selectedDepartment = action.payload;
      })
      .addCase(addEmployee, (state, action: PayloadAction<IEmployees>) => {
        state.employees = [...state.employees, action.payload];
      }),
});
