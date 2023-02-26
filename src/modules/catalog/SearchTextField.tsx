import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { SearchIcon } from "../../tools/icons";

export const SearchTextField = ({ ...props }) => {
    return (
      <TextField
        {...props}
        variant="outlined"
        fullWidth
        inputProps={{
            style: {
                height: 37,
                padding: 0
            },
          }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{<SearchIcon />}</InputAdornment>
        )}}
      />
    );
  };