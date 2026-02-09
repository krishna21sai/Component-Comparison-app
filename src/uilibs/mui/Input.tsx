'use client';

import React from 'react';
import { TextField } from '@mui/material';

export const Input = (props: any) => {
    return <TextField variant="outlined" size="small" fullWidth {...props} />;
};
