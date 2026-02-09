'use client';

import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';

export const Avatar = ({ src, alt, name, children, sx }: { src?: string; alt?: string; name?: string; children?: React.ReactNode; sx?: any }) => {
    return <MuiAvatar src={src} alt={alt} sx={sx}>{children || name?.charAt(0)}</MuiAvatar>;
};
