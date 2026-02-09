'use client';

import React from 'react';
import { Button as MuiButton } from '@mui/material';

export const Button = ({ children, variant = 'contained', ...props }: { children: React.ReactNode, variant?: 'text' | 'outlined' | 'contained', [key: string]: any }) => {
    return (
        <MuiButton variant={variant} {...props}>
            {children}
        </MuiButton>
    );
};
