'use client';

import React from 'react';
import { Alert as MuiAlert } from '@mui/material';

export const Alert = ({ children, severity = 'info', sx }: { children: React.ReactNode; severity?: 'info' | 'success' | 'warning' | 'error'; sx?: any }) => {
    return <MuiAlert severity={severity} sx={sx}>{children}</MuiAlert>;
};
