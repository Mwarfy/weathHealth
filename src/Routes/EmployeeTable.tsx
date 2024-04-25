import { Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector } from "../Reducer/store";

const EmployeeTable: React.FC = () => {
  const employees = useAppSelector((state) => state.reducer.employees);

  const rows = employees.map((employee, index) => ({ id: index, ...employee }));

  const columns = [
    { field: "selectedFirstName", headerName: "First name" },
    { field: "selectedLastName", headerName: "Last name" },
    { field: "selectedDateBirth", headerName: "Date of Birth" },
    { field: "selectedStartDate", headerName: "Start Date" },
    { field: "selectedStreet", headerName: "Street" },
    { field: "selectedCity", headerName: "City" },
    { field: "selectedState", headerName: "State" },
    { field: "selectedZipCode", headerName: "Zip Code" },
    { field: "selectedDepartment", headerName: "Department" },
  ];

  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="text-3xl font-bold text-center p-4">Employees</span>
      <div style={{ maxHeight: "58%", width: 900 }}>
        <DataGrid rows={rows} columns={columns} rowCount={employees.length} />
      </div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default EmployeeTable;
