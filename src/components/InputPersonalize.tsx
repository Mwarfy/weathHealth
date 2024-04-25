import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../Reducer/store";

export const InputPersonalize: React.FC<{
  label: string;
  value?: string;
  setValue: ActionCreatorWithPayload<string>;
}> = ({ value, setValue, label }) => {
  const dispatch = useAppDispatch();
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              boxShadow: "0 0 0 4px rgba(100, 141, 255, 0.5)",
              borderColor: "transparent",
              borderRadius: "2px",
            },
          },
          input: {
            height: "16px",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col gap-2 mt-1 w-[200px]">
        <span>{label}</span>
        {label === "Start Date" || label === "Date of Birth" ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="shadow"
              onChange={(v) => v && dispatch(setValue(v.format("YYYY-MM-DD")))}
            />
          </LocalizationProvider>
        ) : (
          <TextField
            variant="outlined"
            className="shadow"
            size="small"
            value={value || ""}
            onChange={(v) => dispatch(setValue(v.target.value))}
          />
        )}
      </div>
    </ThemeProvider>
  );
};
