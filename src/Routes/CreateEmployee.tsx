import { Close } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Dialog,
  IconButton,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { InputPersonalize } from "../components/InputPersonalize";
import {
  addEmployee,
  setSelectedCity,
  setSelectedDateBirth,
  setSelectedDepartment,
  setSelectedFirstName,
  setSelectedLastName,
  setSelectedStartDate,
  setSelectedState,
  setSelectedStreet,
  setSelectedZipCode,
} from "../Reducer/reducer";
import { useAppDispatch, useAppSelector } from "../Reducer/store";
import { departments } from "../types/departments";
import { IEmployees } from "../types/general";
import { states } from "../types/states";

export const CreateEmployee: React.FC = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const {
    selectedFirstName,
    selectedLastName,
    selectedDateBirth,
    selectedStartDate,
    selectedStreet,
    selectedCity,
    selectedState,
    selectedZipCode,
    selectedDepartment,
    employees,
  } = useAppSelector(({ reducer }) => reducer);
  const inputsCharacter = [
    {
      label: "First Name",
      value: selectedFirstName,
      setValue: setSelectedFirstName,
    },
    {
      label: "Last Name",
      value: selectedLastName,
      setValue: setSelectedLastName,
    },
    {
      label: "Date of Birth",
      value: selectedDateBirth,
      setValue: setSelectedDateBirth,
    },
    {
      label: "Start Date",
      value: selectedStartDate,
      setValue: setSelectedStartDate,
    },
  ];
  const inputsAdress = [
    {
      label: "Street",
      value: selectedStreet,
      setValue: setSelectedStreet,
    },
    {
      label: "City",
      value: selectedCity,
      setValue: setSelectedCity,
    },
  ];
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newEmployee: IEmployees = {
      selectedFirstName,
      selectedLastName,
      selectedDateBirth,
      selectedStartDate,
      selectedStreet,
      selectedCity,
      selectedState,
      selectedZipCode,
      selectedDepartment,
    };

    dispatch(addEmployee(newEmployee));
    setOpen(true);
  };
  return (
    <div className="flex flex-col justify-center items-center font-serif">
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-3xl font-bold">HRnet</span>
          <Link href="list">View Current Employees</Link>
          <span className="text-xl font-bold">Create Employee</span>
        </div>
        <form onSubmit={handleSubmit}>
          {inputsCharacter.map((data, index) => (
            <InputPersonalize
              key={index}
              label={data.label}
              value={data.value}
              setValue={data.setValue}
            />
          ))}

          <Box component="fieldset" className="border border-black p-4">
            <Typography component="legend" className="px-1">
              Adress
            </Typography>
            {inputsAdress.map((data, index) => (
              <InputPersonalize
                key={index}
                label={data.label}
                value={data.value}
                setValue={data.setValue}
              />
            ))}
            <span>State</span>
            <Select
              id="state"
              size="small"
              className="w-full"
              value={selectedState}
              onChange={(event) =>
                dispatch(setSelectedState(event.target.value))
              }
            >
              {states.map((state, index) => (
                <MenuItem key={index} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>

            <InputPersonalize
              label="Zip Code"
              value={selectedZipCode}
              setValue={setSelectedZipCode}
            />
          </Box>
          <div className="flex flex-col gap-2">
            <span>Department</span>
            <Select
              id="department"
              size="small"
              className="w-[350px]"
              value={selectedDepartment}
              onChange={(event) =>
                dispatch(setSelectedDepartment(event.target.value))
              }
            >
              {departments.map((department, index) => (
                <MenuItem key={index} value={department.name}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button
              variant="contained"
              size="small"
              className="self-center"
              color="inherit"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
        <div>
          <Dialog open={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Close fontSize="inherit" />
                </IconButton>
              }
            >
              Employee Created !
            </Alert>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
