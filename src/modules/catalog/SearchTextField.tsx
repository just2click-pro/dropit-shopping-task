import React, { ForwardedRef } from 'react'

import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"

import { SearchIcon } from "../../tools/icons"

type SearchTextFieldProps = {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  value?: string
}

export const SearchTextField = React.forwardRef((props: SearchTextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
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
      ref={ref}
    />
  );
})