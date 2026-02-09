'use client';

import React from 'react';
import { Button as AntButton } from 'antd';

export const Button = ({ children, type = 'primary', ...props }: { children: React.ReactNode, type?: 'primary' | 'default' | 'dashed' | 'link' | 'text', [key: string]: any }) => {
    return (
        <AntButton type={type} {...props}>
            {children}
        </AntButton>
    );
};
