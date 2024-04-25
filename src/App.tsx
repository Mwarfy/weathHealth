import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./Routes/CreateEmployee";
import EmployeeTable from "./Routes/EmployeeTable";
import { IMenuRoute } from "./types/general";

export const MENUS: IMenuRoute[] = [
  {
    value: "/",
    route: <CreateEmployee />,
  },
  {
    value: "/list",
    route: <EmployeeTable />,
  },
];

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        className="fixed inset-0 flex flex-col overflow-hidden bg-slate-100 font-sans dark:bg-slate-800 dark:text-white"
        data-testid="app"
      >
        <Routes>
          {MENUS.map(({ value, route }, i) => (
            <Route path={value} key={i} element={route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
