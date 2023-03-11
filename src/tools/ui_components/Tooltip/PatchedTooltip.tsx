import React from 'react';
import { Tooltip } from '@mui/material';

const PatchTooltip = ({children, title, ...props}: {children: any, title: string}) =>
  <Tooltip {...props} title={title} >
    <span>{children}</span>
  </Tooltip>

export default PatchTooltip;
